import { EmailOutlined } from "@mui/icons-material";
import { Stack, Typography, Box, Container, Button } from "@mui/material";
import Image from "next/image";
import Speaker from "/pictures/speakers.png";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export const AnimatedDiv = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={divRef}
      initial={{ y: "30%", opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: "30%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 150, damping: 30 }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

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
          sx={{
            mt: { xs: "3rem", md: "5rem" },
            fontSize: "45px",
            lineHeight: "52px",
          }}
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
            padding: { xs: "20px 30px", md: "50px" },
            width: "92vw",
            gap: "40px",
          }}
        >
          <Image
            src="/DJ 1111.png"
            width={400}
            height={400}
            alt="IMAGE"
            id="speak"
            style={{
              objectFit: "contain",
            }}
          />
          <Image
            src="/game.jpg"
            width={400}
            height={400}
            alt="IMAGE"
            id="speak"
          />
          <Image
            src="/raj.jpg"
            width={400}
            height={400}
            alt="IMAGE"
            id="speak"
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Stack>
  );
};
export default Speakers;
