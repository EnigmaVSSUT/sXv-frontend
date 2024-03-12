import { Stack, Typography, Box } from "@mui/material";
import Marquee from "react-fast-marquee";
const Marqueesv = () => {
  return (
    <Marquee speed={80} gradient={false}>
      <Typography
        sx={{
          color: "transparent",
          fontFamily: "BentonSans Comp Black",
          fontSize: {
            xs: "100px",
            md: "150px",
          },
          lineHeight: "180px",
          WebkitTextStrokeColor: "#857370",
          WebkitTextStrokeWidth: "2px",
          postion: "relative",
          top: "50px",
          paddingTop: "40px",
          zIndex: "-5",
          margin: "0 80px",
        }}
      >
        SAMAVESH <span id="black">X</span> VASSAUNT
      </Typography>
      <Typography
        sx={{
          color: "transparent",
          fontFamily: "BentonSans Comp Black",
          fontSize: {
            xs: "100px",
            md: "150px",
          },
          lineHeight: "180px",
          WebkitTextStrokeColor: "#857370",
          WebkitTextStrokeWidth: "2px",
          postion: "relative",
          top: "50px",
          paddingTop: "40px",
          zIndex: "-5",
          margin: "0 80px",
        }}
      >
        SAMAVESH <span id="black">X</span> VASSAUNT
      </Typography>
    </Marquee>
  );
};
export default Marqueesv;
