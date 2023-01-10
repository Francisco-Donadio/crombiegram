import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export enum themePalette {
  BG = "#000000",
  PINK = "#fc427b",
  WHITE = "#FFFFFF",
  GREEN = "#1abc9c",
  PURPLE = "#8e44ad",
  YELLOW = "#f1c40f",
  FONT_GLOBAL = "'Noto Sans JP', sans-serif",
}

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: themePalette.BG,
    },
    primary: {
      main: themePalette.PINK,
    },
    secondary: {
      main: themePalette.GREEN,
    },
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL,
    fontSize: 18,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          color: themePalette.WHITE,
          width: "150px",
        },
      },
    },
  },
});

const ThemeContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeContext;
