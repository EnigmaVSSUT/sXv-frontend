/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import AppContext from "context/AppContext";
import { useRouter } from "next/router";
import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentPage = () => {
  const router = useRouter();
  // const { isAuthenticated, PaymentStatus } = React.useContext(AppContext);
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [paymentLink, setPaymentLink] = useState();
  const details = {
    name: "Soham Samantaray",
    branch: "CSE",
    college: "VSSUT",
    phoneNum: "9090445700",
    amount: "1000",
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/registration");
    } else {
      const userToken = localStorage.getItem("token");
      const getPaymentStatus = async () => {
        const { data } = await axios.post(
          "https://sxv-backend.onrender.com/api/payment/getpayment",
          {},
          {
            headers: {
              authorisation: userToken,
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        // console.log(data.link_url, data)
        if (data.link_status === "PAID") {
          setPaymentStatus(true);
          router.push("/ticketgen");
        } else if (data.link_status !== "PAID") {
          toast.warning(
            "Oops!! seems you have not paid for the ticket, Please complete the payment process"
          );
        }
        if (!data.link_url) {
          const { data } = await axios.post(
            "https://sxv-backend.onrender.com/api/payment/makepayment",
            {},
            {
              headers: {
                authorisation: userToken,
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          );
          setPaymentLink(data.link_url);
          // console.log(data)
        } else {
          setPaymentLink(data.link_url);
          // console.log(data)
        }
      };

      getPaymentStatus();
    }
  }, []);
  return (
    <Stack sx={{ margin: "15px auto", height: "50vh" }}>
      <Head>
        <title>Payment Page</title>
        <meta name="Home" content="Meta description fevor the Home page" />
        <link rel="shortcut icon" href="svLogo.png" />
      </Head>
      <Typography
        variant="h4"
        color="initial"
        textAlign="center"
        sx={{ zIndex: "1", gap: "10px", marginBottom: "20px" }}
      >
        Payment Page
      </Typography>
      <ToastContainer />
      <Stack
        direction="row"
        sx={{
          gap: "15px",
        }}
      >
        <Stack>
          <Typography variant="h6" color="initial">
            Name:
          </Typography>
          <Typography variant="subtitle1" color="initial">
            Institution:
          </Typography>
          <Typography variant="subtitle1" color="initial">
            Branch:
          </Typography>
          <Typography variant="subtitle1" color="initial">
            Contact Number:
          </Typography>
          <Typography variant="subtitle1" color="initial">
            Amount to be paid:
          </Typography>
        </Stack>
        <Stack>
          <Typography
            variant="h6"
            color="initial"
            sx={{
              fontWeight: "200",
            }}
          >
            {details.name}
          </Typography>
          <Typography variant="subtitle1" color="initial">
            {details.college}
          </Typography>
          <Typography variant="subtitle1" color="initial">
            {details.branch}
          </Typography>
          <Typography variant="subtitle1" color="initial">
            {details.phoneNum}
          </Typography>
          <Typography variant="subtitle1" color="initial">
            {details.amount}
          </Typography>
        </Stack>
      </Stack>
      <Button
        variant="contained"
        color="primary"
        alignItems="center"
        sx={{ marginTop: "20px", width: "100%" }}
        href={paymentLink}
      >
        Make Payment
      </Button>
    </Stack>
  );
};

export default PaymentPage;
