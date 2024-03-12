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
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "10px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "30px 0px ",
          gap: "20px",
        }}
      >
        <Typography
          variant="h1"
          margin="3rem 0"
          sx={{ fontSize: "45px", lineHeight: "52px" }}
        >
          PINNACLE
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-around",
            padding: "10px",
            borderRadius: "8px",
            width: "70vw",
            gap: "20px",
          }}
        >
          <Image
            src="/geekify.jpg"
            width={500}
            height={500}
            alt="IMAGE"
            id="speak"
          />

          <Image
            src="/asess.jpg"
            width={500}
            height={500}
            alt="IMAGE"
            id="speak"
          />
          <Image
            src="/conclave.jpg"
            width={500}
            height={500}
            alt="IMAGE"
            id="speak"
          />
        </Box>
      </Box>
    </Stack>
  );
};
export default Speakers;
