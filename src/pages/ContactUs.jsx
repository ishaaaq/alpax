import React from "react";
import OtherPagesHero from "../components/OtherPagesHero";
import Form from "../components/Form";
import { Stack } from "@mui/material";
import OfficeMap from "../components/OfficeMap";
const ContactUs = () => {
  return (
    <div>
      <OtherPagesHero>Contact Us</OtherPagesHero>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Form />
        <OfficeMap />
      </Stack>
    </div>
  );
};

export default ContactUs;
