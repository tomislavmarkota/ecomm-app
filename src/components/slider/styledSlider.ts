import styled from "styled-components";

export const StyledSlider = styled.section`
  padding: 50px 20px 0px 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  text-align: center;
  z-index: 10;
  img {
    width: 100%;
    height: 480px;
    object-fit: cover;
  }
  svg {
    font-size: 3rem;
    color: #232F3E;
  }
  .left-arrow {
    position: absolute;
    top: 50%;
    left: 12%;
    cursor: pointer;
    user-select: none;
    z-index: 5;
  }
  .right-arrow {
    position: absolute;
    top: 50%;
    right: 12%;
    cursor: pointer;
    user-select: none;
    z-index: 5;
  }

  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }
`;
