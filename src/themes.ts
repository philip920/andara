import { createTheme } from '@mui/material/styles';

export const defaultTheme = createTheme({
  palette: {
    text: {
      primary: "rgb(255, 255, 255)",
      secondary: "rgba(255, 255, 255, 0.7)"
    }
  },
  typography: {
    fontFamily: "Signika Negative",
    fontWeightLight: 300,
    fontWeightBold: 700
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "linear-gradient(180deg, #2A5859 0%, #124656 33.85%, #2C3B53 68.23%, #2D2C4B 100%);",
          minHeight: "100vh",
          borderRadius: 0
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      },
    },
  }
});