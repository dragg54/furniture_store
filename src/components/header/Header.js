import React from 'react'
import { CompanyName, Img, Logo, NavContainer, NavList, SearchAndCartContainer } from './StyledHeader'
import { FiSearch, FiShoppingCart, FiHeart } from "react-icons/fi"

const Header = () => {
  return (
    <NavContainer>
        <Logo>
            <Img src="../../../images/logo.png"/>
            <CompanyName>PLANKERS</CompanyName>
        </Logo>
        <NavList>
            <li>ABOUT US</li>
            <li>CATALOG</li>
            <li>CONTACT</li>
        </NavList>
        <SearchAndCartContainer>
        <FiSearch/>
        <FiHeart/>
        <FiShoppingCart/>
        </SearchAndCartContainer>
    </NavContainer>
  )
}

export default Header