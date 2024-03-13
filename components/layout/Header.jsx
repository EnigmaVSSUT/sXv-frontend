import {
  Typography,
  Stack,
  Button,
  AppBar,
  Box,
  IconButton,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import { useState, useContext } from "react";
import AppContext from "context/AppContext";
import { useRouter } from "next/router";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(AppContext);
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push("/");
  };
  return (
    <AppBar
      sx={{
        // backgroundColor: "#F3EEE8;",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 32px",
        gap: "20px",
        isolation: "isolate",
        borderBottom: "1px solid",
        borderColor: "divider",
        backdropFilter: "blur(20px)",
      }}
      elevation={0}
      position="sticky"
      color="header"
    >
      <Typography
        sx={{
          color: "#C0000A",
          fontFamily: "BentonSans Comp Black",
          fontSize: "1.7rem",
        }}
      >
        <Link href="/#home">
          {" "}
          SAMAVESH <span className="black">X</span> VASSAUNT
        </Link>
      </Typography>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          flexDirection: "row",

          padding: "0px",
          gap: "16px",
          color: "#000000",
          alignItems: "center",
        }}
      >
        <Typography variant="nav">
          <Link href="/#home">HOME</Link>
        </Typography>
        <Typography variant="nav">
          <Link href="/#theme">THEME</Link>
        </Typography>
        <Typography variant="nav">
          <Link href="/events">EVENTS</Link>
        </Typography>
        <Typography variant="nav">
          <Link href="/clubs">COMMITTEES</Link>
        </Typography>
        <Typography variant="nav">
          <Link href="/#sponsors">SPONSORS</Link>
        </Typography>
        <Typography variant="nav">
          <Link href="/#organisers">THE TEAM</Link>
        </Typography>
        <Typography variant="nav">
          <Link href="/ContactUs">CONTACT US</Link>
        </Typography>
      </Box>
      <Box>
        {!isAuthenticated ? (
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <Link
              hidden={router.pathname === "/registration"}
              href="/registration"
            >
              <Button
                variant="contained"
                sx={{ borderRadius: "20px", marginRight: "10px" }}
              >
                Register
              </Button>
            </Link>

            <Link hidden={router.pathname === "/login"} href="/login">
              <Button variant="contained" sx={{ borderRadius: "20px" }}>
                Login
              </Button>
            </Link>
          </Box>
        ) : (
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <Link
              href={
                localStorage.getItem("token") ? "/account" : "/registration"
              }
            >
              <IconButton variant="contained">
                <PersonIcon></PersonIcon>
              </IconButton>
            </Link>
            <Button
              variant="contained"
              sx={{ borderRadius: "20px" }}
              onClick={logout}
            >
              Logout
            </Button>
          </Box>
        )}
        <IconButton sx={{ display: { md: "none" } }}>
          <MenuIcon onClick={() => setOpen(true)} />
        </IconButton>
        <SwipeableDrawer
          PaperProps={{
            sx: {
              backgroundColor: "#f3eee8",
              width: "200px",
            },
          }}
          open={open}
          anchor="right"
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
        >
          <div>
            <IconButton>
              <ChevronRightIcon onClick={() => setOpen(false)} />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem>
              {" "}
              {!isAuthenticated ? (
                <>
                  <Link
                    hidden={router.pathname === "registration"}
                    href="/registration"
                  >
                    <Button
                      variant="contained"
                      sx={{ borderRadius: "20px", marginRight: "10px" }}
                      onClick={() => setOpen(false)}
                    >
                      Register
                    </Button>
                  </Link>

                  <Link hidden={router.pathname === "/login"} href="/login">
                    <Button
                      variant="contained"
                      sx={{ borderRadius: "20px" }}
                      onClick={() => setOpen(false)}
                    >
                      Login
                    </Button>
                  </Link>
                </>
              ) : (
                <Link
                  href={
                    localStorage.getItem("token") ? "/account" : "/registration"
                  }
                  onClick={() => setOpen(false)}
                >
                  <Typography variant="nav">PROFILE</Typography>
                </Link>
              )}{" "}
            </ListItem>
            <ListItem>
              <Typography variant="nav">
                <Link href="/#home" onClick={() => setOpen(false)}>
                  HOME
                </Link>
              </Typography>
            </ListItem>

            <ListItem>
              <Typography variant="nav">
                <Link href="/#theme" onClick={() => setOpen(false)}>
                  THEME
                </Link>
              </Typography>
            </ListItem>

            <ListItem>
              <Typography variant="nav">
                <Link href="/events" onClick={() => setOpen(false)}>
                  EVENTS
                </Link>
              </Typography>
            </ListItem>

            <ListItem>
              <Typography variant="nav">
                <Link href="/clubs" onClick={() => setOpen(false)}>
                  COMMITTEES
                </Link>
              </Typography>
            </ListItem>

            <ListItem>
              <Typography variant="nav">
                <Link href="/#sponsors" onClick={() => setOpen(false)}>
                  SPONSORS
                </Link>
              </Typography>
            </ListItem>

            <ListItem>
              <Typography variant="nav">
                <Link href="/#organisers" onClick={() => setOpen(false)}>
                  THE TEAM
                </Link>
              </Typography>
            </ListItem>

            <ListItem>
              <Typography variant="nav">
                <Link href="/ContactUs" onClick={() => setOpen(false)}>
                  CONTACT US
                </Link>
              </Typography>
            </ListItem>

            <ListItem>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  display: isAuthenticated ? "block" : "none",
                }}
                onClick={() => logout()}
              >
                Logout
              </Button>
            </ListItem>
          </List>
        </SwipeableDrawer>
      </Box>
    </AppBar>
  );
};

export default Header;
