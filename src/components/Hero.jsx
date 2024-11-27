import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Slider from "./Slider";
const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url("../../public/heroBgPH.jpeg")`,
        backgroundSize: "cover",
        borderRadius: ".75rem",
        height: { xs: "20rem", sm: "30rem", md: "40rem" },
      }}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          width: "100%",
          height: "100%",
          borderRadius: ".75rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Stack
          direction={"column"}
          gap={"0.8rem"}
          sx={{ alignItems: "center", mt: "88px" }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Your Vision, Our Expertise
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "1.125rem",
              maxWidth: "707px",
              textAlign: "center",
            }}
          >
            Your trusted partner for engineering excellence. We deliver
            innovative solutions that meet your unique needs.
          </Typography>
        </Stack>
        <Slider />
      </div>
    </Box>
  );
};

export default Hero;
