import { createTheme } from "@mui/material/styles";
import { POSTER_SIZE_TO_PIXEL } from "../constants";

// Set custom variables types
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    //  remove the default
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;

    //  set new values
    fullHD: true;
    screen2K: true;
    screen4K: true;
  }

  interface Theme {
    poster_size: {
      fullHD: { width: number; height: number };
      screen2K: { width: number; height: number };
      screen4K: { width: number; height: number };
    };
  }

  interface ThemeOptions {
    poster_size?: {
      fullHD?: { width: number; height: number };
      screen2K?: { width: number; height: number };
      screen4K?: { width: number; height: number };
    };
  }
}

const theme = createTheme({
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        // Render once on Client side, Optimize for performance
        noSsr: true,
      },
    },
  },

  typography: {
    fontSize: 11,
    allVariants: {
      color: "#F5F5F1",
    },
  },

  palette: {
    mode: "dark",
    primary: {
      main: "#121211",
      light: "#221F1F",
      dark: "#121211",
      contrastText: "#F5F5F1",
    },
  },

  breakpoints: {
    values: {
      fullHD: 0,
      screen2K: 1920,
      screen4K: 2560,
    },
  },

  poster_size: {
    fullHD: POSTER_SIZE_TO_PIXEL["w92"],
    screen2K: POSTER_SIZE_TO_PIXEL["w154"],
    screen4K: POSTER_SIZE_TO_PIXEL["w185"],
  },
});

console.log("customizeTheme", theme);

export default theme;
