import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const SmallCard = ({
  eventname,
  clubname,
  eventlocation,
  eventtime,
  eventimageurl,
  eventdate,
}) => {
  return (
    <>
      <Box
        sx={{
          border: "2px solid black",
          width: "460px",
          height: "160px",
          display: "flex",
          alignItems: "center",
          gap: "60px",
          paddingLeft: "30px",
          boxShadow: "12px 14px  #9747FF , 12px 13px 0 1px #000000",
        }}
      >
        <Box sx={{ border: "5px solid black", width: "23%", height: "55%" }}>
          <Image src={eventimageurl} alt="" width={100} height={100}></Image>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <Typography>{eventname}</Typography>
          <Box>
            <Typography>By {clubname}</Typography>
            <Typography>At {eventlocation}</Typography>
          </Box>
          <Typography>{eventtime}</Typography>
        </Box>
        <Box
          sx={{
            border: "1px solid red",
            height: "100%",
            width: "25%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Typography>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
            </svg>
          </Typography>
          <Typography sx={{ marginRight: "16%", marginBottom: "12%" }}>
            {eventdate}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SmallCard;
