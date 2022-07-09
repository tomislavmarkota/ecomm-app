import React from "react";
import { useAppDispatch } from "../../hooks";
import { setIsOpen } from "../../features/mainState";
//components
import NavItems from "../NavItems";
// icons
import { FaBars } from "react-icons/fa";
//styles
import { NavWrapper } from "./styledNav";

const NavBar: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <NavWrapper>
      <div onClick={() => dispatch(setIsOpen(true))}>
        <FaBars />
          <span>All</span>
      </div>
      <NavItems />
    </NavWrapper>
  );
};

export default NavBar;
