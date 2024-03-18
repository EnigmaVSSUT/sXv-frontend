import React from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Image from "next/image";
const Mentions = ({ title, designation, color, imgUrl, boxShadowColor }) => {
  return (
    <>
      <Box
        sx={{
          border: "2px solid black",
          height: "425px",
          width: "300px",
          boxShadow: `${boxShadowColor}14px 13px`,
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
            width: "calc(100% - 42px)",
            margin: "32px 24px",
            height: "calc(89.5% - 66px)",
          }}
        >
          <Box sx={{ width: "100%", height: "auto" }}>
            <Image src={imgUrl} width={250} height={250} />
          </Box>
          <Box sx={{ width: "100%", height: "30%", padding: "10px" }}>
            <Typography
              sx={{
                fontSize: {
                  xs: "16px",
                },
                fontWeight: "bold",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                },
              }}
            >
              {designation}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Mentions;
