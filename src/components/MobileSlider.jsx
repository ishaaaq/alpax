import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MobileSlider = ({ children }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2, // Show 1 full slide + a bit of the next
    slidesToScroll: 1,
    arrows: false,
    swipe: true, // Enable swipe navigation
    responsive: [
      {
        breakpoint: 768, // Adjust settings for mobile view
        settings: {
          slidesToShow: 1.2, // Adjust width for smaller screens
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {children.map((child, index) => (
        <div key={index} style={{ padding: "0 5px" }}>
          {child}
        </div>
      ))}
    </Slider>
  );
};

export default MobileSlider;
