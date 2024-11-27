import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ReasonToUseCard = () => {
  return (
    <Stack
      direction={"column"}
      sx={{
        bgcolor: "white",
        borderRadius: "12px",
        border: "rgba(0, 0, 0, 0.25) 0.5px solid",
        width: {
          md: "26.6rem",
          sm: "15.5rem",
        },
        height: {
          md: "9.9rem",
          sm: "9.6rem",
        },
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          width: "24px",
          height: "24px",
          borderRadius: "4px",
          bgcolor: "#D9D9D9",
        }}
      />
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: { md: "1rem", sm: ".875rem" },
          color: "black",
          mt: "1rem",
        }}
      >
        Reason To Use AEC
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: ".75rem",
          color: "#121212",
          mt: "0.6rem",
          overflow: "hidden",
        }}
      >
        Text that concisely describes the reason should be written here, it
        should have at most 3 lines of text.
      </Typography>
    </Stack>
  );
};

export default ReasonToUseCard;
