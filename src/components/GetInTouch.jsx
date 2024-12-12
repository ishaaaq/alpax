import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import {
  Contact,
  SectionHeader,
  SectionSubHeading,
  SectionTag,
  Subtitle,
  Title,
} from "./styledComponents/StyledComponents";

const Card = ({ title, subtitle, contact }) => {
  return (
    <Stack
      direction={"column"}
      gap={0}
      sx={{
        width: "26.6rem",
        height: "9.8rem",
        borderRadius: ".75rem",
        border: "rgba(0, 0, 0, 0.25) 0.5px solid",
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          width: "2rem",
          height: "2rem",
          borderRadius: "4px",
          border: "black 1px solid",
          mb: ".5rem",
        }}
      />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Contact>
        <u> {contact} </u>
      </Contact>
    </Stack>
  );
};

const GetInTouch = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: {
          xs: "none",
          sm: "12px",
        },
        mt: "4rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: {
          xs: "44.5rem",
          sm: "26.7rem",
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
        <SectionTag>Get in touch</SectionTag>
        <SectionHeader>Let's Chat, Reach Out To Us</SectionHeader>
        <SectionSubHeading style={{ width: { md: "43rem", xs: "0rem" } }}>
          {" "}
          Have questions or feedback? Send us a message, call or visit us.
        </SectionSubHeading>
      </Stack>
      <Stack direction={{ xs: "column", sm: "row" }} gap={"1.5rem"}>
        <Card
          title={"Call Us"}
          subtitle="Mon - Fri from 8am to 5pm."
          contact="+234 803 428 1549"
        />
        <Card
          title={"Chat With Us"}
          subtitle="Message us via mail"
          contact="alpaxnig@gmail.com"
        />
        <Card
          title={"Visit Us"}
          subtitle={"Visit Our head office"}
          contact="No. 28, Arusha Crescent,
Zone 1, Wuse, Abuja, Nigeria"
        />
      </Stack>
    </Box>
  );
};

export default GetInTouch;
