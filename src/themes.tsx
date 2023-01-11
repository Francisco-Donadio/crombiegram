import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useThemeColorContext } from "./Context/ColorModeContext";

export enum themePalette {
  BG = "#000000",
  PINK = "#fc427b",
  WHITE = "#FFFFFF",
  GREEN = "#1abc9c",
  PURPLE = "#8e44ad",
  YELLOW = "#f1c40f",
  FONT_GLOBAL = "'Noto Sans JP', sans-serif",
}

const ThemeContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { mode } = useThemeColorContext();

  const theme = createTheme({
    palette: {
      //mode as "dark"
      mode: mode as "light",
      background: {
        default: themePalette.WHITE,
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeContext;
