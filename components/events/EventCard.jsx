import { OpenInNew } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const { Stack, Typography, Grid } = require("@mui/material");

const getDownloadUrl = (dUrl) => {
  let segments = dUrl.split("/");
  let downloadUrl = `https://drive.google.com/uc?export=download&id=${segments[5]}`;
  return downloadUrl;
};

const EventCard = ({ event }) => {
  const three = 3;
  return (
    <Grid item xs={12} md={5}>
      <Stack
        padding="12px"
        direction="row"
        border="1px solid"
        borderRadius="8px"
        gap="16px"
        height="100%"
      >
        <Link href={`/events/${event._id}`} passHref>
          <Image
            src={getDownloadUrl(event.posterUrl)}
            alt={event.eventName}
            width={150}
            height={150}
            style={{
              maxWidth: "180px",
              minWidth: "120px",
              width: "35%",
              height: "auto",
              aspectRatio: 1,
              borderRadius: "4px",
            }}
          />
        </Link>
        <Stack width="100%">
          <Link href={`/events/${event._id}`}>
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "25px", sm: "48px" } }}
            >
              {event.eventName}
            </Typography>
          </Link>
          <Typography variant="caption">{`By ${event.organiser}`}</Typography>
          <Typography variant="caption">{`At ${event.venue}`}</Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
          >
            <Typography fontWeight={600}>
              {`${event.startTime} - ${event.endTime}`}
            </Typography>
            <Typography fontWeight={600}>
              {`0${3 + event.day}/03/2023`}
            </Typography>
          </Stack>
        </Stack>
        <Link href={`/events/${event._id}`}>
          <OpenInNew color="primary" />
        </Link>
      </Stack>
    </Grid>
  );
};

export default EventCard;
