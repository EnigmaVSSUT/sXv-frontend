import {
  Stack,
  Typography,
  Box,
  Container,
  Button,
  Avatar,
} from "@mui/material";
import Link from "next/link";
const Sponsorlist = () => {
  return (
    <Stack
      // padding='10px 32px'
      alignItems="flex-start"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "0px",
      }}
    >
      <Box
        sx={{
          padding: "5px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "70vw",
        }}
      >
        <Avatar
          sx={{ marginRight: "8px", height: "8vw", width: "8vw" }}
        ></Avatar>
        <Avatar
          sx={{ marginRight: "8px", height: "8vw", width: "8vw" }}
        ></Avatar>
        <Avatar
          sx={{ marginRight: "8px", height: "8vw", width: "8vw" }}
        ></Avatar>
        <Avatar
          sx={{ marginRight: "8px", height: "8vw", width: "8vw" }}
        ></Avatar>
        <Avatar
          sx={{ marginRight: "8px", height: "8vw", width: "8vw" }}
        ></Avatar>
        <Avatar
          sx={{ marginRight: "8px", height: "8vw", width: "8vw" }}
        ></Avatar>
      </Box>
    </Stack>
  );
};
export default Sponsorlist;
