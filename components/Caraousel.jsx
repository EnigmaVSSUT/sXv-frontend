import { useState } from "react";
import { Stack, Typography, Box, Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Marquee from "react-fast-marquee";
import { InteractiveMarquee } from "./carousel/Marquee";

const imgUrls = [
  "https://drive.google.com/thumbnail?sz=w1000&id=1SyMvaxZacRujOWWy1ykCRo2ApLz2qVWC",

  " https://drive.google.com/thumbnail?sz=w1000&id=1Qzob3vRcr4SUoM3eRC4bMtkoHSng8iaD",
  "https://drive.google.com/thumbnail?sz=w1000&id=1hmwAjVAh_nfJlpNZPEsLGmpIg63wFgWe",
  "https://drive.google.com/thumbnail?sz=w1000&id=1vUdW-VGmp9hkFMydhvRoN3CaiOOzSd7j",
  "https://drive.google.com/thumbnail?sz=w1000&id=1-R0WXMSVSgIjBOdYB4VWVztx4jRuVoKX",
  "https://drive.google.com/thumbnail?sz=w1000&id=1YJDT_l1zU6Z97r3wx5wr5wTOsA9idt0x",
  "https://drive.google.com/thumbnail?sz=w1000&id=1k4cHjqE5iieCG6_253eXq2O_wjD-PaKh",
  "https://drive.google.com/thumbnail?sz=w1000&id=1iDC4FdeYSS2WiLlkFpP3XaiMDy4xLgvs",
  "https://drive.google.com/thumbnail?sz=w1000&id=1LpigTmvDckbjBF6wj9T_NRPTLiDgstuV",
  "https://drive.google.com/thumbnail?sz=w1000&id=1MKKsaI2Mmzk9Q70g84Fa0bWimBBvT49E",
  "https://drive.google.com/thumbnail?sz=w1000&id=1Vvsfbr18OhHvCgKJOi5-quIqd5oPA4vx",
  "https://drive.google.com/thumbnail?sz=w1000&id=1Al-nppxg_vR-WiHtCC7qCaiAOLrjEe8K",
  "https://drive.google.com/thumbnail?sz=w1000&id=1-eP3qZ1lUrJ4soWKHLQuRzsoN96SiMES",
];

const LazyImage = ({ src }) => {
  const [loaded, setLoaded] = useState(false);
  const dimns = { width: 250, height: 320 };
  return (
    <Box position="relative" mx={1} borderRadius={3} overflow="hidden">
      <img
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
      <Stack
        sx={{
          maxWidth: "98vw",
          gap: "30px",
          height: "auto",
          marginBottom: "80px",
        }}
      >
        <Stack
          direction="row"
          // alignItems="space-between"
          justifyContent="center"
          paddingTop="60px"
        >
          <Typography
            variant="h1"
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
              <OpenInNewIcon sx={{ marginLeft: "5px", fontSize: "30px" }} />
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
