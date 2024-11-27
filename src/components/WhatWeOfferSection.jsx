import { Box, Container, Grid, Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import {
  SectionHeader,
  SectionSubHeading,
  SectionTag,
  StyledButton,
} from "./styledComponents/StyledComponents";
import WhatWeOfferCard from "./WhatWeOfferCard";

const WhatWeOfferSection = () => {
  return (
    <Stack
      direction={{
        xs: "column",
        md: "row",
      }}
      sx={{
        justifyContent: { md: "space-between", xs: "center" },
        alignContent: "center",
        maxWidth: "lg",
        mt: "4rem",
        mx: "auto",
      }}
    >
      <Stack
        direction={{
          xs: "row",
          md: "column",
        }}
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Stack direction={"column"} gap={".75rem"}>
          <SectionTag>Services</SectionTag>
          <SectionHeader>What We Offer</SectionHeader>
          <SectionSubHeading>
            AEC (Architecture Engineering Consultancy) Nigerian company
            established to provide first-class professional specialist
            consultancy services to corporate and individual clients.
          </SectionSubHeading>
        </Stack>
        <Box sx={{ maxWidth: "217px", mt: "auto" }}>
          <StyledButton>See more solution</StyledButton>
        </Box>
      </Stack>

      <Stack
        direction="row"
        flexWrap="wrap"
        gap={"1rem"}
        sx={{
          justifyContent: "center",

          mt: { xs: "1rem", md: "0rem" },
        }}
      >
        {[1, 2, 3, 4].map((_, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",

              flex: "1 1 calc(50% - 16px)", // Two cards per row, with spacing
              maxWidth: "calc(50% - 16px)", // Adjusts for spacing
              minWidth: { xs: "100%", sm: "calc(50% - 16px)" }, // Single card per row on small screens

              mt: { xs: "0rem", sm: "none" },
              //   justifyContent: { xs: "center", sm: "none" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <WhatWeOfferCard />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default WhatWeOfferSection;
