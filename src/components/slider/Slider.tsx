import React, { useState } from "react";
import { slideData } from "./slideData";
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from "react-icons/bs";
import { StyledSlider } from "./styledSlider";


const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = slideData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  return (
    <StyledSlider>
      <BsFillArrowLeftSquareFill className="left-arrow" onClick={prevSlide} />
      <BsFillArrowRightSquareFill className="right-arrow" onClick={nextSlide} />
      {slideData.map((slide, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && <img src={slide.image} alt={slide.desc} />}
        </div>
      ))}
    </StyledSlider>
  );
};

export default Slider;
