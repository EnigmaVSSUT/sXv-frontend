import { Input, Stack, TextField, Typography, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Head from "next/head";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "material-react-toastify/dist/ReactToastify.css";
import { AnimatePresence, motion } from "framer-motion";
const ContactUS = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const submitQuery = async () => {
    if (!name || !number || !query || !email) {
      toast.warning("All fields must be filled!");
    } else {
      setLoading(true);
      await axios
        .post("https://sxv-backend.onrender.com/api/contact/contactUs", {
          name,
          email,
          number,
          query,
        })
        .then((response) => toast(response.data.message));
      setLoading(false);
      setName("");
      setEmail("");
      setQuery("");
      setNumber("");
    }
  };
  return (
    <>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
            duration: 2,
          },
        }}
      >
        <Stack
          width="90vw"
          height="auto"
          padding="25px"
          margin="0 auto"
          gap="25px"
        >
          <ToastContainer />
          <Head>
            <title>Contact Us</title>
            <meta name="Home" content="Meta description fevor the Home page" />
            <link rel="shortcut icon" href="svlogo.ico" />
          </Head>
          <Typography
            variant="h3"
            color="initial"
            textAlign="center"
            textTransform="uppercase"
          >
            Contact Us
          </Typography>
          <Stack
            sx={{ marginBottom: "20px", marginTop: "30px" }}
            direction={{ xs: "column-reverse", md: "row" }}
            gap="40px"
            justifyContent="center"
          >
            <Stack
              padding="18px"
              border="1px solid grey"
              sx={{ boxShadow: "12px 14px  #00AF9A , 12px 13px 0 2px #000000" }}
            >
              <Typography variant="h4" color="primary">
                Event Location
              </Typography>
              <Typography variant="h6" color="#444444">
                Veer Surendra Sai University of Technology , Siddhi Vihar ,
                <br /> Burla , Sambalpur ,Odisha , PIN - 768018
              </Typography>
              <Typography variant="h4" color="primary">
                Contact No.
              </Typography>
              <Typography variant="h6" color="#444444">
                +91 6372742772
              </Typography>
              <Typography variant="h4" color="primary">
                Email:
              </Typography>
              <Typography variant="h6" color="#444444">
                fest.vssut2023@gmail.com
              </Typography>
            </Stack>
            <Stack>
              <Stack
                // direction={{ xs: "coloumn", md: "row" }}
                gap="20px"
                width="100%"
                mb={4}
              >
                <Stack gap="13px">
                  <TextField
                    id="name"
                    label="Name"
                    value={name}
                    sx={{ width: "100%" }}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <TextField
                    id="email"
                    label="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <TextField
                    id="number"
                    label="Phone Number"
                    value={number}
                    onChange={(e) => {
                      setNumber(e.target.value);
                    }}
                  />
                </Stack>
                <TextField
                  id="standard-multiline-static"
                  label="Query"
                  multiline
                  sx={{ width: { sm: "100%", xs: "100%" } }}
                  rows={6}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                />
              </Stack>
              <LoadingButton
                onClick={submitQuery}
                loading={loading}
                variant="contained"
                sx={{ width: "100%", boxShadow: "3px 4px  #000000" }}
              >
                Submit
              </LoadingButton>
            </Stack>
          </Stack>

          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "300px",
              alignItems: "center",
            }}
          >
            <iframe
              id="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.2621706404398!2d83.90142197475228!3d21.497448580271683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a213da4ec28af2d%3A0xb33a5cc9af8c33c7!2sVeer%20Surendra%20Sai%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1710784004014!5m2!1sen!2sin"
              style={{
                border: "2px solid #ccc",
                width: "80%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Stack>
      </motion.div>
    </>
  );
};

export default ContactUS;
