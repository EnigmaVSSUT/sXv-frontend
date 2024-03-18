import { useState } from "react";
import { Stack, Typography, Box, Skeleton } from "@mui/material";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { InteractiveMarquee } from "./carousel/Marquee";

const imgUrls = [
  "https://i.ibb.co/SsRwbJ0/1.webp",
  "https://i.ibb.co/8dM7mjN/2.webp",
  "https://i.ibb.co/1Gw3q4q/3.webp",
  "https://i.ibb.co/vjLtRYh/4.webp",
  "https://i.ibb.co/GJGt8Yy/5.webp",
  "https://i.ibb.co/Kq0nMKW/6.webp",
  "https://i.ibb.co/2qmxTH1/7.webp",
  "https://i.ibb.co/L9svwn9/8.webp",
  "https://i.ibb.co/mBJcdwT/9.webp",
  "https://i.ibb.co/3R2GJmM/10.webp",
  "https://i.ibb.co/X7W7Lvf/11.webp",
  "https://i.ibb.co/qLS09HN/12.webp",
  "https://i.ibb.co/Q9NnsWB/13.webp",
  "https://i.ibb.co/T2XDZw1/14.webp",
  "https://i.ibb.co/HgC59L3/15.webp",
  "https://i.ibb.co/1qt0sMD/16.webp",
];

const LazyImage = ({ src }) => {
  const [loaded, setLoaded] = useState(false);
  const dimns = { width: 200, height: 200 };
  return (
    <Box position="relative" mx={1} borderRadius={3} overflow="hidden">
      <Image
        {...{ src, ...dimns }}
        alt=""
        onLoad={() => setLoaded(true)}
        style={{ pointerEvents: "none" }}
      />
      {!loaded && (
        <Skeleton
          sx={{ position: "absolute", top: 0, left: 0 }}
          variant="rectangular"
          animation="wave"
          {...dimns}
        />
      )}
    </Box>
  );
};

const Caraousel = () => {
  return (
    <Stack sx={{ overflow: "hidden" }}>
      <Stack sx={{ maxWidth: "98vw", gap: "30px", height: "auto" }}>
        <Stack
          direction="row"
          // alignItems="space-between"
          justifyContent="center"
          paddingTop="60px"
        >
          <Typography
            variant="h2"
            color="initial"
            mb={1}
            sx={{
              WebkitTextStrokeColor: "#857370",
              WebkitTextStrokeWidth: "3px",
              textAlign: "center",
              justifyContent: "center",
              strokeWidth: "3px",
              color: "transparent",
              letterSpacing: "1.5px",
            }}
          >
            THE ASSEMBLY
          </Typography>
        </Stack>

        <InteractiveMarquee>
          {imgUrls.map((url, i) => (
            <LazyImage key={"assembly" + i} src={url} />
          ))}
        </InteractiveMarquee>
      </Stack>
    </Stack>
  );
};
export default Caraousel;
