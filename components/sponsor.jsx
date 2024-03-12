import { EmailOutlined } from "@mui/icons-material";
import {
  Stack,
  Typography,
  Box,
  Container,
  Button,
  Avatar,
} from "@mui/material";
import Link from "next/link";
import Sponsorlist from "./sponsorlist";
const Sponsor = () => {
  return (
    <Stack
      // padding='10px 32px'
      alignItems="flex-start"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "25px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "32px 0",
          gap: "8px",
        }}
      >
        {" "}
        <div id="sponsors"></div>
        <Typography
          variant="h1"
          margin="3rem 0"
          sx={{ fontSize: "45px", lineHeight: "52px" }}
        >
          Sponsors
        </Typography>
        <Box
          margin="1rem 0"
          sx={{
            display: "flex",
            width: "85%",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",

            columnGap: {
              xs: "10px",
              md: "none",
            },
          }}
        >
          <Avatar
            sx={{
              height: "125px",
              width: "125px",
              fontSize: "50px",
              "& .MuiAvatar-img": {
                width: " 90% !important",
                height: "auto !important",
              },
            }}
            src="/clubs/S1.png"
          ></Avatar>
          <Avatar
            sx={{
              height: "125px",
              width: "125px",
              fontSize: "10px",
              "& .MuiAvatar-img": {
                width: " 90% !important",
                height: "auto !important",
              },
            }}
            src="/clubs/S2.png"
          ></Avatar>
          <Avatar
            sx={{
              height: "125px",
              width: "125px",
              fontSize: "50px",
              "& .MuiAvatar-img": {
                width: " 90% !important",
                height: "auto !important",
              },
            }}
            src="/clubs/S3.png"
          ></Avatar>
          <Avatar
            sx={{
              height: "125px",
              width: "125px",
              fontSize: "50px",
              "& .MuiAvatar-img": {
                width: " 90% !important",
                height: "auto !important",
              },
            }}
            src="/clubs/S4.png"
          ></Avatar>
          <Avatar
            sx={{
              height: "125px",
              width: "125px",
              fontSize: "50px",
              "& .MuiAvatar-img": {
                width: " 90% !important",
                height: "auto !important",
              },
            }}
            src="/clubs/S5.svg"
          ></Avatar>
        </Box>
        {/* <Sponsorlist />   */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "40px",
            background: "#C0000A",
            borderRadius: "8px",
            width: "70vw",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              alignItems: "flex-start",
              padding: "0px",
              gap: "40px",
            }}
          >
            <Typography
              variant="h3"
              color="#fff"
              sx={{
                fontSize: "2rem",
                display: "flex",
                alignItems: "left",
                textAlign: "left",
              }}
            >
              SPONSOR US
            </Typography>
            <Typography variant="nav" color="#fff">
              Join us and become a part of the largest techno cultural festival
              in western Odisha. Explore our packages and unleash the marketing
              potential of thousands of young minds by advertising your brand in
              one of the largest youth gathering of Odisha.
              <br />
            </Typography>
          </Box>
          <Link href="/ContactUs">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#410001",
                fontFamily: "Product sans",
                textTransform: "inherit",
                fontWeight: "600",
                marginTop: "10px",
              }}
            >
              <EmailOutlined sx={{ marginRight: "5px" }} /> Contact Us
            </Button>
          </Link>
        </Box>
      </Box>
    </Stack>
  );
};
export default Sponsor;
