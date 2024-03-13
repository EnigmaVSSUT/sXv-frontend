import { EmailOutlined } from "@mui/icons-material";
import { Stack, Typography, Box, Container, Button } from "@mui/material";
import Image from "next/image";
import Speaker from "/pictures/speakers.png";
import Link from "next/link";

const Speakers = () => {
  return (
    <Stack
      // padding='10px 32px'
      alignItems="flex-start"
      sx={{
        // border: "1px solid black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "1px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "10px 0px ",
          gap: "26px",
          // border: "1px solid red"
        }}
      >
        <Typography
          variant="h1"
          marginTop="10rem"
          sx={{ fontSize: "45px", lineHeight: "52px" }}
        >
          PINNACLE
        </Typography>
        <Box
          sx={{
            // border : "1px solid green",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-around",
            padding: "50px",
            width: "92vw",
            gap: "40px",
          }}
        >
          <Image
            src="/geekify.jpg"
            width={400}
            height={400}
            alt="IMAGE"
            id="speak"
          />

          <Image
            src="/asess.jpg"
            width={400}
            height={400}
            alt="IMAGE"
            id="speak"
          />
          <Image
            src="/conclave.jpg"
            width={400}
            height={400}
            alt="IMAGE"
            id="speak"
          />
        </Box>
      </Box>
    </Stack>
  );
};
export default Speakers;
