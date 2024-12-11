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
  maxWidth: "13.5rem",
}));

export const SectionTag = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: "7.1rem",
        width: "fit-content",
        height: "37px",
        bgcolor: "#E6ECF1",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        px: ".75rem",
      }}
    >
      <Typography
        sx={{
          color: "#121212",
          fontWeight: 500,
          fontSize: { xs: ".75rem", sm: ".875rem" },
          position: "relative",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export const SectionHeader = styled(Typography)({
  fontWeight: 500,
  fontSize: "2rem",
  color: "black",
});

export const SectionSubHeading = styled(Typography)({
  fontWeight: 400,
  fontSize: ".75rem",
  color: "#121212",
  width: {
    xs: "26.4rem",
    sm: "27rem",
  },
});
