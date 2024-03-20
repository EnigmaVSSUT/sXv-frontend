import { EmailOutlined } from "@mui/icons-material";
import {
  Stack,
  Typography,
  Box,
  Container,
  Button,
  Avatar,
} from "@mui/material";
import Mentions from "@/components/mentions/Mentions";

import Image from "next/image";
import Speaker from "/pictures/speakers.png";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedDiv } from "./speakers";

const Speakers = () => {
  const officials = [
    {
      name: "Prof.Dr.Bansidhar Majhi",
      designation: "Hon'ble Vice Chancellor , VSSUT",
      id: "1",
      src: "/clubs/oc2.jpg",
      boxColor: "rgba(201,128,219)",
    },
    {
      name: "Prof. Sanjaya Kumar Patro",
      designation: "Dean, Students' Welfare, VSSUT",
      id: "2",
      src: "/clubs/oc1.jpg",
      boxColor: "rgb(252,203,48)",
    },
    {
      name: "Mr. Bidyadhar Rout",
      designation: "Vice President, Technical Society",
      id: "3",
      src: "/clubs/oc3.jpg",
      boxColor: "rgba(254,102,81)",
    },
    {
      name: "Dr. Trupti Ranjan Mahapatra",
      designation: "Vice President , Cultural Society",
      id: "4",
      src: "/clubs/oc6.jpg",
      boxColor: "rgba(201,128,219)",
    },
    // {
    //   name: "Dr.Jatin Kumar Pradhan",
    //   designation: "Faculty Advisor, Technical Society",
    //   id: "4",
    //   src: "/clubs/oc4.jpg",
    //   boxColor: "rgb(252,203,48)",
    // },
    // {
    //   name: "Dr. Krushna Prasad Shadangi",
    //   designation: "Faculty Advisor, Cultural Society",
    //   id: "4",
    //   src: "/clubs/oc5.jpg",
    //   boxColor: "rgba(254,102,81)",
    // },
  ];
  const organisers = [
    {
      name: "Mr. Inayatulla Khan",
      designation: "Coordinator , Technical Society",
      id: "1",
      src: "https://drive.google.com/thumbnail?sz=w1000&id=11hRakTyOL7_lXLIU2piF8M34sjQh4g-1",
      boxColor: "rgba(201,128,219)",
    },
    {
      name: "Mr. Joyesh Deo",
      designation: "Coordinator , Cultural Society",
      id: "2",
      src: "https://drive.google.com/thumbnail?sz=w1000&id=19-NIpje0NkT0osRuMk7NiaH1YE7kQ0nW",
      boxColor: "rgb(252,203,48)",
    },
    {
      name: "Ms. Prathyastee Acharya",
      designation: "Coordinator , Technical Society",
      id: "3",
      src: "https://drive.google.com/thumbnail?sz=w1000&id=1g7OvYcEkr_dAzQ4-s2cbEE6RxwX8JYzO",
      boxColor: "rgba(254,102,81)",
    },
    {
      name: "Ms. Swastika Mohapatra",
      designation: "Coordinator , Cultural Society",
      id: "4",
      src: "https://drive.google.com/thumbnail?sz=w1000&id=10YS9ca3d0G1qY87lnS_gAr3rSOjfn1aH",
      boxColor: "rgba(106,198,235)",
    },
  ];
  return (
    <>
      <Typography
        variant="h1"
        textAlign="center"
        margin="2rem 0"
        mb="0px"
        sx={{ fontSize: "45px" }}
      >
        THE TEAM
      </Typography>
      <Stack sx={{ width: "auto", position: "relative", height: "125px" }}>
        <svg
          width="54"
          height="62"
          viewBox="0 0 54 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M54 30.9779C43.408 32.0827 37.3224 33.0991 33.5863 36.4576C29.1954 40.3906 28.1555 47.5937 27 62C25.806 47.0634 24.7275 39.9045 19.913 36.0599C16.1769 33.0549 10.1298 32.0827 0 31.0221C10.5535 29.9173 16.6776 28.9009 20.3752 25.5866C24.8046 21.6094 25.8445 14.4505 27 0C28.0785 13.3015 29.0414 20.4163 32.6234 24.526C36.2054 28.6358 42.4451 29.7847 54 30.9779Z"
            fill="#FE6651"
          />
        </svg>

        <Typography
          textAlign="center"
          margin="-25px 40px -10px 40px"
          variant="h3"
          sx={{
            fontSize: {
              xs: "28px !important",
              sm: "35px !important",
              md: "35px !important",
              lg: "35px !important",
            },
            // border: "1px solid red",
            // fontSize: "35px",
            lineHeight: "52px",
            WebkitTextStrokeColor: "#000000",
            WebkitTextStrokeWidth: "2px",
            color: "#FFF8E5",
            letterSpacing: "1px",
          }}
        >
          HON&apos;BLE MENTIONS
        </Typography>
        <svg
          width="54"
          height="62"
          viewBox="0 0 54 62"
          fill="none"
          style={{ position: "absolute", right: "0px", bottom: "0px" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M54 30.9779C43.408 32.0827 37.3224 33.0991 33.5863 36.4576C29.1954 40.3906 28.1555 47.5937 27 62C25.806 47.0634 24.7275 39.9045 19.913 36.0599C16.1769 33.0549 10.1298 32.0827 0 31.0221C10.5535 29.9173 16.6776 28.9009 20.3752 25.5866C24.8046 21.6094 25.8445 14.4505 27 0C28.0785 13.3015 29.0414 20.4163 32.6234 24.526C36.2054 28.6358 42.4451 29.7847 54 30.9779Z"
            fill="#6AC6EB"
          />
        </svg>
      </Stack>
      <Stack
        direction="column"
        marginBottom="2rem"
        width="90%"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          margin="25px auto"
          direction="row"
          flexWrap="wrap"
          justifyContent="space-around"
          alignItems="space-around"
          rowGap="80px"
          columnGap="50px"
        >
          {officials.map((e) => (
            // <Stack
            //   direction="row"
            //   padding="16px"
            //   sx={{
            //     borderRadius: "9px",
            //     margin: "0",
            //     width: {
            //       xs: "300px",
            //       md: "400px",
            //     },
            //     gap: "20px",
            //     backgroundColor: "white.main",
            //     color: "#fcfcfc",
            //   }}
            //   key={e.id}
            // >
            //   <Avatar
            //     src={e.src}
            //     sx={{
            //       height: "80px",
            //       width: "80px",
            //     }}
            //   ></Avatar>
            //   <Box>
            //     <Typography variant="h6" color="black">
            //       {e.name}
            //     </Typography>
            //     <Typography
            //       variant="p"
            //       color="black"
            //       fontFamily="Product Sans"
            //       fontWeight="600"
            //     >
            //       {e.designation}
            //     </Typography>
            //   </Box>
            // </Stack>

            <Mentions
              title={e.name}
              designation={e.designation}
              color="#000000"
              imgUrl={e.src}
              key={e.src}
              boxShadowColor={e.boxColor} // Dynamically set box shadow color
            />
          ))}
        </Stack>
        <Stack
          sx={{
            marginTop: "50px",
            width: "auto",
            position: "relative",
            height: "100px",
          }}
        >
          <svg
            width="54"
            height="62"
            viewBox="0 0 54 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M54 30.9779C43.408 32.0827 37.3224 33.0991 33.5863 36.4576C29.1954 40.3906 28.1555 47.5937 27 62C25.806 47.0634 24.7275 39.9045 19.913 36.0599C16.1769 33.0549 10.1298 32.0827 0 31.0221C10.5535 29.9173 16.6776 28.9009 20.3752 25.5866C24.8046 21.6094 25.8445 14.4505 27 0C28.0785 13.3015 29.0414 20.4163 32.6234 24.526C36.2054 28.6358 42.4451 29.7847 54 30.9779Z"
              fill="#00AF9A"
            />
          </svg>
          <Typography
            margin="-25px 40px -10px 40px"
            textAlign="center"
            // margin="20px 0"
            variant="h3"
            sx={{
              fontSize: {
                xs: "28px !important",
                sm: "35px !important",
                md: "35px !important",
                lg: "35px !important",
              },
              WebkitTextStrokeColor: "#000000",
              WebkitTextStrokeWidth: "2px",
              color: "#FFF8E5",
              // fontSize: "35px",
              lineHeight: "52px",
              fontWeight: "100",
              letterSpacing: "1px",
            }}
          >
            STUDENT BODIES
          </Typography>
          <svg
            width="54"
            height="62"
            viewBox="0 0 54 62"
            fill="none"
            style={{ position: "absolute", right: "-10px", bottom: "-10px" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M54 30.9779C43.408 32.0827 37.3224 33.0991 33.5863 36.4576C29.1954 40.3906 28.1555 47.5937 27 62C25.806 47.0634 24.7275 39.9045 19.913 36.0599C16.1769 33.0549 10.1298 32.0827 0 31.0221C10.5535 29.9173 16.6776 28.9009 20.3752 25.5866C24.8046 21.6094 25.8445 14.4505 27 0C28.0785 13.3015 29.0414 20.4163 32.6234 24.526C36.2054 28.6358 42.4451 29.7847 54 30.9779Z"
              fill="#C980DB"
            />
          </svg>
        </Stack>
        <Stack
          margin="25px auto"
          direction="row"
          flexWrap="wrap"
          justifyContent="space-around"
          alignItems="space-around"
          rowGap="80px"
          columnGap="50px"
        >
          {organisers.map((e) => (
            // <Stack
            //   direction="row"
            //   padding="16px"
            //   sx={{
            //     borderRadius: "9px",
            //     marginLeft: "0px",
            //     margin: "0",
            //     width: {
            //       xs: "300px",
            //       md: "400px",
            //     },
            //     backgroundColor: "white.main",
            //     color: "#ffffff",
            //     gap: "20px",
            //   }}
            //   key={e.id}
            // >
            //   <Avatar
            //     src={e.src}
            //     sx={{
            //       height: "80px",
            //       width: "80px",
            //     }}
            //   >
            //     p
            //   </Avatar>
            //   <Box>
            //     <Typography variant="h6" color="black">
            //       {e.name}
            //     </Typography>
            //     <Typography
            //       variant="p"
            //       color="black"
            //       fontFamily="Product Sans"
            //       fontWeight="600"
            //     >
            //       {e.designation}
            //     </Typography>
            //   </Box>
            // </Stack>
            <Mentions
              title={e.name}
              designation={e.designation}
              color="#000000"
              imgUrl={e.src}
              key={e.src}
              boxShadowColor={e.boxColor} // Dynamically set box shadow color
            />
          ))}
        </Stack>
      </Stack>
      <Link href="/clubs">
        <Button
          variant="contained"
          size="large"
          // sx={{
          //   marginTop: "60px",
          //   borderRadius: "50px",
          //   width: "300px",
          //   height: "100px",
          //   fontSize: "25px",
          //   background: "#00af9a",
          //   border: "3px solid black",
          //   boxShadow: "12px 14px  #f9efd7 , 12px 13px 0 2px #000000",
          // }}
          sx={{
            margin: { xs: "30px 0px 10px 0px", md: "60px 0px" },
            borderRadius: "50px",
            display: "flex",
            gap: "20px",
            height: "90px",
            fontSize: "22px",
            background: "#00af9a",
            border: "3px solid black",
            boxShadow: "6px 6px  #f9efd7 , 6px 6px 0 2px #000000",
            "&:hover": {
              boxShadow: "6px 6px  #f9efd7 , 6px 6px 0 2px #000000",
              background: "#00af9a",
            },
          }}

          // button css
        >
          CLUBS & COMMITTEES{" "}
          <OpenInNewIcon sx={{ marginLeft: "5px", fontSize: "30px" }} />
        </Button>
      </Link>
    </>
  );
};
export default Speakers;
