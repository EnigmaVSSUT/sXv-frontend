import { useState } from "react";
import { Stack, Typography, Box, Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import Marquee from "react-fast-marquee";
import { InteractiveMarquee } from "./carousel/Marquee";

const imgUrls = [
  "https://drive.google.com/thumbnail?id=1SyMvaxZacRujOWWy1ykCRo2ApLz2qVWC",
  " https://drive.google.com/thumbnail?id=1Qzob3vRcr4SUoM3eRC4bMtkoHSng8iaD",
  "https://drive.google.com/thumbnail?id=1pCR7oDvvKn4FLq_dvlNJKGHozOR_E2nR",
  "https://drive.google.com/thumbnail?id=1vUdW-VGmp9hkFMydhvRoN3CaiOOzSd7j",
  "https://drive.google.com/thumbnail?id=1CmwrjGyj_Zd6e0_hfoFfpAARVaHiWc9a",
  "https://drive.google.com/thumbnail?id=1YJDT_l1zU6Z97r3wx5wr5wTOsA9idt0x",
  "https://drive.google.com/thumbnail?id=1bsKryeYBz8qPXvfRrRUWCoA7EmmOL4sz",
  "https://drive.google.com/thumbnail?id=1y8OfgadfWWQzqd7EixJKeyiH5_349f_Q",
  "https://drive.google.com/thumbnail?id=1wZlDITLSr1oMUw5T3m6Q2suV2T6ANUt6",
  "https://drive.google.com/thumbnail?id=1o4c7wrGM1mdU_iXNAkEEJfZ82Lkp9S-6",
  "https://drive.google.com/thumbnail?id=1Vvsfbr18OhHvCgKJOi5-quIqd5oPA4vx",
  "https://drive.google.com/thumbnail?id=1-lG1OVMUIydPdef53oWQjC0cIuo7-z3c",
  "https://drive.google.com/thumbnail?id=1-eP3qZ1lUrJ4soWKHLQuRzsoN96SiMES",
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
          <Link href="/events">
            <Typography
              sx={{ textDecoration: "underline", color: "#e14f5a" }}
              variant="h6"
              color="initial"
            >
              VIEW ALL
            </Typography>
          </Link>
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
