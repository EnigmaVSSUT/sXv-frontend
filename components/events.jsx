import CategoryTabSelector from "@/components/events/CategoryTabSelector";
import DayTabSelector from "@/components/events/DayTabSelector";
import EventCard from "@/components/events/EventCard";
import EventContainer from "@/components/events/EventContainer";
import Marqueesv from "@/components/marquee";
import Head from "next/head";
import timeline from "@/lib/data/timeline";
import useEventTimelineStore from "@/lib/store/useEventStore";
import {
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
  Grid,
  duration,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import api from "@/lib/axios/api";

const Day = ({ day }) => {
  return (
    <Typography
      variant="ACH1"
      fontSize={250}
      textAlign="center"
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "transparent",
        WebkitTextStrokeColor: "#857370",
        WebkitTextStrokeWidth: "1px",
        zIndex: -1,
      }}
    >
      DAY : {day}
    </Typography>
  );
};

const Events = () => {
  const [activeDay, events] = useEventTimelineStore((state) => [
    state.activeDay,
    state.events,
  ]);

  useEffect(() => {
    api.events.getAll().then((res) => res.data);
    // .then((data) => console.log(data))
    // .catch((err) => console.error(err));
  }, []);

  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
          duration: 2,
        },
      }}
    >
      <Stack
        sx={{
          padding: {
            xs: "20px",
            md: "32px",
          },
        }}
        top="100px"
      >
        <Head>
          <title>Events Page</title>
          <meta name="Event" content="Meta description for the Home page" />
          <link rel="shortcut icon" href="svlogo.ico" />
        </Head>
        <Typography
          variant="ACH1"
          textAlign="center"
          fontSize={{ xs: "40px", sm: "50px" }}
        >
          Registered Events
        </Typography>
        <Stack gap="20px" alignItems="center" width="100%">
          <CategoryTabSelector />
          <Stack
            direction={{
              xs: "column",
              lg: "row",
            }}
            sx={{
              width: "100%",
            }}
            alignItems={{
              xs: "center",
              lg: "start",
            }}
          >
            <DayTabSelector />
            <EventContainer events={events} day={activeDay} />
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
};

export default Events;
