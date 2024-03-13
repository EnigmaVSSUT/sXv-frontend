/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from "@mui/system";
import TextField from "@mui/material/TextField";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Box, Modal } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Router from "next/router";
import LoadingButton from "@mui/lab/LoadingButton";
import Head from "next/head";
import {
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Select, MenuItem } from "@mui/material";
import React from "react";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Button,
  Typography,
} from "@mui/material";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import AppContext from "context/AppContext";
const Form = () => {
  const router = useRouter();
  const [next, setNext] = useState("");
  useEffect(() => {
    if (!router.isReady) return;
    const n = router.query.next;
    // console.log(n);
    setNext((v) => n);
  }, [router.isReady]);
  useEffect(() => {
    // console.log(window.history);
    if (isAuthenticated) router.push("/");
  }, []);
  const { isAuthenticated, setIsAuthenticated } = React.useContext(AppContext);
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

  //confirmpassword visibility
  const handleClickShowconfirmPassword = () => {
    setValues({
      ...values,
      showconfirmPassword: !values.showconfirmPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [reg, setReg] = useState(false);
  const [college, setCollege] = useState(false);
  const [otp, setOtp] = useState();
  const [open, setOpen] = useState(false);
  const [isVssutian, setIsVssutian] = useState(false);
  const [otpTyped, setOtpTyped] = useState();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");
  // const [otpTyped,setOtpTyped]
  const [regnum, setRegnum] = useState();
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState();
  const [colgname, setColgname] = useState("");
  const [phnnum, setPhnnum] = useState();
  const [verifyLoad, setVerifyLoad] = useState(false);

  const regexExp = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

  const handleOpen = async () => {
    if (
      !email ||
      !pwd ||
      !cpwd ||
      !name ||
      !colgname ||
      !branch ||
      !year ||
      !phnnum
    ) {
      return toast.error("All field must be filled");
    }
    if (phnnum.length !== 10) {
      return toast.error("Enter valid 10 digits Phone number");
    }
    if (pwd.length < 5)
      toast.error("Password length must be atleast 5 characters!");
    if (pwd != cpwd) {
      return toast.error("Password and Confirm Password not matching");
    }

    if (!regexExp.test(email)) {
      return toast.error("Enter valid Email");
    }
    if (!college) {
      if (regnum?.length !== 10) {
        return toast.error("Enter valid 10 digits registration number");
      }
    }
    sendOTP();
  };
  const handleClose = () => {
    setOpen(false);
    setVerifyLoad(false);
  };

  const verifyOTP = async () => {
    setVerifyLoad(true);
    if (otp !== otpTyped) {
      toast.error("Your entered OTP didn't match the OTP sent to your e-mail!");
    } else {
      toast.success("OTP matched!");
      setOtp("");
      setOtpTyped("");
      setOpen(false);
      const { data } = await axios.post(
        "https://fest-backend-p8lk.onrender.com/api/auth/signup",
        {
          username: name,
          email,
          password: cpwd,
          isVssutian: colgname === "VSSUT" ? true : false,
          regdNo: colgname === "VSSUT" ? regnum : 1,
          college: colgname,
          graduationYear: year,
          branch,
          phone: phnnum,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (await data.success) {
        toast.success(await data.message);
        // window.location.reload()
        setColgname("");
        setName("");
        setPwd("");
        setCpwd("");
        setCollege(false);
        setReg(false);
        setOpen(false);
        setYear("");
        setRegnum("");
        setBranch("");
        setEmail("");
        setYear("");
        setPhnnum("");
        localStorage.setItem("token", await data.token);
        setIsAuthenticated(true);
        // console.log("routeer");
        router.back();
        if (next) {
        }
      } else {
        toast.error(await data.message);
      }
    }
    setVerifyLoad(false);
  };

  const sendOTP = async () => {
    setOtp("");
    setOtpTyped("");
    setOtpLoading(true);
    const { data } = await axios.post(
      "https://fest-backend-p8lk.onrender.com/api/auth/sendOTP",
      { email },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      }
    );
    if (await data.otp) {
      setOtp(await data.otp);

      setOpen(true);
    }

    toast.info(await data.message);
    setOtpLoading(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid ",
    boxShadow: 24,
    p: 4,
  };
  const [otpLoading, setOtpLoading] = useState(false);
  return (
    <Stack
      maxWidth="550px"
      height="auto"
      padding="25px"
      margin="0 auto"
      gap="25px"
    >
      <Head>
        <title>Registration Page</title>
        <meta
          name="Registration Page"
          content="Meta description for the Registration page"
        />
        <link rel="shortcut icon" href="svlogo.ico" />
      </Head>
      <Stack sx={{ width: "100%" }} direction={"row"} justifyContent="center">
        <Typography variant="h4" color="initial" sx={{ marginTop: "20px" }}>
          JOIN THE CARNIVAL
        </Typography>
      </Stack>
      <Stack direction={{ xs: "coloumn", md: "row" }} gap="30px">
        <TextField
          required
          id="name"
          // size="small"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          required
          id="email"
          // size="small"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Stack>
      <Stack sx={{ direction: "column", gap: "25px" }}>
        {/* <InputLabel htmlFor="outlined-adornment-password" >Password*</InputLabel> */}
        <TextField
          variant="outlined"
          // size="small"
          id="pwd"
          type={values.showPassword ? "text" : "password"}
          value={pwd}
          onChange={(e) => {
            setPwd(e.target.value);
          }}
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
          label="Password"
        />

        {/* <OutlinedInput
          id="pwd"
          type={values.showPassword ? "text" : "password"}
          value={pwd}
          size="small"
          variant="outlined" 
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
        />  */}

        <TextField
          id="cpwd"
          label="Confirm-Password*"
          variant="outlined"
          // size="small"
          type={values.showconfirmPassword ? "text" : "password"}
          value={cpwd}
          onChange={(e) => {
            setCpwd(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowconfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showconfirmPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* <InputLabel htmlFor="outlined-adornment-password" sx={{marginTop: "28px"}}>
          Confirm-Password*
        </InputLabel>
        <OutlinedInput
        
          
          id="cpwd"
          size="small"
          type={values.showPassword ? "text" : "password"}
          value={cpwd}
          onChange={(e) => {
            setCpwd(e.target.value);
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
          label="Confirm-Password"
        /> */}

        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Institution
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="radio"
          >
            <FormControlLabel
              value="VSSUT"
              control={
                <Radio
                  onChange={(e) => {
                    setReg(e.target.checked);
                    setColgname(e.target.value);
                    setCollege(!e.target.checked);
                  }}
                />
              }
              label="VSSUT"
            />
            <FormControlLabel
              value="Non-VSSUT"
              control={
                <Radio
                  onChange={(e) => {
                    setReg(!e.target.checked);
                    setColgname("");
                    setCollege(e.target.checked);
                    setIsVssutian(e.target.checked);
                  }}
                />
              }
              label="Non-VSSUT"
            />
          </RadioGroup>
        </FormControl>
        <Stack direction="row" gap="5px">
          <TextField
            required
            id="regno"
            label="Registration Number"
            variant="outlined"
            fullWidth="true"
            // size="small"
            type="number"
            value={regnum}
            sx={{
              // marginTop: "10px",
              display: !reg ? "none" : "block",
            }}
            onChange={(e) => {
              setRegnum(e.target.value);
            }}
          />
          <TextField
            required
            type="number"
            id="phnnum"
            // size="small"
            label="Phone-Number"
            variant="outlined"
            value={phnnum}
            fullWidth="false"
            // sx={{
            //   marginTop: "10px",
            // }}
            onChange={(e) => {
              setPhnnum(e.target.value);
            }}
          />
          <TextField
            required
            id="institution-name"
            label="Institution Name"
            value={colgname}
            // size="small"
            variant="outlined"
            fullWidth="false"
            sx={{
              // marginTop: "10px",
              display: college ? "block" : "none",
            }}
            onChange={(e) => {
              setColgname(e.target.value);
            }}
          />
        </Stack>
        {/* 
        <InputLabel id="demo-simple-select-label"  variant="standard" sx={{marginTop:"28px"}}>Graduation-Year</InputLabel> */}
        {/* <Select
          variant="outlined"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          size="small"
          label="Graduation-Year"
          onChange={(e) => {
            setYear(e.target.value);
          }}
          fullWidth="false"
        >
          
          <MenuItem value={2024}>2024</MenuItem>
          <MenuItem value={2025}>2025</MenuItem>
          <MenuItem value={2026}>2026</MenuItem>
          <MenuItem value={2027}>2027</MenuItem>
          <MenuItem value={2027}>2028</MenuItem>
          <MenuItem value={2028}>Other</MenuItem>
        </Select> */}
        <FormControl fullWIdth>
          <InputLabel id="demo-simple-select-label">Graduation-Year</InputLabel>
          <Select
            // size="medium"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={year}
            label="Graduation-year"
            onChange={(e) => {
              setYear(e.target.value);
            }}
          >
            <MenuItem value={2024}>2024</MenuItem>
            <MenuItem value={2025}>2025</MenuItem>
            <MenuItem value={2026}>2026</MenuItem>
            <MenuItem value={2027}>2027</MenuItem>
            <MenuItem value={2027}>2028</MenuItem>
            <MenuItem value={2028}>Other</MenuItem>
          </Select>
        </FormControl>

        <TextField
          required
          id="branch"
          // size="small"
          label="Branch"
          variant="outlined"
          value={branch}
          onChange={(e) => {
            setBranch(e.target.value);
          }}
        />
      </Stack>

      <LoadingButton
        loading={otpLoading}
        onClick={handleOpen}
        variant="contained"
        sx={{ width: "100%" }}
      >
        Register
      </LoadingButton>
      <ToastContainer />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ marginBottom: "1rem" }} variant="h6">
            {" "}
            {`Enter 4 digit OTP sent to ${email}`}
          </Typography>
          <MuiOtpInput
            value={otpTyped}
            onChange={(newValue) => {
              setOtpTyped(newValue);
            }}
          />
          <LoadingButton
            onClick={verifyOTP}
            variant="contained"
            sx={{ marginTop: "1rem" }}
            loading={verifyLoad}
          >
            <Typography sx={{ color: "white" }} variant="p">
              Verify OTP
            </Typography>
          </LoadingButton>
        </Box>
      </Modal>
    </Stack>
  );
};

export default Form;
