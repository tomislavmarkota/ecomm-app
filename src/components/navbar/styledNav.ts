import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  position: static;
  background-color: #232F3E;
  align-items: center;
  padding: 5px 10px;
  div{
    padding: 8px 9px;
    color: white;
    display: flex;
    align-items: center;
    border: 1px solid #232F3E;
    cursor: pointer;
    :hover{
      border: 1px solid;
    }
    span{
      margin-left: 8px;
      font-weight: bold;
    }
  }
  a{
    display: block;
    padding: 8px 9px;
    margin: 8px 0px;
    color: white;
    text-decoration: none;
    border: 1px solid #232F3E;
    :hover{
      border: 1px solid;
    }
    svg{
      display: none;
    }
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
`;
