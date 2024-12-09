import { Box, Stack } from "@mui/material";
import React from "react";
import {
  SectionHeader,
  SectionSubHeading,
  SectionTag,
} from "./styledComponents/StyledComponents";
import ReasonToUseCard from "./ReasonToUseCard";
import MobileSlider from "./MobileSlider";

const WhyAlpax = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: "12px",
        mt: "4rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: {
          sm: "21.2rem",
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
      <Stack direction={"column"} gap={".75rem"}>
        <SectionTag>Why Alpax</SectionTag>
        <SectionHeader>Tailored Solutions For Your Needs</SectionHeader>
        <SectionSubHeading style={{ width: { md: "43rem", xs: "0rem" } }}>
          {" "}
          We work closely with you to understand your unique requirements and
          deliver results.
        </SectionSubHeading>
      </Stack>
      <Stack
        direction={{ sm: "row" }}
        gap={"1.5rem"}
        sx={{
          width: "100%",
          mt: { xs: "1rem", md: "0rem" },
          display: { xs: "none", sm: "flex" },
        }}
      >
        {[1, 2, 3].map((_, index) => (
          <ReasonToUseCard key={index} />
        ))}
      </Stack>
      <Box sx={{ display: { xs: "inline", sm: "none" } }}>
        <MobileSlider>
          {[1, 2, 3].map((_, index) => (
            <ReasonToUseCard key={index} />
          ))}
        </MobileSlider>
      </Box>
    </Box>
  );
};

export default WhyAlpax;
