import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "#ffffff",
  borderRadius: ".75rem",
  padding: ".75rem 1.25rem",
  fontSize: "1rem",
  fontWeight: 500,
  height: "44px",
  textTransform: "none",
}));
