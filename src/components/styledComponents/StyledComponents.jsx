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

export const SectionTag = ({ props }) => {
  return (
    <Box
      sx={{
        width: "83px",
        height: "37px",
        bgcolor: "#E6ECF1",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
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
        {props}
      </Typography>
    </Box>
  );
};

export const SectionHeader = styled(Typography)({
  fontWeight: 500,
  fontSize: { xs: "1.5rem", sm: "2rem" },
  color: "black",
});

export const SectionSubHeading = styled(Typography)({
  fontWeight: 400,
  fontSize: { md: ".75rem", sm: ".875" },
  color: "#121212",
  width: "27rem",
});
