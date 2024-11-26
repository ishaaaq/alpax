import React from "react";
import { StyledButton } from "./components/styledComponents/StyledComponents";
import NavBar from "./components/NavBar";
import { Container } from "@mui/material";
import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Projects from "./pages/Projects";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Services" element={<Services />} />
          <Route path="Contact Us" element={<ContactUs />} />
          <Route path="About Us" element={<AboutUs />} />
          <Route path="Projects" element={<Projects />} />
        </Routes>

        <Container disableGutters sx={{ bgcolor: "orange" }}></Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
