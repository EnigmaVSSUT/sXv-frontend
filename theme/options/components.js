const componentsOptions = {
  MuiButton: {
    defaultProps: {
      disableRipple: true,
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        width: "fit-content",
        borderRadius: "0.15rem !important",
        fontFamily: "Righteous",
        fontWeight: 400,
      },
    },
  },
  MuiTab: {
    defaultProps: {
      disableRipple: true,
    },
  },
};

export default componentsOptions;
