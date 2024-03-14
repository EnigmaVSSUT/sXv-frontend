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

  //confirm password visibility
  const handleClickShowcnfPassword = () => {
    setValues({
      ...values,
      showcnfPassword: !values.showcnfPassword,
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
      "https://fest-backend-p8lk.onrender.com/api/auth/login",
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
  return (
    <Stack direction="row" justifyContent="center">
      <Head>
        <title>Login</title>
        <meta name="Login Page" content="Meta description for the Home page" />
        <link rel="shortcut icon" href="svlogo.ico" />
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
          padding="20px"
          margin="0 auto"
          gap="25px"
          alignItems="center"
          sx={{
            width: {
              md: "500px",
            },
          }}
        >
          <Typography
            variant="h3"
            color="initial"
            sx={{ marginTop: "111px", marginBottom: "28px" }}
          >
            Set a new password
          </Typography>
          {/* <TextField
          sx={{width:"80%"}}
            required
            id="name"
            label="New Password"
            variant="outlined"
            value={email}
            size="small"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          /> */}
          <Stack sx={{ width: "80%", direction: "column", gap: "28px" }}>
            <TextField
              id="pwd"
              label="New Password*"
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

            {/* <Stack sx={{ marginTop: "10px",width:"80%"}}> */}
            <TextField
              id="pwd"
              label="Confirm Password*"
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
                      onClick={handleClickShowcnfPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showcnfPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {/* <InputLabel htmlFor="outlined-adornment-password">
              Password*
            </InputLabel>
            <OutlinedInput
              id="pwd"
              type={values.showPassword ? "text" : "password"}
              value={pwd}
              size="small"
              onChange={(e) => {
                setPwd(e.target.value);
              }}
              endAdornment={
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
              }
              label="Password"
            /> */}
          </Stack>
          <LoadingButton
            loading={loading}
            variant="contained"
            onClick={() => submit(email, pwd)}
            sx={{ width: "80%", marginTop: "10px", marginBottom: "80px" }}
          >
            Submit
          </LoadingButton>
        </Stack>
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        ></Box>
      </Stack>
    </Stack>
  );
};

export default Form;