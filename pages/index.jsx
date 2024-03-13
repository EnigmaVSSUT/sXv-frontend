/* eslint-disable @next/next/no-img-element */
import styles from "../styles/hero.module.css";
import Typography from "@mui/material/Typography";
import Marqueesv from "@/components/marquee";
import Timersv from "@/components/timer";
import Sponsor from "@/components/sponsor";
import { Box } from "@mui/system";
import Speakers from "@/components/speakers";
import Organisers from "@/components/organisers";
import { Button } from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import Caraousel from "@/components/Caraousel";
import AppContext from "context/AppContext";
import React from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import Toast from "@/components/common/Toast";
import { useState } from "react";
import axios from "axios";
const Hero = () => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
    transition: { duration: 1.5 },
  };
  const variants2 = {
    hidden: { opacity: 0, x: -300, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
    transition: { duration: 2.5 },
  };
  const variants1 = {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  const variants3 = {
    hidden: { opacity: 0, x: 0, y: 300 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  // const { isAuthenticated, paymentStatus } = React.useContext(AppContext);
  const [toastMessage, setToastMessage] = useState();
  const GenTicket = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      axios
        .get("https://sxv-backend.onrender.com/api/ticket/genTicket", {
          headers: { authorisation: token },
        })
        .then((data) => {
          setToastMessage((m) => data.data.message);
          console.log(data.data.error);
        });
    } else {
      setToastMessage(
        (m) => "Please login to your account to generate your ticket"
      );
    }
  };
  return (
    <>
      <div id="home"></div>
      <Head>
        <title>Samavesh-X-Vassaunt</title>
        <meta name="Home" content="Meta description for the Home page" />
        <link rel="shortcut icon" href="svlogo.ico" />
      </Head>
      <Box
        className={styles.hero}
        sx={{
          marginTop: {
            xs: "30px",
            lg: "0px",
          },
        }}
      >
        <Toast message={toastMessage} setMessage={setToastMessage} />
        <Box
          className={styles.intro}
          sx={{
            justifyContent: {
              xs: "center",
              lg: "space-between",
            },
          }}
        >
          <motion.main
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ x: { duration: 0.5 }, type: "spring" }} // Set the transition to linear
          >
            <Typography
              variant="h3"
              color="initial"
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  md: "2.8rem",
                },
                maxWidth: { xs: "300px", md: "380px" },
              }}
            >
              THE ANNUAL
              <br />
              TECHNO-CULTURAL
              <br />
              FEST OF VSSUT
              <Timersv />
              <Button
                variant="contained"
                sx={{
                  bottom: "20px",
                  fontSize: "15px",
                  padding: "10px 50px",
                }}
                onClick={() => {
                  GenTicket();
                }}
              >
                Collect&nbsp;&nbsp; your&nbsp;&nbsp; ticket
              </Button>
            </Typography>
          </motion.main>
          <motion.main
            variants={variants1} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ x: { duration: 0.5 }, type: "spring" }} // Set the transition to linear
          >
            <img
              src="./theme.png"
              alt="Fest Poster"
              className={styles.poster1}
            />
          </motion.main>
        </Box>
        <Marqueesv />
        <div id="speakers"></div>
        <Speakers />
        <Caraousel />
        <Sponsor />
        <div id="organisers"></div>
        <Organisers />
      </Box>
      <div className={styles.theme}>
        <Box
          className={styles.text}
          sx={{
            flexDirection: {
              xs: "column",
              md: "row",
            },
            paddingTop: "15px",
          }}
        >
          <div id="theme"></div>
          <motion.main
            variants={variants2} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ x: { duration: 0.8 }, type: "linear" }} // Set the transition to linear
          >
            <Typography
              variant="h3"
              color="initial"
              sx={{ fontSize: "2.5rem" }}
            >
              MARVEL AT VSSUT
            </Typography>
            <Typography variant="nav" color="initial" sx={{ color: "#4D4544" }}>
              Marvel Cinematic Universe, fondly known as MCU, is an essence of
              childhood where it takes even an adult to the nostalgia of falling
              in love with their superheroes all over again. Be it Ironman,
              Deadpool, Groot or Captain America, their fanbase knows no age
              restrictions. The marvellous love for those friendly superheroes
              would just increase with time as one learns about their pure
              intentions and morals for which they fight against injustice.
            </Typography>
          </motion.main>
        </Box>
        <motion.main
          variants={variants3} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ y: { duration: 0.8 }, type: "linear" }} // Set the transition to linear
        >
          <img src="./festposter.png" alt="Theme" className={styles.poster} />
        </motion.main>
      </div>
    </>
  );
};
export default Hero;
