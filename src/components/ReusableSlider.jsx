import React, { forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

// Forwarding the ref to expose slider methods
const ReusableSlider = forwardRef(({ children }, ref) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
    responsive: [
      {
        breakpoint: 1024, // Tablet and smaller screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider ref={ref} {...settings} style={{ marginLeft: "-22px" }}>
      {children.map((child, index) => (
        <Box key={index} sx={{}}>
          {child}
        </Box>
      ))}
    </Slider>
  );
});

export default ReusableSlider;
