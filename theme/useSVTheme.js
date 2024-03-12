import { createTheme, responsiveFontSizes } from "@mui/material";
import paletteOptions from "./options/palette";
import componentsOptions from "./options/components";
import typographyOptions from "./options/typography";

const useSVTheme = () => {
  const theme = createTheme({
    components: componentsOptions,
    palette: paletteOptions,
    typography: typographyOptions,
    breakpoints: {
      values: {
        xs: 0,
        sm: 832,
        md: 1000,
        lg: 1070,
        xl: 1536,
      },
    },
  });

  return responsiveFontSizes(theme);
};

export default useSVTheme;
