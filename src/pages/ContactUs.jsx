import React from "react";
import OtherPagesHero from "../components/OtherPagesHero";
import Form from "../components/Form";
import { Container, Stack } from "@mui/material";
import OfficeMap from "../components/OfficeMap";
import GetInTouch from "../components/GetInTouch";
import {
  Contact,
  Subtitle,
  Title,
} from "../components/styledComponents/StyledComponents";
import Footer from "../components/Footer";
const ContactUs = () => {
  return (
    <div>
      <OtherPagesHero>Contact Us</OtherPagesHero>
      <Container disableGutters>
        <GetInTouch />
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            justifyContent: "space-between",
            mt: "2rem",
          }}
        >
          <Form />
          <Stack
            direction={"column"}
            gap={"1.5rem"}
            sx={{
              mt: "2rem",
              pl: "1.5rem",
              height: "36.5rem",
              borderLeft: {
                xs: "none",
                md: "rgba(183, 183, 183, 1) 0.5px solid",
              },
            }}
          >
            <Stack
              direction={"column"}
              gap={0}
              sx={{
                width: "100%",
                height: "7.3rem",
                borderRadius: ".75rem",
                border: "rgba(0, 0, 0, 0.25) 0.5px solid",
                padding: "1rem",
                bgcolor: "white",
              }}
            >
              <Title>Head Office</Title>
              <Subtitle>Head office address</Subtitle>
              <Contact>+234 803 428 1549</Contact>
            </Stack>
            <OfficeMap />
          </Stack>
        </Stack>
        <Footer style={{ marginTop: "11rem" }} />
      </Container>
    </div>
  );
};

export default ContactUs;
