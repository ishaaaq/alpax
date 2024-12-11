import { Box, Button, IconButton, Stack } from "@mui/material";
import React, { useRef } from "react";
import {
  SectionHeader,
  SectionSubHeading,
  SectionTag,
} from "./styledComponents/StyledComponents";
import WhatWeOfferCard from "./WhatWeOfferCard";
import theme from "../styles/theme";
import DesktopSlider from "./ReusableSlider";
import ReusableSlider from "./ReusableSlider";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import services from "../data";
const Works = () => {
  const sliderRef = useRef(null);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

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
      <Stack
        direction={{ sm: "row", xs: "column" }}
        gap={"1.5rem"}
        sx={{
          width: "100%",
          mt: { xs: "1rem", md: "2rem" },
          alignItems: "center",
          display: { xs: "flex", sm: "none" },
        }}
      >
        {services.slice(0, 3).map((service, index) => (
          <WhatWeOfferCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </Stack>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          mt: "2rem",
        }}
      >
        <ReusableSlider ref={sliderRef}>
          {services.map((service, index) => (
            <WhatWeOfferCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </ReusableSlider>
      </Box>
    </Box>
  );
};

export default Works;
