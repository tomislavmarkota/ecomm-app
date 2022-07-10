import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  max-width: 1000px;
  margin: 40px auto;
  td {
    width: 35%;
    text-align: center;
    border-bottom: 1px solid #ececec;
    padding: 10px;
    img {
      width: 25%;
 
    }
    p{
        font-size: .8rem;
        color: grey;
        cursor: pointer;
        width: fit-content;
        margin: 10px auto;
        :hover{
            text-decoration: underline;
        }
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
      width: 35px;
      height: 35px;
      font-size: 1rem;
      padding: 0;
      border: 1px solid #ececec;
      :hover {
        border: 1px solid #232f3e;
        background: #232f3e;
        color: white;
      }
    }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border: 1px solid #ececec;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
