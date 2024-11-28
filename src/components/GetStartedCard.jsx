import { Box, Stack } from "@mui/material";
import React from "react";
import theme from "../styles/theme";
import ellipse1 from "../../public/Ellipse1.png";
import ellipse2 from "../../public/Ellipse2.png";
import {
  SectionHeader,
  SectionSubHeading,
  StyledButton,
} from "./styledComponents/StyledComponents";
const GetStartedCard = () => {
  return (
    <Box
      sx={{
        bgcolor: theme.palette.primary.main,
        borderRadius: ".75rem",
        width: "100%",
        height: "22.5rem",
        position: "relative",
        mt: "9rem",
        pt: "3.5rem",
      }}
    >
      <Box
        component="img"
        src={ellipse2}
        alt="Bottom Image"
        sx={{
          position: "absolute",
          height: "auto",
          width: "17.5rem",
          bottom: 0,
        }}
      />

      <Box
        component="img"
        src={ellipse1}
        alt="Top Image"
        sx={{
          position: "absolute",
          bottom: 0,
          width: "13.5rem",
          height: "auto",
        }}
      />
      <Stack
        direction={"column"}
        gap={"3.5rem"}
        sx={{
          alignItems: "center",
          mx: "auto",
        }}
      >
        <Stack direction={"column"} gap={".5rem"} sx={{ alignItems: "center" }}>
          <SectionHeader style={{ color: "white" }}>
            Client Satisfaction Guaranteed
          </SectionHeader>
          <SectionSubHeading
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            short text that gives a bit of excitement to the user
          </SectionSubHeading>
        </Stack>
        <StyledButton>Get Started</StyledButton>
      </Stack>
    </Box>
  );
};

export default GetStartedCard;
