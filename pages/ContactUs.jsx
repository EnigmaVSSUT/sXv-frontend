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
        .post("https://fest-backend-p8lk.onrender.com/api/contact/contactUs", {
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
            direction={{ xs: "column-reverse", md: "row" }}
            gap="40px"
            justifyContent="center"
          >
            <Stack padding="18px" border="1px solid grey" borderRadius="5px">
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
                  sx={{ width: { sm: "250px", xs: "100%" } }}
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
                sx={{ width: "100%" }}
              >
                Submit
              </LoadingButton>
            </Stack>
          </Stack>
        </Stack>
      </motion.div>
    </>
  );
};

export default ContactUS;
