import React from "react";
import {
  CartItemQuantity,
  CompanyName,
  Img,
  Logo,
  Menu,
  NavContainer,
  NavList,
  SearchAndCartContainer,
} from "./StyledHeader";
import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = ({item}) => {
  return (
    <NavContainer>
      <div
        style={{
          marginLeft: "35px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Menu>
          <FiMenu />
        </Menu>
        <Link to="/">
          <Logo>
            <Img src="../../../images/logo.png" />
            <CompanyName>PLANKERS</CompanyName>
          </Logo>
        </Link>
      </div>
      <NavList>
        <li>ABOUT US</li>
        <li>CATALOG</li>
        <li>CONTACT</li>
      </NavList>
      <SearchAndCartContainer>
        <FiSearch />
        <Link to="/cart" style={{ color: "inherit" }}>
          <li style={{ position: "relative" }}>
            <FiShoppingCart />
            <CartItemQuantity>{item.length}</CartItemQuantity>
          </li>
        </Link>
      </SearchAndCartContainer>
    </NavContainer>
  );
};

export default Header;
