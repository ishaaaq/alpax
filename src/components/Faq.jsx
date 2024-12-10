import { Box, Stack, styled, Typography } from "@mui/material";
import { SectionTag } from "./styledComponents/StyledComponents";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const accordionStyles = {
  mb: "1rem",
  border: "0.5px solid #00000040",
  borderRadius: "12px",
  backgroundColor: "white",
  boxShadow: "none",
  height: "5.2rem",
  "&:before": { display: "none" },
  "&.Mui-expanded": {
    height: "auto",
  },
};

const summaryStyles = {
  display: "flex",
  mt: "1rem",
  fontWeight: 400,
  fontSize: ".875rem",
  color: "black",
};

const detailsStyles = {
  padding: "16px",
  borderTop: "0.5px solid #00000040",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  color: "#121212",
  fontWeight: 400,
  fontSize: ".75rem",
};

const Faq = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
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
      <Stack
        direction={"column"}
        gap={".5rem"}
        sx={{ alignItems: "center", mb: "2rem" }}
      >
        <SectionTag>Your Answer</SectionTag>
        <Typography sx={{ fontWeight: 500, fontSize: "2rem" }}>
          Frequently Asked Questions
        </Typography>
      </Stack>
      <Accordion sx={accordionStyles}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={summaryStyles}
        >
          Question here
        </AccordionSummary>
        <AccordionDetails sx={detailsStyles}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordionStyles}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={summaryStyles}
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails sx={detailsStyles}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
