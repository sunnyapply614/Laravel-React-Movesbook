import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSlider.css";

const HeroSection = () => {
  const slides = [
    {
      image: "/assets/img/dashboard/1489453141.jpg",
    },
    {
      image: "/assets/img/dashboard/1489453237.jpg",
    },
    {
      image: "/assets/img/dashboard/1489453281.jpg",
    },
    {
      image: "/assets/img/dashboard/1489453320.jpg",
    },
    {
      image: "/assets/img/dashboard/1489453359.jpg",
    },
    {
      image: "/assets/img/dashboard/1489453394.jpg",
    },
    {
      image: "/assets/img/dashboard/1489453427.jpg",
    },
    {
      image: "/assets/img/dashboard/1489453467.jpg",
    },
    {
      image: "/assets/img/dashboard/1489453664.jpg",
    },
    {
      image: "/assets/img/dashboard/1489453735.jpg",
    },
    {
      image: "/assets/img/dashboard/1489453779.jpg",
    },
    {
      image: "/assets/img/dashboard/1489453828.jpg",
    },
    {
      image: "/assets/img/dashboard/1489453866.jpg",
    },
    {
      image: "/assets/img/dashboard/1489455347.jpg",
    },
    {
      image: "/assets/img/dashboard/1494418657.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // enable next/previous arrows
  };

  return (
    <section className="hero-slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="hero-slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="hero-image" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
