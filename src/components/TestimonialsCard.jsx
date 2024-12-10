import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const TestimonialsCard = () => {
  return (
    <Stack
      direction={"column"}
      sx={{
        bgcolor: "white",
        borderRadius: "12px",
        border: "rgba(0, 0, 0, 0.25) 0.5px solid",
        justifyContent: "space-between",
        height: {
          md: "11.5rem",
          xs: "12.6rem",
        },
        padding: "1rem",
      }}
    >
      <Typography
        sx={{ fontWeight: 400, fontSize: ".75rem", color: "#121212" }}
      >
        Write the testimonials of the customer, the text should be exciting to
        spark interest in the user, the testimonial text should span at most 4
        lines Last line
      </Typography>
      <Stack direction={"row"} gap={".5rem"}>
        {/*The following box will be changed to an icon once the icon is specified */}
        <Box
          sx={{
            width: "3rem",
            height: "3rem",
            borderRadius: ".25rem",
            bgcolor: "#D9D9D9",
          }}
        ></Box>
        <Stack direction={"column"} gap={".25rem"}>
          <Typography sx={{ fontWeight: 500, fontSize: ".875rem" }}>
            Name
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: ".75rem" }}>
            Company
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TestimonialsCard;
