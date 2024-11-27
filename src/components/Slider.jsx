import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import image from "../../public/bg.jpeg";
const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const slides = [
    { title: "Agriculture", image: image },
    { title: "Architecture", image: image },
    { title: "Industry", image: image },
    { title: "Agriculture", image: image },
    { title: "Architecture", image: image },
    { title: "Industry", image: image },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        textAlign: "center",
        mb: "1.5rem",
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box
        sx={{
          borderRadius: "8px",
          bgcolor: "rgba(0, 0, 0, 0.35)",
          padding: "8px",
          height: "2.25rem",
          width: {
            xs: "12.6rem", // 60% of the desktop width for mobile screens
            sm: "16.8rem", // 80% of the desktop width for tablet screens
            md: "21rem", // Desktop width
          },
          mx: "auto",
          mb: "6px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontWeight: 500,
            fontSize: ".875rem",
          }}
        >
          {slides[activeSlide].title}
        </Typography>
      </Box>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: "12.6rem", // 60% of the desktop width for mobile screens
                sm: "16.8rem", // 80% of the desktop width for tablet screens
                md: "21rem", // Desktop width
              },
              height: {
                xs: "7.02rem", // 60% of the desktop height for mobile screens
                sm: "9.36rem", // 80% of the desktop height for tablet screens
                md: "11.7rem", // Desktop height
              },
              position: "relative",

              borderRadius: "12px",
              filter: index === activeSlide ? "none" : "brightness(50%)",
              transition: "filter 0.5s ease-in-out",
              border:
                activeSlide === index && "6px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              key={index}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />

            {index !== activeSlide && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 1,
                }}
              />
            )}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSlider;
