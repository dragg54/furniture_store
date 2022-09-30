import React from 'react'
import { CompanyName, Img, Logo, Menu, NavContainer, NavList, SearchAndCartContainer } from './StyledHeader'
import { FiSearch, FiShoppingCart, FiHeart, FiMenu } from "react-icons/fi"

const Header = () => {
  return (
    <NavContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <Menu>
          <FiMenu style={{ opacity: "0.8", height: "20px", width: "24px" }} />
        </Menu>
        <Logo>
          <Img src="../../../images/logo.png" />
          <CompanyName>PLANKERS</CompanyName>
        </Logo>
      </div>
      <NavList>
        <li>ABOUT US</li>
        <li>CATALOG</li>
        <li>CONTACT</li>
      </NavList>
      <SearchAndCartContainer>
        <FiSearch />
        <FiShoppingCart />
      </SearchAndCartContainer>
    </NavContainer>
  );
}

export default Header