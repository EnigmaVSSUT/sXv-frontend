import { OpenInNew } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const { Stack, Typography, Grid } = require("@mui/material");

const getDownloadUrl = (dUrl) => {
  let segments = dUrl.split("/");
  let downloadUrl = `https://drive.google.com/thumbnail?id=${segments[5]}`;
  return downloadUrl;
};
const arr = ["#6AC6EB", "#FE6651", "#00AF9A", "#C980DB", "#FCCB30"];

// const [randomColor, setRandomColor] = useState(arr[Math.floor(Math.random() * arr.length)]);
// Generate random index

const EventCard = ({ event }) => {
  const three = 3;
  // const randomColor = arr[Math.floor(Math.random() * arr.length)];
  const randomIndex = Math.floor(Math.random() * arr.length);
  const color = arr[randomIndex];

  return (
    <Grid item xs={15} md={5} sx={{ margin: "20px" }}>
      <Stack
        padding="12px"
        direction="row"
        border="2.6px solid"
        // borderRadius="8px"
        gap="16px"
        height="100%"
        sx={{
          boxShadow: `12px 14px ${color}, 12px 13px 0 2px #000000`,
        }}
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
        <Stack
          width="100%"
          direction="column"
          justifyContent="space-between"
          rowGap={0.5}
        >
          <Link href={`/events/${event._id}`}>
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "25px", sm: "48px" } }}
            >
              {event.eventName}
            </Typography>
          </Link>
          <Stack>
            <Typography variant="caption">{`By ${event.organiser}`}</Typography>
            <Typography variant="caption">{`At ${event.venue}`}</Typography>
          </Stack>
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
