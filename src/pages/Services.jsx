import React from "react";
import OtherPagesHero from "../components/OtherPagesHero";
import WhatWeOfferCard from "../components/WhatWeOfferCard";
import { Box, Container, Grid2, Stack } from "@mui/material";
import services from "../data";
import {
  SectionHeader,
  SectionSubHeading,
  SectionTag,
  StyledButton,
} from "../components/styledComponents/StyledComponents";
import GetStartedCard from "../components/GetStartedCard";
import Footer from "../components/Footer";
const Services = () => {
  return (
    <>
      <OtherPagesHero>Our Services</OtherPagesHero>
      <Container
        sx={{
          mt: "2rem",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Stack direction={"column"} gap={".75rem"}>
            <SectionTag>Services</SectionTag>
            <SectionHeader sx={{ textAlign: "left" }}>
              What We Offer
            </SectionHeader>
            <SectionSubHeading sx={{ maxWidth: "26.4rem" }}>
              AEC (Architecture Engineering Consultancy) Nigerian company
              established to provide first-class professional specialist
              consultancy services to corporate and individual clients.
            </SectionSubHeading>
          </Stack>
          <Box
            sx={{
              maxWidth: "217px",
              mt: "auto",
              display: { xs: "none", sm: "block" },
            }}
          >
            <StyledButton>Contact Us</StyledButton>
          </Box>
        </Stack>
        <Box
          sx={{
            px: 0,
            py: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            {services.map(({ title, description }, index) => (
              <Box
                key={index}
                sx={{
                  flex: "1 1 calc(33.33% - 1rem)", // Three cards per row on large screens
                  maxWidth: "calc(33.33% - 1rem)",
                  minWidth: {
                    xs: "100%",
                    sm: "calc(50% - 1rem)",
                    md: "calc(33.33% - 1rem)",
                  }, // Single card per row on mobile, two on tablet
                }}
              >
                <WhatWeOfferCard title={title} description={description} />
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            justifyContent: "center",
            mb: "2rem",
          }}
        >
          <StyledButton sx={{ width: "100%" }}>Contact Us</StyledButton>
        </Box>
        <GetStartedCard />
        <Footer />
      </Container>
    </>
  );
};

export default Services;
