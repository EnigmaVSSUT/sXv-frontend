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
import { useState, useContext, useEffect } from "react";
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
  const [link, setLink] = useState(router.asPath);
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
          fontFamily: "Tangelo",
          fontSize: {xs:"1.5rem",md:"1.7rem"},
        }}
      >
        <Link href="/">
          {" "}
          <span className="Orange">SAMAVESH</span>
          <span className="black"> X</span>
          <span className="Blue"> VASSAUNT</span>
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
          <Link
            href="/"
            onClick={() => {
              setLink("/");
              console.log(router.asPath);
            }}
            style={{
              color: link === "/" ? "#e14f5a" : "black",
            }}
          >
            Home
          </Link>
        </Typography>
        <Typography variant="nav">
          <Link
            href="/#theme"
            onClick={() => {
              setLink("/#theme");
            }}
            style={{
              color: link === "/#theme" ? "#e14f5a" : "black",
            }}
          >
            Theme
          </Link>
        </Typography>
        <Typography variant="nav">
          <Link
            href="/events"
            onClick={() => {
              setLink("/events");
            }}
            style={{
              color: link === "/events" ? "#e14f5a" : "black",
            }}
          >
            Events
          </Link>
        </Typography>
        <Typography variant="nav">
          <Link
            href="/clubs"
            onClick={() => {
              setLink("/clubs");
            }}
            style={{
              color: link === "/clubs" ? "#e14f5a" : "black",
            }}
          >
            Committies
          </Link>
        </Typography>

        <Typography variant="nav">
          <Link
            href="/#organisers"
            onClick={() => {
              setLink("/#organisers");
            }}
            style={{
              color: link === "/#organisers" ? "#e14f5a" : "black",
            }}
          >
            The Team
          </Link>
        </Typography>
        <Typography variant="nav">
          <Link
            href="/ContactUs"
            onClick={() => {
              setLink("/ContactUs");
            }}
            style={{
              color: link === "/ContactUs" ? "#e14f5a" : "black",
            }}
          >
            Contact Us
          </Link>
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
                sx={{
                  borderRadius: "20px",
                  marginRight: "10px",
                  boxShadow: "4px 4px 0px -2px #30302f",
                  "&:hover": {
                    boxShadow: "4px 4px 0px -2px #30302f",
                  },
                }}
              >
                Register
              </Button>
            </Link>

            <Link hidden={router.pathname === "/login"} href="/login">
              <Button
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  boxShadow: "4px 4px 0px -2px #30302f",
                  "&:hover": {
                    boxShadow: "4px 4px 0px -2px #30302f",
                  },
                }}
              >
                Log In
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
              width: "210px",
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
                      sx={{
                        borderRadius: "20px",
                        marginRight: "10px",
                        boxShadow: "4px 4px 0px -2px #30302f",
                        "&:hover": {
                          boxShadow: "4px 4px 0px -2px #30302f",
                        },
                      }}
                      onClick={() => setOpen(false)}
                    >
                      Register
                    </Button>
                  </Link>

                  <Link hidden={router.pathname === "/login"} href="/login">
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "20px",
                        marginRight: "10px",
                        boxShadow: "4px 4px 0px -2px #30302f",
                        "&:hover": {
                          boxShadow: "4px 4px 0px -2px #30302f",
                        },
                      }}
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
                <Link href="/" onClick={() => setOpen(false)}>
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

            {/* <ListItem>
              <Typography variant="nav">
                <Link href="/#sponsors" onClick={() => setOpen(false)}>
                  SPONSORS
                </Link>
              </Typography>
            </ListItem> */}

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
