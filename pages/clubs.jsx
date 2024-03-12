import { Avatar, IconButton, Stack, Typography, Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import style from "../styles/clubs.module.css";
import Head from "next/head";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";
import CircularProgress from "@mui/material";
import axios from "axios";
import AppContext from "context/AppContext";
import { useContext } from "react";
function Clubs() {
  const { setClub } = useContext(AppContext);
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(false);
  const getDownloadUrl = (dUrl) => {
    let downloadUrl = `https://drive.google.com/uc?export=download&id=${
      dUrl?.split("/")[5]
    }`;
    return downloadUrl;
  };
  React.useEffect(() => {
    setLoading(true);
    axios
      .get("https://fest-backend-p8lk.onrender.com/api/clubs/getClubs")
      .then((response) => {
        setClubs(response.data.clubs);
        // console.log(response.data.clubs);
      });
    setLoading(false);
  }, []);
  return (
    <>
      <Head>
        <title>Clubs and Societies</title>
        <meta name="Clubs" content="Meta description fevor the Home page" />
        <link rel="shortcut icon" href="svlogo.ico" />
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
      <div className={style.container}>
        {clubs.map((club) => (
          <div className={style.box} key={club._id}>
            <Stack
              direction="row"
              gap="15px"
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
              textAlign="center"
            >
              <Avatar
                src={getDownloadUrl(club.logo)}
                sx={{ height: "70px", width: "70px" }}
              ></Avatar>

              <p className={style.p1}>{club.name}</p>

              <p>
                <IconButton
                  sx={{ "&:hover": { backgroundColor: "transparent" } }}
                >
                  <Link
                    href={`/club/${club._id}`}
                    onClick={() => {
                      setClub(club);
                    }}
                  >
                    <OpenInNewIcon sx={{ color: "#fff" }} />
                  </Link>
                </IconButton>
              </p>
            </Stack>
          </div>
        ))}
      </div>
    </>
  );
}

export default Clubs;
