import { useState } from "react";
import { Stack, Typography, Box, Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Marquee from "react-fast-marquee";
import { InteractiveMarquee } from "./carousel/Marquee";

const imgUrls = [
  "https://res.cloudinary.com/dml2v8bov/image/upload/v1711015623/DRISHYA_POSTER_VASSAUNT_we2yhx.png",

  "https://res.cloudinary.com/dml2v8bov/image/upload/v1711014795/VGROOVE_jzanf3.png",
  "https://res.cloudinary.com/dml2v8bov/image/upload/v1711014706/Carnival_classics_a4_size_2_qajact.png",
  "https://res.cloudinary.com/dml2v8bov/image/upload/v1711015720/ASME_SXV_banner.pdf_fillpb.png",
  "https://res.cloudinary.com/dml2v8bov/image/upload/v1711014888/DANCE_PARTY_1_jfixsk.png",
  "https://res.cloudinary.com/dml2v8bov/image/upload/v1711014040/3_pr3iae.png",
  "https://res.cloudinary.com/dml2v8bov/image/upload/v1711015027/face_painting_comp_1_gorkjk.png",
  "https://res.cloudinary.com/dml2v8bov/image/upload/v1711015121/WAR_OF_HOUSES_2000_x_3000_px_2_cpsj0u.jpg",
  "https://res.cloudinary.com/dml2v8bov/image/upload/v1711014445/RETRO_QUIZ_2000_x_3000_px__POSTERPRINT_ulwtyc.jpg",
  "https://res.cloudinary.com/dml2v8bov/image/upload/v1711015248/tos_axfc5y.png",
  "https://res.cloudinary.com/dml2v8bov/image/upload/v1711015383/HOUSE_PARTY_1_ocxwnv.png",
  "https://res.cloudinary.com/dml2v8bov/image/upload/v1711015524/Tyre_on_fire_ua5gzi.png",
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
