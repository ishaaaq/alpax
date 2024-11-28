import { Box, Stack } from "@mui/material";
import React from "react";
import {
  SectionHeader,
  SectionSubHeading,
  SectionTag,
} from "./styledComponents/StyledComponents";
import WhatWeOfferCard from "./WhatWeOfferCard";
import theme from "../styles/theme";

const Works = () => {
  return (
    <Box
      sx={{
        mt: "4rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: {
          sm: "19.2rem",
          md: "28.8rem",
        },
        py: {
          md: "3.5rem",
          xs: ".5rem",
        },
        px: {
          md: "2.5rem",
          xs: ".5rem",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack direction={"column"} gap={".75rem"}>
          <SectionTag>Works</SectionTag>
          <SectionHeader>Case Studies</SectionHeader>
          <SectionSubHeading style={{ width: { md: "43rem", xs: "0rem" } }}>
            {" "}
            A short text that highlight companies success, make it descriptive.
          </SectionSubHeading>
        </Stack>
        <Stack
          direction={"row"}
          sx={{ width: "8rem", justifyContent: "space-between" }}
        >
          <Box
            sx={{
              bgcolor: theme.palette.secondary.main,
              borderRadius: "12px",
              width: "48px",
              height: "48px",
            }}
          ></Box>
          <Box
            sx={{
              bgcolor: theme.palette.secondary.main,
              borderRadius: "12px",
              width: "48px",
              height: "48px",
            }}
          ></Box>
        </Stack>
      </Box>
      <Stack
        direction={{ sm: "row", xs: "column" }}
        gap={"1.5rem"}
        sx={{
          width: "100%",
          mt: { xs: "1rem", md: "2rem" },
          alignItems: "center",
        }}
      >
        {[1, 2, 3].map((_, index) => (
          <WhatWeOfferCard key={index} />
        ))}
      </Stack>
    </Box>
  );
};

export default Works;
