import styled from "styled-components";

export const StyleSidebarWrapper = styled.div`
  width: 400px;
  height: 100%;
  background-color: #ffffff;
  
  h2 {
    padding: 10px 20px;
  }
  a {
    padding: 12px;
    color: #111;
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    text-decoration: none;
    :hover {
    background-color: #eaeded;
  }
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`;
