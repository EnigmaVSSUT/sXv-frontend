import { Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Avatar, Grid } from "@mui/material";
import ClubCard from "@/components/ClubCard";
import club from "../lib/data/club";

const Clubs = () => {
  return (
    <Stack sx={{ paddingTop: "50px", margin: { md: "0 auto", sm: "0 auto" } }}>
      <Stack
        sx={{
          justifyContent: "space-between",
          padding: "20px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          margin: { xs: "0 auto", md: "0px" },
        }}
      >
        <Stack>
          <Typography
            variant="h2"
            color="initial"
            sx={{
              textDecoration: "underline",
              fontFamily: "BentonSans Comp Black",
              textTransform: "uppercase",
            }}
          >
            ENIGMA
          </Typography>
          <Typography
            variant="h6"
            color="initial"
            sx={{
              fontFamily: "BentonSans Comp Black",
              textTransform: "uppercase",
              marginBottom: "18px",
            }}
          >
            OFFICIAL WEB AND CODING CLUB
          </Typography>
        </Stack>
        <Stack
          alignItems={{
            xs: "center",
            md: "start",
          }}
        >
          <Typography
            variant="h4"
            color="initial"
            sx={{
              marginBottom: "30px",
              fontFamily: "BentonSans Comp Black",
              textTransform: "uppercase",
            }}
          >
            POINT OF CONTACT
          </Typography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: { lg: "row", md: "row", sm: "coloumn" },
              margin: { md: "0", sm: "0 auto" },
            }}
          >
            <Stack sx={{ alignItems: "center", marginRight: "10px" }}>
              <Avatar>N</Avatar>
              <Typography variant="subtitle1" color="initial">
                SOHAM SAMANTARAY
              </Typography>
              <Typography variant="caption" color="initial">
                SECRETARY
              </Typography>
            </Stack>
            <Stack sx={{ alignItems: "center", marginRight: "10px" }}>
              <Avatar>N</Avatar>
              <Typography variant="subtitle1" color="initial">
                SOHAM SAMANTARAY
              </Typography>
              <Typography variant="caption" color="initial">
                SECRETARY
              </Typography>
            </Stack>
            <Stack sx={{ alignItems: "center", marginRight: "10px" }}>
              <Avatar>N</Avatar>
              <Typography variant="subtitle1" color="initial">
                SOHAM SAMANTARAY
              </Typography>
              <Typography variant="caption" color="initial">
                SECRETARY
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{ padding: "15px" }}
        alignItems={{ xs: "center", md: "start" }}
      >
        <Typography variant="h4" color="initial" marginBottom="3vmax">
          Events
        </Typography>
        <Grid container spacing={2} maxWidth="100vw" justifyContent="center">
          <ClubCard />
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Clubs;
