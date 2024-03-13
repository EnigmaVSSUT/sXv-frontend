"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";

export default function clubComponent({ clubname, clubimage }) {
  const ref = useRef();

  useEffect(() => {
    const chars = document.querySelectorAll(".name");
    chars.forEach((char, i) => {
      char.style.transform = `rotate(${i * 8.5}deg)`;
    });
  }, []);

  const textStyle = clubname;

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "160px",
            height: "160px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            backgroundSize: "cover",
            backgroundColor: "black",
            padding: "0.5rem",
          }}
        >
          <Image
            src={clubimage}
            width={150}
            height={150}
            alt="log-img"
            style={{
              borderRadius: "50%",
            }}
          />
        </Box>

        <Box
          ref={ref}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "210px",
            height: "210px",
            color: "#00af9a",
            borderRadius: "50%",
            top: "0%",
          }}
        >
          {textStyle.split("").map((char, i) => (
            <Typography
              key={i}
              className="name"
              sx={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                height: "0px",
                width: "10px",
                textAllign: "center",
                left: "50%",
                top: "0",
                fontSize: "0.9em",
                transformOrigin: "0 100px",
                fontWeight: "700",
              }}
            >
              {char}
            </Typography>
          ))}
        </Box>
      </Box>
    </>
  );
}
