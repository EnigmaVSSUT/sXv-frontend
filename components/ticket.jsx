import { Button, Stack, TextField, Typography } from "@mui/material";
import { borderRadius, Box } from "@mui/system";
import { useRef, useState } from "react";
import React from "react";
import ReactToPrint from "react-to-print";
import svlogo from "/pictures/svlogo.png";
import vssutlogo from "/pictures/vssut_logo.png";
import Image from "next/image";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

const Ticket = () => {
  // const handleDownload = useReactToPrint({
  //   onPrintError: (error) => console.log(error),
  //   content: () => ref.current,
  //   removeAfterPrint: true,
  //   print: async (printIframe) => {
  //     const document = printIframe.contentDocument;
  //     if (document) {
  //       const html = document.getElementsByTagName("html")[0];
  //       console.log(html);
  //       const exporter = new Html2Pdf(html);
  //       await exporter.getPdf(true);
  //     }
  //   },
  // });

  const [image, setImage] = useState(null);
  //   const handleGeneratePdf1 = () => {
  //   html2canvas(ref.current,{backgroundColor:null}).then(function (canvas) {
  //     var img = canvas.toDataURL("image/png");
  //     var doc = new jsPDF({
  //       orientation: "landscape",
  //     });
  //     doc.addImage(img, 'PNG', 0, 0,298,210);
  //     doc.save('Ticket.pdf');
  // });
  //   }

  const [file, setFile] = useState();
  function handleChange(e) {
    setImage(e.target.files[0]);
    // console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const ref = useRef();

  if (image) {
    var shouldPrint = true;
  } else {
    shouldPrint = false;
  }
  // const handleGeneratePdf = () => {
  // 	const doc = new jsPDF({
  //     orientation: "landscape",
  //   });

  // 	// Adding the fonts.
  // 	doc.setFont('Product sans');

  // 	doc.html(ref.current, {
  // 		async callback(doc) {
  // 		 doc.save('Ticket');
  // 		},
  //     // margin: [10, 10, 10, 10],
  //       autoPaging: 'text',
  //       x: -14,
  //       y: 7,
  //       width: 325, //target width in the PDF document
  //       windowWidth: 540,
  //       windowHeight:200

  // 	});
  // };
  return (
    <>
      <Box
        width="fit-content"
        backgroundColor="#D61513"
        borderRadius="10px"
        margin="0 auto"
        padding="15px"
        paddingLeft={{ xs: "10px", sm: "40px" }}
        paddingRight={{ xs: "10px", sm: "40px" }}
        ref={ref}
        sx={{
          backgroundImage: `url(${svlogo.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundBlendMode: "soft-light",
        }}
      >
        <Stack
          direction="row"
          display="flex"
          justifyContent="space-between"
          alignaItems="center"
        >
          <Typography
            variant="h4"
            sx={{
              textDecoration: "underline",
              color: "white",
              padding: "10px",
            }}
          >
            FEST PASS
          </Typography>
          <Typography variant="h4" textAlign="center">
            <Image src={vssutlogo} height={80} width={80}></Image>
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                position: "relative",
                top: "85px",
                opacity: "0.8",
                color: "#ead6d6bf",
                // fontSize:"1.2rem"
              }}
            >
              #844
            </Typography>
            <Box
              sx={{
                margin: "10px",
                height: 125,
                width: 125,
                borderRadius: "50%",
                border: "1px solid #c0c0c0",
              }}
            >
              <img
                src={file}
                height="125px"
                width="125px"
                style={{ borderRadius: "50%" }}
              />
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="space-between"
            spacing={1}
            padding="10px"
          >
            <Stack
              direction="row"
              spacing={1}
              display="flex"
              alignItems="center"
            >
              <Typography
                sx={{
                  color: "white",
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              >
                NAME:
              </Typography>
              <TextField
                id="name"
                size="small"
                variant="outlined"
                value="Rohit Kumar"
                //  {name} to be used
                sx={{
                  background: "#f3eee8",
                  borderRadius: "4px",
                }}
                aria-readonly
              />
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              display="flex"
              alignItems="center"
            >
              <Typography
                sx={{
                  color: "white",
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              >
                COLLEGE:
              </Typography>
              <TextField
                id="college"
                size="small"
                variant="outlined"
                value="VSSUT"
                //  {college} to be used
                sx={{
                  background: "#f3eee8",
                  borderRadius: "4px",
                }}
                aria-readonly
              />
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              display="flex"
              alignItems="center"
            >
              <Typography
                sx={{
                  color: "white",
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              >
                Branch:
              </Typography>
              <TextField
                id="branch"
                size="small"
                variant="outlined"
                value="ETC"
                //  {branch} to be used
                sx={{
                  background: "#f3eee8",
                  borderRadius: "4px",
                }}
                aria-readonly
              />
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              display="flex"
              alignItems="center"
            >
              <Typography
                sx={{
                  color: "white",
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              >
                Year:
              </Typography>
              <TextField
                id="year"
                size="small"
                variant="outlined"
                value="2nd"
                //  {year} to be used
                sx={{
                  background: "#f3eee8",
                  borderRadius: "4px",
                }}
                aria-readonly
              />
            </Stack>
          </Stack>
          {/* </Stack> */}
        </Stack>
      </Box>
      <Typography sx={{ color: "#343131" }}>
        Please upload your clear photo as it will be used for verification
        purpose
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button variant="contained" component="label">
          Upload Image
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            hidden
            required
          />
        </Button>
        {shouldPrint && (
          <ReactToPrint
            trigger={() => (
              <Button variant="contained">Generate & Print</Button>
            )}
            content={() => ref.current}
          />
        )}
      </Box>
    </>
  );
};

export default Ticket;
