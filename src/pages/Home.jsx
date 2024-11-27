import React from "react";
import Hero from "../components/Hero";
import WhatWeOfferCard from "../components/WhatWeOfferCard";
import WhatWeOfferSection from "../components/WhatWeOfferSection";
import { Container } from "@mui/material";

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
      </Container>
    </>
  );
};

export default Home;
