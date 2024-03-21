import Toast from "@/components/common/Toast";
import PointOfContact from "@/components/events/PointOfContact";
import PrizeDetails from "@/components/events/PrizeDetails";
import VenueAndOrganizer from "@/components/events/VenueAndOrganizer";
import api from "@/lib/axios/api";
import Head from "next/head";
import useEventDetails from "@/lib/hooks/useEventDetails";
import getDriveDownloadUrl from "@/lib/utils/getDriveDownloadURL";
import isParticipated from "@/lib/utils/isParticipated";
import { Check, OpenInNew, PersonAdd, Share } from "@mui/icons-material";
import copy from "copy-to-clipboard";
// import { useRouter } from "next/router";
import {
  Button,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const EventDetails = () => {
  const router = useRouter();
  const [event, setEvent] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [participationStatus, setParticipationStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [eventId, setEventId] = useState();
  const [toastMessage, setToastMessage] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    setEventId((v) => router.query.eventId);
    isParticipated(router.query.eventId).then((r) =>
      setParticipationStatus((v) => r)
    );
    // console.log("participated", participationStatus);
    setLoading((v) => true);
    api.events
      .getById(router.query.eventId)
      .then((res) => res.data)
      .then(({ events }) => events[0])
      .then((event) => {
        setEvent((e) => event);
      })
      .catch((err) => {
        setError((v) => "Event not found");
      })
      .finally(() => {
        setLoading((v) => false);
      });
  }, [router.isReady]);

  const handleRegister = () => {
    if (participationStatus) return;
    if (!localStorage.getItem("token")) {
      router.push(`/registration?next=${router.asPath}`);
    }

    setIsLoading((v) => true);
    api.events
      .participate({
        eventId,
      })
      .then((res) => res.data)
      .then(({ Message, success }) => {
        if (!success) throw Error("Request failed");
        setToastMessage((m) => Message);
        setParticipationStatus((v) => true);
      })
      .catch((err) => {
        setToastMessage((m) => "Something went wrong!");
      })
      .finally(() => {
        setIsLoading((v) => false);
      });
  };

  return (
    <Stack alignItems="center">
      <Toast message={toastMessage} setMessage={setToastMessage} />
      {loading && (
        <>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              minHeight: "90vh",
            }}
          >
            <CircularProgress />
          </Stack>
        </>
      )}
      {error && <>Not Found</>}
      {event && (
        <Stack
          padding="72px 32px"
          alignItems="center"
          gap="32px"
          maxWidth="768px"
        >
          <Head>
            <title>{event.eventName}</title>
            <meta
              name="Login Page"
              content="Meta description for the Home page"
            />
            <link rel="shortcut icon" href="svLogo.png" />
          </Head>
          <Stack gap="8px" width="100%">
            <Typography
              variant="h1"
              textAlign={{
                xs: "center",
                md: "start",
              }}
              width="100%"
            >
              {event.eventName}
            </Typography>
            <Stack
              direction="row"
              gap="12px"
              width="100%"
              justifyContent={{
                xs: "center",
                md: "start",
              }}
            >
              <Button
                variant="contained"
                startIcon={participationStatus ? <Check /> : <PersonAdd />}
                onClick={handleRegister}
                endIcon={
                  isLoading && <CircularProgress size={12} color="white" />
                }
              >
                {participationStatus ? "Already registered" : "Register"}
              </Button>
              <Button
                onClick={() => {
                  copy("https://www.festvssut.in/" + router.asPath, {
                    message: "Click and Copy the link to share",
                  });
                  setToastMessage("Link copy to clipboard");
                }}
                variant="outlined"
                startIcon={<Share />}
              >
                Copy Link
              </Button>
            </Stack>

            <Divider />
          </Stack>
          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            alignItems={{
              xs: "center",
              md: "start",
            }}
            padding="32px 0px"
            gap="64px"
          >
            <Typography
              textAlign={{
                xs: "center",
                md: "start",
              }}
            >
              {event.eventDescription}
            </Typography>
            <Image
              src={getDriveDownloadUrl(event.posterUrl)}
              alt={event.eventName}
              width={300}
              height={400}
              style={{
                maxWidth: "300px",
                height: "auto",
              }}
            />
          </Stack>
          <VenueAndOrganizer
            venue={event.venue}
            organizer={event.organiser}
            accessTime={`${event.startTime} - ${event.endTime}`}
            day={event.day}
          />
          <PointOfContact email={event.email} />

          <PrizeDetails
            firstPrize={event.firstPrize}
            secondPrize={event.secondPrize}
            thirdPrize={event.thirdPrize}
          />
        </Stack>
      )}
    </Stack>
  );
};

export default EventDetails;
