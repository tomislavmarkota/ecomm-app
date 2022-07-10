import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  position: fixed;
  background-color: #232f3e;
  align-items: center;
  padding: 5px 10px;
  width: 100%;
  div {
    padding: 8px 9px;
    color: white;
    display: flex;
    align-items: center;
    border: 1px solid #232f3e;
    cursor: pointer;
    :hover {
      border: 1px solid;
    }
    span {
      margin-left: 8px;
      font-weight: bold;
    }
  }
  a {
    display: block;
    padding: 8px 9px;
    margin: 8px 0px;
    color: white;
    text-decoration: none;
    border: 1px solid #232f3e;
    :hover {
      border: 1px solid;
    }
    svg {
      display: none;
    }
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
`;

export const CartIconContainer = styled.div`
  display: flex;
  justify-content: end;
  flex-grow: 1;
  span{
    position: absolute;
    line-height: 20px;
    text-align: center;
    top: -2px;
    right: 10px;
    font-size: .7rem;
    width: 20px;
    height: 20px;
    background-color: orange;
    border-radius: 50%;
  }
  svg {
    cursor: pointer;
    color: white;
    font-size: 1.4rem;
    margin-right: 10px;
  }
  :hover {
    border: 1px solid #232f3e !important;
    cursor: auto;
  }
`;
