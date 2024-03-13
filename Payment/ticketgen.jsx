/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from "@mui/system";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from "react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import Ticket from "@/components/ticket";
import React from "react";
import { Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ticket from "@/components/ticket";
import AppContext from "context/AppContext";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
const Ticketgen = () => {
  const router = useRouter();
  const [paymentStatus, setPaymentStatus] = useState(false);

  // const { isAuthenticated, paymentStatus } = React.useContext(AppContext);
  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     router.push("/registration");
  //   } else {
  //     const userToken = localStorage.getItem("token");
  //     const getPaymentStatus = async () => {
  //       const { data } = await axios.post(
  //         "https://sxv-backend.onrender.com//api/payment/getpayment",
  //         {},
  //         {
  //           headers: {
  //             authorisation: userToken,
  //             Accept: "application/json",
  //             "Content-Type": "application/json",
  //             "Access-Control-Allow-Origin": "*",
  //           },
  //         }
  //       );
  //       if (data.link_status !== "PAID") {
  //         setPaymentStatus(false);
  //         router.push("/PaymentPage");
  //       }
  //     };

  //     getPaymentStatus();
  //   }
  // }, []);
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const [open, setOpen] = useState();
  const handleOpen = () => {
    console.log(name, phone, colgname);
    if (!name || !colgname || !phone) {
      return toast.warning("All field must be filled");
    }
  };
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [colgname, setColgname] = useState("");
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

  return (
    <>
      <Stack
        maxWidth="550px"
        height="auto"
        padding="25px"
        margin="0 auto"
        gap="25px"
      >
        <Head>
          <title>Generate your Ticket</title>
          <meta
            name="Ticket Generation"
            content="Meta description fevor the Home page"
          />
          <link rel="shortcut icon" href="svlogo.ico" />
        </Head>
        <Typography variant="h4" color="initial">
          Generate your Ticket
        </Typography>
        <Ticket />
        {/* <Stack direction="row" gap="30px">
        <TextField
          required
          id="name"
          size="small"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          required
          id="college"
          size="small"
          label="College"
          au
          variant="outlined"
          value={colgname}
          onChange={(e) => {
            setColgname(e.target.value);
          }}
        />
      </Stack>
      <Stack>
        <TextField
          required
          id="phoneno"
          value={phone}
          size="small"
          label="Phone No."
          variant="outlined"w
          paddingTop="10px"
          helperText="Please upload your clear photo as it will be used for verification purpose"
          type="password"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </Stack> */}
        <ToastContainer />
      </Stack>
    </>
  );
};

export default Ticketgen;
