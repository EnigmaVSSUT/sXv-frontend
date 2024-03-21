import { Stack, Typography, Box } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import logo from "/pictures/Enigmalogo.png";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

const Footer = () => {
  return (
    <Stack
      // padding='10px 32px'
      alignItems="center"
      sx={{ overflowX: "hidden" }}
    >
      <Box
        sx={{
          backgroundColor: "#81C2BD",
          width: "100vw",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-between",
            alignItems: {
              xs: "center",
              md: "center",
            },
            padding: { xs: "60px 30px", md: "80px 32px" },
            gap: "30px",
            color: "#ffffff",
          }}
        >
          <Box
            component="img"
            src="https://res.cloudinary.com/dml2v8bov/image/upload/v1711021911/svLogo_t6lyfx.png"
            alt="IMAGE"
            sx={{ width: { xs: "60vw", md: "18vw" } }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: {
                md: "flex-start",
              },
              marginTop: {
                xs: "10px",
                md: "0px",
              },
              padding: "0px",
              gap: { xs: "40px", md: "60px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px",
                gap: "8px",
              }}
            >
              {" "}
              <Typography
                variant="nav"
                sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
              >
                <Link href="/">HOME</Link>
              </Typography>
              <Typography
                variant="nav"
                sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
              >
                <Link href="/#theme">THEME</Link>
              </Typography>
              <Typography
                variant="nav"
                sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
              >
                <Link href="/events">EVENTS</Link>
              </Typography>
              <Typography
                variant="nav"
                sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
              >
                <Link href="/clubs">COMMITTEES</Link>
              </Typography>
              {/* <Typography
                variant="nav"
                sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
              >
                <Link href="/#speakers">GUESTS</Link>
              </Typography> */}
              <Typography
                variant="nav"
                sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
              >
                <Link href="/#organisers">THE TEAM</Link>
              </Typography>
              <Typography
                variant="nav"
                sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
              >
                <Link href="/ContactUs">CONTACT US</Link>
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px",
                gap: "13px",
              }}
            >
              <Typography
                variant="nav"
                sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
              >
                SOCIALS
              </Typography>
              <Typography
                variant="nav"
                sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
              >
                <Link href="https://instagram.com/samavesh.vssut?igshid=YmMyMTA2M2Y=">
                  <InstagramIcon />
                </Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "#1e1e1e",
          width: "100vw",
          // height: "158.17px",
          padding: "30px 0px",
          gap: "7px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="nav" sx={{ color: "#ffffff" }}>
          MADE WITH LOVE BY
        </Typography>
        <Link href="https://enigmavssut.com/" target="blank">
          <Image src={logo} alt="IMAGE" height={60} />
        </Link>
        <Link href="https://enigmavssut.com/" target="blank">
          <Typography variant="nav" sx={{ color: "#ffffff" }}>
            ENIGMA VSSUT
          </Typography>
        </Link>
      </Box>
    </Stack>
  );
};

export default Footer;
