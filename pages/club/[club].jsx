/* eslint-disable react-hooks/exhaustive-deps */

import useClubEvents from "@/lib/store/useClubEvents";
import { Stack } from "@mui/system";
import Head from "next/head";
import AppContext from "context/AppContext";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import ClubCard from "@/components/ClubCard";
import { Typography, Grid, Avatar } from "@mui/material";
import CircularProgress from "@mui/material";
import React from "react";
import EventCard from "@/components/events/EventCard";
import axios from "axios";
import Image from "next/image";
const ClubPage = () => {
  const { club } = React.useContext(AppContext);
  const router = useRouter();

  const [events, setEvents] = useState([]);
  const [clubFetched, setClubFetched] = useState({});
  useEffect(() => {
    if (!router.isReady) return;
    // console.log(router.query.club);
    axios
      .get(
        `https://sxv-backend.onrender.com/api/clubs/getClubDetailsById/${router.query.club}`
      )
      .then((response) => {
        // console.log(response.data.club[0]);
        setClubFetched(response.data.club);
      });
    axios
      .get(
        `https://sxv-backend.onrender.com/api/events/getEventsByClub/${router.query.club}`
      )
      .then((response) => {
        // console.log(response.data)
        setEvents((v) => response.data);
      });
  }, [router.isReady]);

  useEffect(() => {
    // console.log(router);
    // axios.get(`https://sxv-backend.onrender.com//api/clubs/getClubDetailsById/${router.query.club}`).then((response) => {
    //   setClubFetched(response.data.club)
    // })
    // axios.get(`https://sxv-backend.onrender.com//api/clubs/getEventsByClub/${router.query.club}`).then(response =>
    //   setEvents(response.data.events)
    // )
  }, [club]);
  const getDownloadUrl = (dUrl) => {
    let downloadUrl = `https://drive.google.com/uc?export=download&id=${
      dUrl?.split("/")[5]
    }`;
    return downloadUrl;
  };
  return (
    <Stack gap="24px">
      <Stack
        sx={{
          justifyContent: "space-between",
          padding: "20px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          margin: { xs: "0 auto", md: "0px" },
        }}
        gap="24px"
      >
        <Stack gap="32px">
          <Stack alignItems="center">
            <Image
              src={getDownloadUrl(clubFetched?.logo)}
              alt={clubFetched?.name}
              width={300}
              height={300}
            />
          </Stack>
          <Head>
            <title>{clubFetched?.name}</title>
            <meta
              name="Login Page"
              content="Meta description for the Home page"
            />
            <link rel="shortcut icon" href="svlogo.ico" />
          </Head>
          <Typography
            variant="h1"
            color="initial"
            textAlign={{
              xs: "center",
              md: "start",
            }}
            sx={{ fontSize: "3em" }}
          >
            {clubFetched?.name}
          </Typography>
          <Typography
            color="initial"
            textAlign={{
              xs: "center",
              md: "start",
            }}
          >
            {clubFetched?.description}
          </Typography>
        </Stack>
        <Stack
          alignItems={{
            xs: "center",
            md: "start",
          }}
        >
          <Typography
            variant="h4"
            color="initial"
            sx={{
              marginBottom: "30px",
              fontFamily: "BentonSans Comp Black",
              textTransform: "uppercase",
            }}
          >
            POINT OF CONTACT
          </Typography>

          <Stack
            sx={{
              display: "flex",
              flexDirection: { lg: "row", md: "row", xs: "row" },
              margin: { md: "0", sm: "0 auto" },
            }}
          >
            <Stack sx={{ alignItems: "center", marginRight: "10px" }}>
              <Avatar
                src={getDownloadUrl(clubFetched?.facultyAdvisorPhoto)}
                sx={{
                  height: { xs: "80px", md: "100px" },
                  width: { xs: "80px", md: "100px" },
                }}
              ></Avatar>
              <Typography
                variant="subtitle1"
                color="initial"
                sx={{ textAlign: "center" }}
              >
                {clubFetched?.facultyAdvisor}
              </Typography>
              <Typography
                variant="caption"
                color="initial"
                sx={{ textAlign: "center" }}
              >
                {clubFetched?.facultyAdvisorDepartment}
              </Typography>
            </Stack>
            <Stack sx={{ alignItems: "center", marginRight: "10px" }}>
              <Avatar
                src={getDownloadUrl(clubFetched?.poc1pic)}
                sx={{
                  height: { xs: "80px", md: "100px" },
                  width: { xs: "80px", md: "100px" },
                }}
              ></Avatar>
              <Typography
                variant="subtitle1"
                color="initial"
                sx={{ textAlign: "center" }}
              >
                {clubFetched?.poc1}
              </Typography>
              <Typography variant="caption" color="initial">
                {clubFetched?.poc1ph}
              </Typography>
            </Stack>
            <Stack sx={{ alignItems: "center", marginRight: "10px" }}>
              <Avatar
                src={getDownloadUrl(clubFetched?.poc2pic)}
                sx={{
                  height: { xs: "80px", md: "100px" },
                  width: { xs: "80px", md: "100px" },
                }}
              ></Avatar>
              <Typography
                variant="subtitle1"
                color="initial"
                sx={{ textAlign: "center" }}
              >
                {clubFetched?.poc2}
              </Typography>
              <Typography variant="caption" color="initial">
                {clubFetched?.poc2ph}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        sx={{ padding: "15px" }}
        alignItems={{ xs: "center", sm: "center", md: "start" }}
      >
        <Typography variant="h4" color="initial" marginBottom="3vmax">
          Events
        </Typography>
        <Grid
          container
          padding="16px"
          spacing="16px"
          sx={{
            width: "100%",
            justifyContent: "center",
          }}
        >
          {events ? (
            events.map((eve) => <EventCard key={eve.eventName} event={eve} />)
          ) : (
            <CircularProgress />
          )}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default ClubPage;
