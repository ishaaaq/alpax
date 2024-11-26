import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#02182A",
    },
    secondary: {
      main: "#1261F9",
    },
    background: {
      default: "#f6f6f6",
    },
    text: {
      primary: "#333333",
    },
  },
  breakpoints: {
    values: {
      xs: 0, // Mobile
      sm: 600, // Tablet
      md: 900, // Desktop (small)
      lg: 1200, // Desktop (large)
      xl: 1536, // Extra large
    },
  },

  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

// components: {
//   MuiTypography: {
//     styleOverrides: {
//       root: {
//         fontSize: "1rem",
//         [theme.breakpoints.up("sm")]: {
//           fontSize: "1.2rem",
//         },
//         [theme.breakpoints.up("md")]: {
//           fontSize: "1.5rem",
//         },
//       },
//     },
//   },
// },

export default theme;
