import { Box, Container, Typography } from "@mui/material";
import React from "react";
//image will be passed as prop later
const OtherPagesHero = ({ children }) => {
  return (
    <Container disableGutters>
      <Box
        sx={{
          backgroundImage: `url("../../public/secondHero.jpeg")`,
          backgroundSize: "cover",
          borderRadius: ".75rem",
          height: { /* xs: "20rem", sm: "30rem",*/ md: "22.5rem" },
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
          <Typography
            sx={{ fontWeight: 700, fontSize: "2.5rem", textAlign: "center" }}
          >
            {children}
          </Typography>
        </div>
      </Box>
    </Container>
  );
};

export default OtherPagesHero;
