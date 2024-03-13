import React from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
const Mentions = ({ title, designation, color, imgUrl }) => {
  return (
    <>
      <Box
        sx={{
          border: "2px solid black",
          height: "425px",
          width: "365px",
          boxShadow: `${color}14px 13px`,
        }}
      >
        <Box
          sx={{
            borderBottom: "2px solid black",
            width: "100%",
            height: "10.5%",
            display: "flex",
            gap: "7px",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "20px",
              width: "20px",
              borderRadius: "50%",
              background: "#9747FF",
              marginLeft: "7px",
            }}
          ></Box>
          <Box
            sx={{
              height: "20px",
              width: "20px",
              borderRadius: "50%",
              background: "#FEAC25",
            }}
          ></Box>
          <Box
            sx={{
              height: "20px",
              width: "20px",
              borderRadius: "50%",
              background: "#F64E03",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            border: "2.5px solid black",
            width: "calc(100% - 48px)",
            margin: "32px 24px",
            height: "calc(89.5% - 68px)",
          }}
        >
          <Box sx={{ width: "100%", height: "70%" }}>
            <img src={imgUrl} width="100%" height="100%" />
          </Box>
          <Box sx={{ width: "100%", height: "30%", padding: "10px" }}>
            <Typography sx={{ fontSize: "1.6vw", fontWeight: "bold" }}>
              {title}
            </Typography>
            <Typography sx={{ fontSize: "1vw" }}>{designation}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Mentions;
