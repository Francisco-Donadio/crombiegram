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
      mode: mode as "dark",
      primary: {
        main: themePalette.PINK,
      },
      secondary: {
        main: themePalette.GREEN,
      },
      text: {
        primary: mode == "dark" ? themePalette.WHITE : themePalette.BG,
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
            color: mode == "dark" ? themePalette.WHITE : themePalette.BG,
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
