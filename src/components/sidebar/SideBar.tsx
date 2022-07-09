import React from "react";
import { StyleSidebarWrapper, Wrapper, Overlay } from "./styledSidebar";
import { useAppDispatch, useAppSelector } from "../../hooks";
//components
import NavItems from "../NavItems";
// icons
import { FiX } from "react-icons/fi";
import { setIsOpen } from "../../features/mainState";

const SideBar: React.FC = () => {
  const isOpen = useAppSelector((state) => state.mainState.isOpen);
  const dispatch = useAppDispatch();

  if (!isOpen) return null;

  return (
    <Wrapper>
      <StyleSidebarWrapper>
        <h2>All categories</h2>
        <NavItems />
      </StyleSidebarWrapper>
      <Overlay onClick={() => dispatch(setIsOpen(false))}>
        <FiX
          style={{
            fontSize: "35px",
            margin: "10px",
            color: "#ffffff",
            cursor: "pointer",
          }}
        />
      </Overlay>
    </Wrapper>
  );
};

export default SideBar;
