import { useState } from "react";
import { Stack, Typography, Box, Skeleton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";

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

const Caraousel = () => {
  return (
    <Stack sx={{ overflow: "hidden" }}>
      <Stack sx={{ maxWidth: "98vw", gap: "30px", height: "auto" }}>
        <Stack
          direction="row"
          // alignItems="space-between"
          justifyContent="center"
          paddingTop="60px"
          paddingBottom="50px"
          // sx={{ height: "200px"}}
        >
          <Typography
            variant="h2"
            color="initial"
            mb={5}
            sx={{
              WebkitTextStrokeColor: "#857370",
              WebkitTextStrokeWidth: "3px",
              textAlign: "center",
              justifyContent: "center",
              strokeWidth: "3px",
              color: "transparent",
              letterSpacing: "1.5px",
              marginBottom: {
                xl: "100px",
                md: "20px",
                lg: "130px",
                xs: "30px",
                sm: "20px",
              },
            }}
          >
            THE ASSEMBLY
          </Typography>
          {/* <Link href="/events">
            <Typography
              sx={{ textDecoration: "underline", color: "#ED1D24" }}
              variant="h6"
              color="initial"
            >
              VIEW ALL
            </Typography>
          </Link> */}
        </Stack>
        <Marquee direction="right" speed={90} gradient={false}>
          {imgUrls.map((url, i) => (
            <LazyImage key={"assembly" + i} src={url} />
          ))}
        </Marquee>
      </Stack>
      {/* <Stack  direction={'row'} width={'100%'} flexDirection={'flex-end !important'}> */}
    </Stack>
    // </Stack>
  );
};
export default Caraousel;

const LazyImage = ({ src }) => {
  const [loaded, setLoaded] = useState(false);
  const dimns = { width: 200, height: 200 };
  return (
    <Box position="relative" mx={1} borderRadius={3} overflow="hidden">
      <Image {...{ src, ...dimns }} alt="" onLoad={() => setLoaded(true)} />
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

// const oldImgUrls = [
// 	"https://drive.google.com/uc?export=view&id=1yvSD7sNIuApLPNu40RRvNY-pYrGS-oJQ",
// 	"https://drive.google.com/uc?export=view&id=1Xhy1OlG_jdJWD18GHnZ4UgQmWwCdsPLH",
// 	"https://drive.google.com/uc?export=view&id=1xeUFb0QLsdMQG7EhmGF0J7Egb7gjb_2_",
// 	"https://drive.google.com/uc?export=view&id=1VsxXuzBR-PxRBH8Z_NnWAaLlivnmEYoa",
// 	"https://drive.google.com/uc?export=view&id=1Tua9w9GTXSrLFQee3Kh3fKm6_UT06TML",
// 	"https://drive.google.com/uc?export=view&id=1Sp4yTCQQ0kQlnCRy26qx-4Y1aEnT-MZ3",
// 	"https://drive.google.com/uc?export=view&id=1sTOhf7-IQBoOWy6yfP0mAuUNsGuf3wsg",
// 	"https://drive.google.com/uc?export=view&id=1Shs48OqoNJw_RdqSSoEbnqKbHEFl3wsL",
// 	"https://drive.google.com/uc?export=view&id=1q2oVbGgXyk-J6NlQ2Mbuz41AwRjJxv4m",
// 	"https://drive.google.com/uc?export=view&id=1kXt9Ki1V8HDkiIFh7dEzlIlJQWcjbPOe",
// 	"https://drive.google.com/uc?export=view&id=1ouf7KjnBQaDhXjmmrxuXnHZDfrDMWZQD",
// 	"https://drive.google.com/uc?export=view&id=1oQLgXCipsCFSWZ9LyRuXM1UHgnnAMlSW",
// 	"https://drive.google.com/uc?export=view&id=1jSCI_KFOZyF7KCLfHweEjEagJP4uKQ1p",
// 	"https://drive.google.com/uc?export=view&id=1IivHINaLhygg1T9CbYhr_2zBa8jsC4J1",
// 	"https://drive.google.com/uc?export=view&id=1hOlie3RI7-hCEY4QhnZ1VbcoyFzrlKZN",
// 	"https://drive.google.com/uc?export=view&id=1h-wrgMcn6EaPijDSkVhgZOTp6zHN7xWQ",
// 	"https://drive.google.com/uc?export=view&id=1gXA2JR2EIWWDJLU4LFs5LaTim9XxUCCt",
// 	"https://drive.google.com/uc?export=view&id=1GLwm6q_hNxe6PeYjkO0b8ZYH8a_vs7Pu",
// 	"https://drive.google.com/uc?export=view&id=1GF9kDm3gYwBcz2TXYe7n2DUGtcJ0IIBP",
// 	"https://drive.google.com/uc?export=view&id=1g9pxjcwx6Mh5__cm_SBugSRg28PkCfQ8",
// ];
