import styled from "styled-components";

export const MainWrapper = styled.div`
  background: #eaeded;
`;

export const CategoryContainer = styled.div`
  display: flex;
  margin: auto;
  max-width: 1000px;
  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 30px;
  @media screen and (max-width: 950px) {
    text-align: center;
    padding: 0 50px;
    margin: 0;
  }
  > div {
    background: white;
    padding: 20px 20px 15px 20px;
    width: 100%;
    margin: 20px auto;
    a{
        display: block;
        text-decoration: none;
        margin: 15px 0;
        color: #007185;
        :hover{
            color: #C7511F;
            text-decoration: underline;
        }
    }
    img {
      max-width: 100%;
      height: 400px;
      object-fit: cover;
    }
  }
`;
