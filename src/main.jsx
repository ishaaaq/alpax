import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import theme from "./styles/theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
