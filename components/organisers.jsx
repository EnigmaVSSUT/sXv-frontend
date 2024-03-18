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
      name: "Dr. Mihir Kumar Sutar",
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
      name: "Mr. Lalit Kumar",
      designation: "Coordinator , Technical Society",
      id: "1",
      src: "/clubs/so1.jpg",
      boxColor: "rgba(201,128,219)",
    },
    {
      name: "Mr. Ruddhi Narayan Prusty",
      designation: "Coordinator , Cultural Society",
      id: "2",
      src: "/clubs/so2.jpg",
      boxColor: "rgb(252,203,48)",
    },
    {
      name: "Ms. Ananya Anuska",
      designation: "Coordinator , Technical Society",
      id: "3",
      src: "/clubs/so3.jpg",
      boxColor: "rgba(254,102,81)",
    },
    {
      name: "Ms. Gayatri Padhi",
      designation: "Coordinator , Cultural Society",
      id: "4",
      src: "/clubs/so4.jpg",
      boxColor: "rgba(106,198,235)",
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
          alignItems="space-around"
          rowGap="80px"
          columnGap="20px"
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
          alignItems="space-around"
          rowGap="80px"
          columnGap="20px"
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
            marginTop: "60px",
            borderRadius: "50px",
            width: "300px",
            height: "100px",
            fontSize: "25px",
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
