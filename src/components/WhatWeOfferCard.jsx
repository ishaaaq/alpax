import React from "react";
import image from "../../public/bg.jpeg";
import { Box, Stack, Typography } from "@mui/material";
const WhatWeOfferCard = () => {
  return (
    <Stack
      direction="column"
      gap="1rem"
      sx={{
        width: {
          xs: "29rem",
          sm: "21rem",
          md: "21rem",
        },
        height: "20rem",
      }}
    >
      <Box
        component="img"
        src={image}
        alt="services"
        sx={{
          width: "100%",
          height: {
            xs: "12rem",
            sm: "16rem",
            md: "18rem",
          },
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
      <Stack direction={"row"} gap={".5rem"}>
        <Box sx={{ bgcolor: "#D9D9D9", width: "32px", height: "32px" }}></Box>
        <Typography
          sx={{ fontWeight: 600, fontSize: "1rem", color: "black", my: "auto" }}
        >
          Service Title
        </Typography>
      </Stack>
      <Typography
        sx={{ fontWeight: 400, fontSize: ".75rem", color: "#121212" }}
      >
        Text that concisely describes the services should be written here, it
        should have at most 4 lines of text, that way users can quickly glance
        through and get the concept.
      </Typography>
    </Stack>
  );
};

export default WhatWeOfferCard;
