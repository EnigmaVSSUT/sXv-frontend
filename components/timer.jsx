import { Stack, Typography, Box } from "@mui/material";
import { Container } from "@mui/system";
import Countdown, { zeroPad } from "react-countdown";
import { HydrationProvider, Server, Client } from "react-hydration-provider";

const Completionist = () => (
  <Typography
    fontFamily="BentonSans Comp Black"
    sx={{
      position: "relative",
      right: "60px",
      fontSize: { xs: "45px", md: "70px" },
      color: "#C0000A",
      fontWeight: { xs: "400", md: "900" },
    }}
  >
    The Fest is ON!
  </Typography>
);
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <Typography
        fontFamily="BentonSans Comp Black"
        sx={{
          fontSize: { xs: "45px", md: "70px" },
          color: "#C0000A",
          fontWeight: { xs: "400!important", md: "900" },
        }}
      >
        {zeroPad(days)}
        <span id="sub">days</span>
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
              padding: "32px",
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
