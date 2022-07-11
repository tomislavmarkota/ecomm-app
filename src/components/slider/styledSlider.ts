import styled from "styled-components";

export const StyledSlider = styled.section`
  padding: 50px 20px 0px 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1250px;
  margin: 0px auto 50px auto;
  text-align: center;
  z-index: 10;
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
  svg {
    font-size: 3rem;
    color: #fff;
    transition: transform .7s ease;
    :hover{
      transform: scale(1.2);
    }
  }
  .left-arrow {
    position: absolute;
    top: 50%;
    left: 0%;
    cursor: pointer;
    user-select: none;
    z-index: 5;
    @media screen and (max-width: 675px) {
      top: 90%;
    }
  }
  .right-arrow {
    position: absolute;
    top: 50%;
    right: 0%;
    cursor: pointer;
    user-select: none;
    z-index: 5;
    @media screen and (max-width: 675px) {
      top: 90%;
    }
  }

  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
    width: 100%;
  }
`;
