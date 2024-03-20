import { Avatar, IconButton, Stack, Typography, Box } from "@mui/material";
import React from "react";
import { useState, useRef } from "react";
import style from "../styles/clubs.module.css";
import Head from "next/head";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import AppContext from "context/AppContext";
// Import Image component from 'next/image'
import Image from "next/image";
import { useContext } from "react";
import { useRouter } from "next/router";

function Clubs() {
  const ref = useRef();
  const { setClub } = useContext(AppContext);
  const [clubs, setClubs] = useState([]);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const getDownloadUrl = (dUrl) => {
    let downloadUrl = `https://drive.google.com/thumbnail?sz=w1000&id=${
      dUrl?.split("/")[5]
    }`;
    return downloadUrl;
  };

  React.useEffect(() => {
    setLoading(true);
    axios
      .get("https://sxv-backend.onrender.com/api/clubs/getClubs")
      .then((response) => {
        setClubs(response.data.clubs);
        // console.log(response.data.clubs);
        setLoading(false); // Move setLoading inside the .then() block

        // const chars = document.querySelectorAll(".name");
        // chars.forEach((char, i) => {
        //   char.style.transform = `rotate(${i * 8.5}deg)`;
        // });
      })
      .catch((error) => {
        console.error("Error fetching clubs:", error);
        setLoading(false); // Make sure to set loading to false on error too
      });
  }, []);

  return (
    <>
      <Head>
        <title>Clubs and Societies</title>
        <meta name="Clubs" content="Meta description fevor the Home page" />
        <link rel="shortcut icon" href="svLogo.png" />
      </Head>
      <Typography
        fontFamily={"American Captain"}
        margin="0 auto"
        marginTop="20px"
        padding="20px 0"
        fontSize={{
          xs: "40px",
          md: "60px",
        }}
        sx={{
          // textDecorationLine: "underline",
          textAlign: "center",
        }}
      >
        ORGANIZING CLUBS AND SOCIETIES
      </Typography>
      {clubs.length > 0 ? (
        <Box
          sx={{
            // border: "1px solid black",
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gridAutoRows: "auto",
            gap: "2px",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {clubs.map((club, index) => (
            <Box
              key={club._id}
              sx={{
                // border: "1px solid black",
                // width: "100%",
                margin: { xs: "1.5rem", md: "3rem 0" },
                cursor: "pointer",
              }}
              onClick={() => {
                router.push(`/club/${club._id}`);
              }}
            >
              <Stack
                direction="row"
                gap="15px"
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
                textAlign="center"
              >
                <Box
                  sx={{
                    position: "relative",
                    // width: "200px",
                    // height: "200px",
                    borderRadius: "50%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "160px",
                      height: "160px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      backgroundSize: "cover",
                      backgroundColor: "black",
                      // padding: "0.5rem",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      component="img"
                      src={getDownloadUrl(club.logo)}
                      alt="log-img"
                      sx={{
                        borderRadius: "50%",
                        objectFit: "contain",
                        width: { xs: "80px", md: "80px" },
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                    }}
                  >
                    {club.name}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          ))}
        </Box>
      ) : (
        <Stack
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <CircularProgress />
        </Stack>
      )}
    </>
  );
}

export default Clubs;
