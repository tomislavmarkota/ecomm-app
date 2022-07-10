import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <>
      <Link to="/">
        Home
        <FiChevronRight />
      </Link>
      <Link to="/mens">
        Men's clothing
        <FiChevronRight />
      </Link>
      <Link to="/womens">
        Women's clothing
        <FiChevronRight />
      </Link>
      <Link to="/jewelry">
        Jewelry
        <FiChevronRight />
      </Link>
      <Link to="/electronics">
        Electronics
        <FiChevronRight />
      </Link>
      <Link to="/cart">
        Cart
        <FiChevronRight />
      </Link>
    </>
  );
};

export default NavItems;
