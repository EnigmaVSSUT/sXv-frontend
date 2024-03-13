/* eslint-disable react-hooks/exhaustive-deps */
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Grid,
  TextField,
  Stack,
  CircularProgress,
} from "@mui/material";
import { useState, useLayoutEffect } from "react";
import useEventStore from "lib/store/useEventStore";
import EventCard from "@/components/events/EventCard";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import React from "react";
import { useRouter } from "next/router";
import api from "@/lib/axios/api";
import axios from "axios";

const Account = () => {
  const [user, setUser] = React.useState();
  const router = useRouter();
  const [events, setEvents] = React.useState([]);
  React.useEffect(() => {
    if (!localStorage.getItem("token")) router.push("/");
    api.users.getUser().then((response) => {
      setUser(response.data);
    });
    axios
      .get("https://sxv-backend.onrender.com/api/events/getParticipations", {
        headers: {
          authorisation: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        // console.log(response.data.events);
        setEvents(response.data.events);
      });
  }, []);

  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        rowGap="40px"
        p=" 20px 0px"
      >
        <Stack
          direction="row"
          gap="40px"
          justifyContent="center"
          alignItems="center"
        >
          <ToastContainer />
          <Head>
            <title>Account</title>
            <meta
              name="Accounts"
              content="Meta description fevor the Home page"
            />
            <link rel="shortcut icon" href="svlogo.ico" />
          </Head>
          <Grid>
            <Typography variant="h5">
              Name : <span className="red">{user?.username} </span>
            </Typography>
            <Typography variant="h5">Institution : {user?.college}</Typography>
            <Typography variant="h5">Branch : {user?.branch}</Typography>
            <Typography variant="h5">
              Graduation Year : {user?.graduationYear}
            </Typography>
            <Typography variant="h5">email: {user?.email}</Typography>
            <Typography variant="h5">number : {user?.phone}</Typography>
          </Grid>
        </Stack>
        <hr></hr>

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
            <>
              {" "}
              <Typography
                color={"#ED1D24"}
                fontFamily={"American Captain"}
                variant="h6"
              >
                No events participated
              </Typography>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};
export default Account;
