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
import Script from "next/script";
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
    // setToastMessage((m) => "Ticket's on the horizon, Stay tuned! 🚀🎫");
  };

  const time = new Date();
  time.setMinutes(time.getMinutes() + 8);
  time.setSeconds(time.getSeconds() + 0);
  time.setHours(time.getHours() + 1);
  time.setDate(time.getDate() + 12);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/tsparticles-confetti@2.12.0/tsparticles.confetti.bundle.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script id="blast_effect">
        {`const end = Date.now() + 30 * 150;

          // Google colors
          const colors = ["#4285F4", "#0F9D58", "#F4B400", "#DB4437"];
          
          (function frame() {
            confetti({
              particleCount: 2,
              angle: 60,
              spread: 55,
              origin: { x: 0 },
              colors: colors,
            });
          
            confetti({
              particleCount: 2,
              angle: 120,
              spread: 55,
              origin: { x: 1 },
              colors: colors,
            });
          
            if (Date.now() < end) {
              requestAnimationFrame(frame);
            }
          })();
          `}
      </Script>
      <div id="home"></div>
      <Head>
        <title>Samavesh-X-Vassaunt 2024</title>
        <meta name="Home" content="Meta description for the Home page" />
        <link rel="shortcut icon" href="svLogo.png" />
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
                  xs: "1.8rem",
                  md: "2.5rem",
                  lg: "3rem",
                },
                lineHeight: { xs: "40px", md: "inherit" },
                maxWidth: { xs: "300px", md: "380px" },
              }}
            >
              THE ANNUAL
              <br />
              <span
                style={{
                  backgroundColor: "#81C2BD",
                  color: "white",
                  padding: "0 10px",
                  boxShadow: "6px 6px 0px -3px #30302f",
                }}
              >
                TECHNO-CULTURAL
              </span>
              <br />
              FEST OF VSSUT
              <Timersv expiryTimestamp={time} />
              <Button
                variant="contained"
                sx={{
                  mt: "20px",
                  fontSize: { xs: "15px", md: "18px" },
                  padding: "10px 50px",
                  boxShadow: "6px 6px 0px -3px #30302f",
                  "&:hover": {
                    boxShadow: "6px 6px 0px -3px #30302f",
                  },
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
            <Box
              component="img"
              src="./festposter.jpg"
              alt="Theme"
              className={styles.poster1}
              sx={{ width: { xs: "75vw", md: "30vw", lg: "25vw" } }}
            ></Box>
          </motion.main>
        </Box>
        {/* <Marqueesv /> */}
        <div id="speakers"></div>
        <Speakers />
        <Caraousel />
        {/* <Sponsor /> */}
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
              sx={{ fontSize: "2.5rem", mb: "10px" }}
            >
              Retro Carnival at VSSUT
            </Typography>
            <Typography variant="nav" color="initial" sx={{ color: "#4D4544" }}>
              The Retro Carnival at VSSUT is a delightful journey back in time,
              evoking a sense of nostalgia and fun for all ages. From classic
              arcade games to vintage rides, the carnival transports attendees
              to a bygone era of innocence and joy. Whether it's the neon
              lights, the retro music, or the old-fashioned treats, there's
              something magical about stepping into this world of yesteryear. As
              attendees wander through the carnival grounds, they can't help but
              smile as they reminisce about simpler times and embrace the spirit
              of fun and camaraderie.
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
          <Box
            component="img"
            src="./sv.png"
            alt="Theme"
            className={styles.poster}
            sx={{ width: { xs: "80vw", md: "30vw" } }}
          ></Box>
        </motion.main>
      </div>
    </>
  );
};

export default Hero;
