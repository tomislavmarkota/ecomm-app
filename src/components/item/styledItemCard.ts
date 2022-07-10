import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  width: 80%;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
  text-align: center;
  justify-content: center;
`;

export const StyledCard = styled.div`
  width: 300px;
  margin: 20px;
  padding: 10px;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: white;
  img {
    max-width: 100%;
    height: 200px;
    object-fit: cover;
  }
  h5 {
    height: 50px;
    line-height: 24px;
    font-size: 1rem;
    overflow: hidden;
  }
  span {
    font-size: 1.7rem;
    font-weight: bold;
  }
  button {
    width: 100%;
    margin-top: 8px;
    height: 30px;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    :hover{
      background-color: #232F3E;
      color: white;
    }
  }
`;
