import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setIsOpen } from "../../features/mainState";
//components
import NavItems from "../NavItems";
// icons
import { FaBars, FaShoppingCart } from "react-icons/fa";
//styles
import { NavWrapper } from "./styledNav";
import { CartIconContainer } from "./styledNav";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartQuantity = useAppSelector((state) => state.cart.cartTotalQuantity);

  return (
    <NavWrapper>
      <div onClick={() => dispatch(setIsOpen(true))}>
        <FaBars />
        <span>All</span>
      </div>
      <NavItems />
      <CartIconContainer>
        <div style={{cursor: "pointer", position:"relative", border: "1px solid #232f3e"}} onClick={() => navigate("/cart")}>
          {cartQuantity === 0 ? null : <span>{cartQuantity}</span>}
          <FaShoppingCart />
        </div>
      </CartIconContainer>
    </NavWrapper>
  );
};

export default NavBar;
