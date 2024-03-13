import React from "react";
import {
  Modal,
  Input,
  Row,
  Checkbox,
  Button,
  Text,
  Image,
  Avatar,
} from "@nextui-org/react";
import { Grid, Stack, Typography, Box } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

const ClubCard = ({ title, about, venue, time, src }) => {
  const router = useRouter();
  const [paymentStatus, setPaymentStatus] = useState(false);

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    //console.log("closed");
  };
  // console.log(src);

  const [visible1, setVisible1] = React.useState(false);
  const handler1 = () => setVisible1(true);

  const closeHandler1 = () => {
    setVisible1(false);
    //console.log("closed");
  };
  const checkAuth = () => {
    if (!localStorage.getItem("token")) {
      router.push("/registration");
    } else {
      alert("Successfuly Registered");
      // const userToken = localStorage.getItem("token");
      // const getPaymentStatus = async () => {
      //   const { data } = await axios.post(
      //     "https://sxv-backend.onrender.com//api/payment/getpayment",
      //     {},
      //     {
      //       headers: {
      //         authorisation: userToken,
      //         Accept: "application/json",
      //         "Content-Type": "application/json",
      //         "Access-Control-Allow-Origin": "*",
      //       },
      //     }
      //   );
      //   if (data.link_status !== "PAID") {
      //     setPaymentStatus(false);
      //     router.push("/PaymentPage");
      //   }
      // };

      // getPaymentStatus();
    }
  };
  return (
    <Grid
      item
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Stack
        sx={{
          width: "350px",
          height: "250px",
          borderRadius: "4px",
          backgroundColor: " #ce030d",
          padding: "15px",
          border: "#7e4848d4 solid 1px",
          justifyContent: "space-between",
        }}
      >
        <Stack>
          <Typography
            variant="h4"
            color="white"
            sx={{
              fontSize: "16px",
              fontWeight: "700",
              fontFamily: "Product Sans",
            }}
          >
            {title}
          </Typography>
        </Stack>

        <Stack direction="column" sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="subtitle1"
            color="white"
            sx={{ fontWeight: "400", fontFamily: "Product Sans" }}
          >
            Time:{time}
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            sx={{ justifyContent: "space-between", gap: "10px" }}
          >
            <Typography
              variant="subtitle1"
              color="white"
              sx={{ fontWeight: "400", fontFamily: "Product Sans" }}
            >
              Venue:{venue}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onPress={handler}
                auto
                css={{
                  backgroundColor: "#1e1e1e",
                  borderRadius: "0.3rem !important",
                }}
              >
                {" "}
                <Typography
                  variant="subtitle1"
                  color="white"
                  sx={{ fontWeight: "400", fontFamily: "Product Sans" }}
                >
                  Details
                </Typography>
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        width="70vw"
        onClose={closeHandler}
        css={{
          backgroundColor: "rgb(30 30 30 / 89%)",
          padding: "10px !important",
          // width: "100vw",
          //  height: "70vh",
          shadow: "none",
        }}
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{ justifyContent: "space-around" }}
            gap="50px"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image showSkeleton src="/clubs/enigma1.jpeg" height="70vh" />
            </Box>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Box sx={{ width: { xs: "50vw", md: "30vw" } }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Text
                    id="modal-title"
                    size={28}
                    css={{
                      color: "#fff",
                      fontFamily: "BentonSans Comp Black",
                      alignItems: "center",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {title}{" "}
                  </Text>
                </Box>
                <Text
                  id="modal-title"
                  size={18}
                  css={{
                    color: "#fff",
                    fontFamily: "Product Sans",
                    marginTop: "10px",
                  }}
                >
                  {about}
                </Text>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: "40px",
                  }}
                >
                  <Text
                    id="modal-title"
                    size={18}
                    css={{
                      color: "#fff",
                      fontFamily: "BentonSans Comp Black",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {venue}{" "}
                  </Text>
                  <Text
                    id="modal-title"
                    size={18}
                    css={{
                      color: "#fff",
                      fontFamily: "BentonSans Comp Black",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {time}
                  </Text>
                </Stack>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: "40px",
                  }}
                >
                  <Button
                    onPress={handler1}
                    auto
                    css={{
                      backgroundColor: "#C0000A",
                      borderRadius: "0.3rem !important",
                    }}
                  >
                    {" "}
                    <Typography
                      variant="subtitle1"
                      color="white"
                      sx={{
                        fontWeight: "400",
                        fontFamily: "BentonSans Comp Black",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Register
                    </Typography>
                  </Button>

                  <Modal
                    closeButton
                    aria-labelledby="modal-title"
                    open={visible1}
                    onClose={closeHandler1}
                    css={{
                      backgroundColor: "rgb(247 241 241 / 88%)",
                      padding: "10px !important",
                      // width: "100vw",
                      //  height: "70vh",
                      shadow: "none",
                    }}
                  >
                    <Modal.Header>
                      <Text
                        id="modal-title"
                        size={18}
                        css={{ fontFamily: "Product Sans" }}
                      >
                        Are you sure you want to register ?
                      </Text>
                    </Modal.Header>
                    <Modal.Footer
                      css={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        auto
                        onPress={closeHandler1}
                        css={{
                          backgroundColor: "#C0000A",
                          borderRadius: "0.3rem !important",
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          color="white"
                          sx={{
                            fontWeight: "400",
                            fontFamily: "BentonSans Comp Black",
                            letterSpacing: "0.5px",
                          }}
                        >
                          No
                        </Typography>
                      </Button>
                      <Button
                        auto
                        css={{
                          backgroundColor: "#C0000A",
                          borderRadius: "0.3rem !important",
                        }}
                        onPress={checkAuth}
                      >
                        <Typography
                          variant="subtitle1"
                          color="white"
                          sx={{
                            fontWeight: "400",
                            fontFamily: "BentonSans Comp Black",
                            letterSpacing: "0.5px",
                          }}
                        >
                          Yes
                        </Typography>
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Modal.Body>
        <Modal.Footer
          css={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        ></Modal.Footer>
      </Modal>
    </Grid>
  );
};

export default ClubCard;
