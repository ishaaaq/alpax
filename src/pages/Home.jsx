import React from "react";
import Hero from "../components/Hero";
import WhatWeOfferCard from "../components/WhatWeOfferCard";
import WhatWeOfferSection from "../components/WhatWeOfferSection";
import { Container } from "@mui/material";
import WhyAlpax from "../components/WhyAlpax";
import Works from "../components/Works";
import GetStartedCard from "../components/GetStartedCard";

const Home = () => {
  return (
    <>
      <Container
        sx={{
          width: {
            xs: "34.6rem",
            sm: "100%",
          },
        }}
      >
        <Hero />
        <WhatWeOfferSection />
        <WhyAlpax />
        <Works />
        <GetStartedCard />
      </Container>
    </>
  );
};

export default Home;
