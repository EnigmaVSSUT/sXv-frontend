import React from "react";
import { Stack } from "@mui/system";
import TextField from "@mui/material/TextField";
import axios from "axios";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Button,
  Typography,
  Box,
  Modal,
} from "@mui/material";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import AppContext from "context/AppContext";
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";
import { ToastContainer, toast } from "react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import {
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Form = () => {
  const { isAuthenticated, setIsAuthenticated } = React.useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [open, setOpen] = useState(false);
  const [sendMail, setSendMail] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  });

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  //password visibility
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submit = async (email, pwd) => {
    if (!pwd || !email) {
      return toast.warning("All field must be filled");
    }
    setLoading(true);
    // console.log({ email: email }, { password: pwd });
    const { data } = await axios.post(
      "https://sxv-backend.onrender.com/api/auth/login",
      { email: email, password: pwd },
      {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    if (await data.success) {
      toast.success("Login Sucessful");

      localStorage.setItem("token", await data.token);
      setIsAuthenticated(true);
      // router.push("/");
      router.back();
      setPwd("");
      setEmail("");
    } else {
      toast.error("Credentials not matching");
    }
    setLoading(false);
  };

  const emailsend = async (email) => {
    try {
      setEmailLoading(true);
      await axios.post(
        "https://sxv-backend.onrender.com/api/password/forgetpwd",
        {
          email,
        }
      );
      setEmailLoading(false);
      toast.success("Email sent successfully");
    } catch (error) {
      toast.error("Please enter a valid email address");
    } finally {
      setEmailLoading(false);
    }
  };

  return (
    <Stack direction="row" justifyContent="center">
      <Modal
        sx={{
          border: "none",
          "&:focus": {
            outline: "none",
          },
        }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Stack
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            // border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            variant="h6"
            color="initial"
            sx={{
              marginTop: "20px",
              marginBottom: "45px",
              border: "none",
              outline: "none",
            }}
          >
            Forgot Password ?
          </Typography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              width: "100%",
              padding: "20px",
              border: "2px solid transparent",
              borderRadius: "10px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f9f9f9",
              "&:focus": {
                outline: "none",
              },
              "&:active": {
                outline: "none",
              },
            }}
          >
            <TextField
              sx={{ width: "100%" }}
              required
              id="name"
              label="Email"
              variant="outlined"
              value={sendMail}
              size="small"
              onChange={(e) => {
                setSendMail(e.target.value);
              }}
            />

            <LoadingButton
              loading={loading}
              variant="contained"
              sx={{
                width: "100%",
                borderRadius: "10px",
                backgroundColor: "#e14f5a",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#c0000a",
                },
              }}
              onClick={() => emailsend(sendMail)}
            >
              {emailLoading ? "Sending..." : "SEND"}
            </LoadingButton>
          </Stack>
        </Stack>
      </Modal>

      <Head>
        <title>Login</title>
        <meta name="Login Page" content="Meta description for the Home page" />
        <link rel="shortcut icon" href="svLogo.png" />
      </Head>
      <Stack
        width="90%"
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <ToastContainer />

        <Stack
          //   maxWidth="550px"
          height="auto"
          margin="0 auto"
          gap="25px"
          alignItems="center"
          sx={{
            width: {
              xs: "95vw",
              sm: "60vw",
              md: "500px",
            },
            padding: {
              xs: "10px",
              md: "25px",
            },
          }}
        >
          <Typography
            variant="h3"
            color="initial"
            sx={{ marginTop: "80px", marginBottom: "45px" }}
          >
            Login
          </Typography>
          <TextField
            fullWidth
            required
            id="name"
            label="Email"
            variant="outlined"
            value={email}
            size="small"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <TextField
            fullWidth
            id="pwd"
            label="Password*"
            type={values.showPassword ? "text" : "password"}
            value={pwd}
            size="small"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
            variant="outlined" // Set the variant to outlined here
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <LoadingButton
            loading={loading}
            variant="contained"
            onClick={() => submit(email, pwd)}
            sx={{
              width: "100%",
              marginTop: "10px",
              borderRadius: "20px",
              marginRight: "10px",
              boxShadow: "4px 4px 0px -2px #30302f",
              "&:hover": {
                boxShadow: "4px 4px 0px -2px #30302f",
              },
            }}
          >
            Login
          </LoadingButton>
          <Typography
            sx={{
              textDecoration: "underline",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              setOpen(true);
            }}
          >
            Forgt Password ?
          </Typography>
        </Stack>
        {/* <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Image
            alt="helper image"
            src="./sv.png"
            height="300"
            width="300"
            sx={{}}
          />
        </Box> */}
      </Stack>
    </Stack>
  );
};

export default Form;
