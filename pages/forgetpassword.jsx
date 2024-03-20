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

  const [pwd, setPwd] = useState("");
  const [cnfpwd, setCnfpwd] = useState("");

  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  });

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
    showCnfPassword: false,
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
      showCnfPassword: !values.showCnfPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submit = async (pwd, cnfpwd) => {
    try {
      if (pwd !== cnfpwd) {
        return toast.warning("Passwords don't match. Please retry!");
      }
      if (!pwd || !cnfpwd) {
        return toast.warning("Passwords fields are empty");
      }
      setLoading(true);
      const token = router.query.token;
      console.log(pwd, token);
      const message = await axios.post(
        "https://sxv-backend.onrender.com/api/password/changepassword",
        {
          password: pwd,
          token: token,
        },
        {
          headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(message);
      toast.success("Password changed Successfully");
      setLoading(false);
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <Stack direction="row" justifyContent="center">
      <Stack
        width="90%"
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <ToastContainer />

        <Stack
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
              variant="outlined"
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

            <TextField
              id="pwd"
              label="Confirm Password*"
              type={values.showCnfPassword ? "text" : "password"}
              value={cnfpwd}
              size="small"
              onChange={(e) => {
                setCnfpwd(e.target.value);
              }}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowcnfPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showCnfPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <LoadingButton
            loading={loading}
            variant="contained"
            onClick={() => submit(pwd, cnfpwd)}
            sx={{
              width: "80%",
              marginTop: "10px",
              marginBottom: "80px",
              borderRadius: "20px",
              marginRight: "10px",
              boxShadow: "4px 4px 0px -2px #30302f",
              "&:hover": {
                boxShadow: "4px 4px 0px -2px #30302f",
              },
            }}
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
