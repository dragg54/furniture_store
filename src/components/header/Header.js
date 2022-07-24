import React from "react";
import {
  CartItemQuantity,
  CompanyName,
  Img,
  Logo,
  NavContainer,
  NavList,
  SearchAndCartContainer,
} from "./StyledHeader";
import { FiSearch, FiShoppingCart, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = ({item}) => {
  return (
    <NavContainer>
      <Link to="/">
        <Logo>
          <Img src="../../../images/logo.png" />
          <CompanyName>PLANKERS</CompanyName>
        </Logo>
      </Link>
      <NavList>
        <li>ABOUT US</li>
        <li>CATALOG</li>
        <li>CONTACT</li>
      </NavList>
      <SearchAndCartContainer>
        <FiSearch />
        <FiHeart />
        <Link to="/cart" style={{color: "inherit"}}>
          <li style={{position:"relative"}}>
            <FiShoppingCart />
            <CartItemQuantity>
              {item.length}
            </CartItemQuantity>
          </li>
        </Link>
      </SearchAndCartContainer>
    </NavContainer>
  );
};

export default Header;
