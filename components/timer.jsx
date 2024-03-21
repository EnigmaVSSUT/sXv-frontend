import { Stack, Typography, Box } from "@mui/material";
import { Container } from "@mui/system";
import Countdown, { zeroPad } from "react-countdown";
import { HydrationProvider, Server, Client } from "react-hydration-provider";

const Completionist = () => (
  <>
    <Stack
      sx={{
        // marginTop: "50px",
        width: "auto",
        position: "relative",
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
        fontFamily="Tangelo"
        sx={{
          whiteSpace: "nowrap",
          position: "relative",
          right: "60px",
          fontSize: { xs: "40px", md: "60px" },
          color: "#f7a802",
          fontWeight: { xs: "400", md: "400" },
          marginLeft: { xs: "35px", md: "50px" },
        }}
      >
        The Fest is ON!
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
  </>
);
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <Typography
        fontFamily="Tangelo"
        sx={{
          fontSize: { xs: "45px", md: "70px" },
          color: "#F7A802",
          fontWeight: { xs: "500!important", md: "900" },
        }}
      >
        {zeroPad(days)}
        <span id="sub">day</span>
        {zeroPad(hours)}
        <span id="sub">hours</span>
        {zeroPad(minutes)}
        <span id="sub">mins</span>
        <span id="sub2">{zeroPad(seconds)}</span>
        <span id="sub">sec</span>
      </Typography>
    );
  }
};
const Timer = () => {
  return (
    <HydrationProvider>
      <Stack
        padding="10px 32px"
        alignItems="center"
        sx={{ background: "#F3EEE8" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              padding: { xs: "15px", md: "25px" },
              gap: "10px",
            }}
          >
            {/* <Typography
              fontFamily="BentonSans Comp Black"
              sx={{
                color: "#C0000A",
                fontWeight: { xs: "400", md: "900" },
                fontSize: "2.4rem",
                lineHeight: "40px",
              }}
            >
              Assembling in
            </Typography> */}
            <Server>
              <Countdown
                // date= {1677868200000}
                date={Date.now() + 50000}
                renderer={renderer}
              />
            </Server>
            <Client>
              <Countdown
                date={1711045800000}
                // date={Date.now()+50000}
                renderer={renderer}
              />
            </Client>
          </Container>
        </Box>
      </Stack>
    </HydrationProvider>
  );
};
export default Timer;
