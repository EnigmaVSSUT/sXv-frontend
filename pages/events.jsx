/* eslint-disable react-hooks/exhaustive-deps */
import EventContainer from "@/components/events/EventContainer";
import { Typography, Stack, CircularProgress, Backdrop } from "@mui/material";
import Head from "next/head";
import useEventStore from "lib/store/useEventStore";
import { useEffect, useState } from "react";

const Events = () => {
  const [events, fetchEvents] = useEventStore((state) => [
    state.events,
    state.fetchEvents,
  ]);

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <Head>
        <title>Event Timeline</title>
        <meta name="Timeline" content="Meta description fevor the Home page" />
        <link rel="shortcut icon" href="svlogo.ico" />
      </Head>
      <Stack padding="72px 0">
        <Typography variant="h1" textAlign="center">
          Event Timeline
        </Typography>
        <EventContainer />
      </Stack>
    </>
  );
};

export default Events;
