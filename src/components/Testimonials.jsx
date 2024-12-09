import { Box, Button, IconButton, Stack } from "@mui/material";
import React, { useRef } from "react";
import {
  SectionHeader,
  SectionSubHeading,
  SectionTag,
} from "./styledComponents/StyledComponents";
import WhatWeOfferCard from "./WhatWeOfferCard";
import theme from "../styles/theme";
import ReusableSlider from "./ReusableSlider";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import MobileSlider from "./MobileSlider";
import ReasonToUseCard from "./ReasonToUseCard";
const Testimonials = () => {
  const sliderRef = useRef(null);
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
          <SectionTag>Testimonials</SectionTag>
          <SectionHeader>What Our Customers Say About Us</SectionHeader>
          <SectionSubHeading style={{ width: { md: "43rem", xs: "0rem" } }}>
            {" "}
            A short text that highlight companies success, make it descriptive.
          </SectionSubHeading>
        </Stack>
        <Stack
          direction={"row"}
          sx={{ width: "8rem", justifyContent: "space-between" }}
        >
          <Button
            sx={{
              bgcolor: theme.palette.secondary.main,
              borderRadius: "12px",
              height: "2.5rem",
              width: "3rem",
              minWidth: "2.5rem",
              display: { xs: "none", sm: "block" },
              color: "white",
            }}
            onClick={() => sliderRef.current.slickPrev()}
          >
            <NavigateBeforeIcon />
          </Button>

          <Button
            sx={{
              bgcolor: theme.palette.secondary.main,
              borderRadius: "12px",
              height: "2.5rem",
              width: "3rem",
              minWidth: "2.5rem",
              display: { xs: "none", sm: "block" },
              color: "white",
            }}
            onClick={() => sliderRef.current.slickNext()}
          >
            <NavigateNextIcon />
          </Button>
        </Stack>
      </Box>
      {/* <Stack
        direction={{ sm: "row", xs: "column" }}
        gap={"1.5rem"}
        sx={{
          width: "100%",
          mt: { xs: "1rem", md: "2rem" },
          alignItems: "center",
          display: { xs: "flex", sm: "none" },
        }}
      >
        {[1, 2, 3].map((_, index) => (
          <WhatWeOfferCard key={index} />
        ))}
      </Stack> */}
      <Box sx={{ display: { xs: "inline", sm: "none" } }}>
        <MobileSlider>
          {[1, 2, 3].map((_, index) => (
            <ReasonToUseCard key={index} />
          ))}
        </MobileSlider>
      </Box>
      <Stack
        direction={"row"}
        gap={"1.5rem"}
        sx={{
          display: { xs: "none", sm: "block" },
          mt: "2rem",
        }}
      >
        <ReusableSlider ref={sliderRef}>
          {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
            <ReasonToUseCard key={index} />
          ))}
        </ReusableSlider>
      </Stack>
    </Box>
  );
};

export default Testimonials;
