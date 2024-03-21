import {
  CircularProgress,
  Grid,
  Stack,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AnimatePresence } from "framer-motion";
import useEventStore from "lib/store/useEventStore";
import EventCard from "./EventCard";
import { useEffect, useState, useLayoutEffect } from "react";

const eTMap = {
  0: "T",
  1: "C",
  2: "F",
};

const filterTypeOptions = ["technical", "cultural", "fun"];

const filterDayOptions = [1, 2, 3];

const EventTypeSelector = () => {
  const [currentType, setCurrentType] = useEventStore((state) => [
    state.currentType,
    state.setCurrentType,
  ]);

  const handleTabChange = (e, nV) => {
    setCurrentType(nV);
  };

  return (
    <Stack alignItems="center">
      <Tabs value={currentType} onChange={handleTabChange}>
        <Tab label="Technical" />
        <Tab label="Cultural" />
        <Tab label="Fun" />
      </Tabs>
    </Stack>
  );
};

const EventByDayViewer = (
  {
    // events
  }
) => {
  const [currentType, currentDay, setCurrentDay, events] = useEventStore(
    (state) => [
      state.currentType,
      state.currentDay,
      state.setCurrentDay,
      state.events,
    ]
  );
  const theme = useTheme();
  const greaterThanMd = useMediaQuery(theme.breakpoints.up("sm"));
  const [currentEvents, setCurrentEvents] = useState();
  useLayoutEffect(() => {
    if (!events) return;
    let ce = events?.filter(
      (e) =>
        e.eventType === filterTypeOptions[currentType] &&
        e.day === filterDayOptions[currentDay]
    );
    setCurrentEvents((v) => ce);
  }, [events, currentDay, currentType]);
  const handleTabChange = (e, nV) => setCurrentDay(nV);

  return (
    <Stack
      direction={{
        xs: "column",
        sm: "row",
      }}
    >
      <Stack alignItems="center">
        <Tabs
          value={currentDay}
          onChange={handleTabChange}
          orientation={greaterThanMd ? "vertical" : "horizontal"}
        >
          <Tab label="Day 1" />
          <Tab label="Day 2" />
          <Tab label="Day 3" />
        </Tabs>
      </Stack>
      <Grid
        container
        padding="16px"
        spacing="16px"
        sx={{
          width: "100%",
          justifyContent: "center",
        }}
      >
        {currentEvents ? (
          currentEvents.map((eve) => (
            <EventCard
              key={`${eve.eventName}-${currentType}-${currentDay}`}
              event={eve}
            />
          ))
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </Stack>
  );
};

const EventContainer = () => {
  const [events, currentType, currentDay] = useEventStore((state) => [
    state.events,
    state.currentType,
    state.currentDay,
  ]);

  return (
    <Stack>
      <EventTypeSelector />
      <Stack overflow="hidden">
        <AnimatePresence mode="wait">
          <EventByDayViewer
            key={`events-${currentType}`}
            // events={events[currentType][currentDay]}
          />
        </AnimatePresence>
      </Stack>
    </Stack>
  );
};

export default EventContainer;
