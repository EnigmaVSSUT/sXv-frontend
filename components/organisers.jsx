import { EmailOutlined } from "@mui/icons-material";
import {
  Stack,
  Typography,
  Box,
  Container,
  Button,
  Avatar,
} from "@mui/material";

import Image from "next/image";
import Speaker from "/pictures/speakers.png";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Speakers = () => {
  const officials = [
    {
      name: "Prof.Dr.Bansidhar Majhi",
      designation: "Hon'ble Vice Chancellor , VSSUT",
      id: "1",
      src: "/clubs/oc2.jpg",
    },
    {
      name: "Prof. Sanjaya Kumar Patro",
      designation: "Dean, Students' Welfare, VSSUT",
      id: "2",
      src: "/clubs/oc1.jpg",
    },
    {
      name: "Mr. Bidyadhar Rout",
      designation: "Vice President, Technical Society",
      id: "3",
      src: "/clubs/oc3.jpg",
    },
    {
      name: "Dr. Mihir Kumar Sutar",
      designation: "Vice President , Cultural Society",
      id: "4",
      src: "/clubs/oc6.jpg",
    },
    {
      name: "Dr.Jatin Kumar Pradhan",
      designation: "Faculty Advisor, Technical Society",
      id: "4",
      src: "/clubs/oc4.jpg",
    },
    {
      name: "Dr. Krushna Prasad Shadangi",
      designation: "Faculty Advisor, Cultural Society",
      id: "4",
      src: "/clubs/oc5.jpg",
    },
  ];
  const organisers = [
    {
      name: "Mr. Lalit Kumar",
      designation: "Coordinator , Technical Society",
      id: "1",
      src: "/clubs/so1.jpg",
    },
    {
      name: "Mr. Ruddhi Narayan Prusty",
      designation: "Coordinator , Cultural Society",
      id: "2",
      src: "/clubs/so2.jpg",
    },
    {
      name: "Ms. Ananya Anuska",
      designation: "Coordinator , Technical Society",
      id: "3",
      src: "/clubs/so3.jpg",
    },
    {
      name: "Ms. Gayatri Padhi",
      designation: "Coordinator , Cultural Society",
      id: "4",
      src: "/clubs/so4.jpg",
    },
  ];
  return (
    <>
      <Typography
        variant="h1"
        textAlign="center"
        margin="3rem 0"
        sx={{ fontSize: "45px", lineHeight: "52px" }}
      >
        The Team
      </Typography>
      <Typography
        textAlign="center"
        margin="20px 0"
        variant="h3"
        sx={{
          fontSize: "35px",
          lineHeight: "52px",
          WebkitTextStrokeColor: "#857370",
          WebkitTextStrokeWidth: "2px",
          color: "transparent",
          letterSpacing: "1px",
        }}
      >
        Hon&apos;ble Mentions
      </Typography>
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
          rowGap="20px"
          columnGap="100px"
        >
          {officials.map((e) => (
            <Stack
              direction="row"
              padding="16px"
              sx={{
                borderRadius: "9px",
                margin: "0",
                width: {
                  xs: "300px",
                  md: "400px",
                },
                gap: "20px",
                backgroundColor: "white.main",
                color: "#fcfcfc",
              }}
              key={e.id}
            >
              <Avatar
                src={e.src}
                sx={{
                  height: "80px",
                  width: "80px",
                }}
              ></Avatar>
              <Box>
                <Typography variant="h6" color="black">
                  {e.name}
                </Typography>
                <Typography
                  variant="p"
                  color="black"
                  fontFamily="Product Sans"
                  fontWeight="600"
                >
                  {e.designation}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
        <Typography
          textAlign="center"
          margin="20px 0"
          variant="h3"
          sx={{
            WebkitTextStrokeColor: "#857370",
            WebkitTextStrokeWidth: "2px",
            color: "transparent",
            fontSize: "35px",
            lineHeight: "52px",
            fontWeight: "100",
            letterSpacing: "1px",
          }}
        >
          Student Bodies
        </Typography>
        <Stack
          margin="25px auto"
          direction="row"
          flexWrap="wrap"
          justifyContent="space-around"
          rowGap="20px"
          columnGap="100px"
        >
          {organisers.map((e) => (
            <Stack
              direction="row"
              padding="16px"
              sx={{
                borderRadius: "9px",
                marginLeft: "0px",
                margin: "0",
                width: {
                  xs: "300px",
                  md: "400px",
                },
                backgroundColor: "white.main",
                color: "#ffffff",
                gap: "20px",
              }}
              key={e.id}
            >
              <Avatar
                src={e.src}
                sx={{
                  height: "80px",
                  width: "80px",
                }}
              >
                p
              </Avatar>
              <Box>
                <Typography variant="h6" color="black">
                  {e.name}
                </Typography>
                <Typography
                  variant="p"
                  color="black"
                  fontFamily="Product Sans"
                  fontWeight="600"
                >
                  {e.designation}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Link href="/clubs">
        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: "20px",
            width: "300px",
            height: "100px",
            fontSize: "25px",
          }}
        >
          CLUBS & COMMITTEES <OpenInNewIcon sx={{ marginLeft: "5px" }} />
        </Button>
      </Link>
    </>
  );
};
export default Speakers;
