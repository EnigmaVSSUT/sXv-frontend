import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import useSVTheme from "./useSVTheme";

const SVTheme = ({ children }) => {
  const [mode, setMode] = useState("light");
  const theme = useSVTheme(mode);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default SVTheme;
