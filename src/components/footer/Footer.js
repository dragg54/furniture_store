import React from "react";
import {
  ContactContainer,
  FooterContainer,
  FooterContent,
  FooterContentContainer,
  HelpContainer,
  IconsContainer,
  InformationContainer,
} from "./StyledFooter";

import { MdOutlineFacebook } from "react-icons/md";
import {  FaWhatsappSquare, FaInstagram, FaTwitter  } from "react-icons/fa";
import { CompanyName, Img, Logo } from "../header/StyledHeader";

const Footer = () => {
  return (
    <FooterContainer>
        <FooterContent>
        <Logo style={{alignSelf:"flex-start", marginLeft:"-28px", marginTop:"-20px", marginBottom:"0", height:"20%"}}>
            <Img src="../../../images/logo.png"/>
            <CompanyName>PLANKERS</CompanyName>
        </Logo>
      <FooterContentContainer>
        <HelpContainer>
        <h4 style={{opacity:"0.8", fontSize:"0.9rem"}}>Help</h4>
          <li style={{opacity:"0.7", fontSize:"0.8rem"}}>Contact us</li>
          <li style={{opacity:"0.7", fontSize:"0.8rem"}}>Track Your Order</li>
          <li style={{opacity:"0.7", fontSize:"0.8rem"}}>Returns & Exchanges</li>
          <li style={{opacity:"0.7", fontSize:"0.8rem"}}>Shipping</li>
          <li style={{opacity:"0.7", fontSize:"0.8rem"}}>Customer Service</li>
        </HelpContainer>
        <InformationContainer>
        <h4 style={{opacity:"0.8", fontSize:"0.9rem"}}>Information</h4>
          <li style={{opacity:"0.7", fontSize:"0.8rem"}}>About</li>
          <li style={{opacity:"0.7", fontSize:"0.8rem"}}>Inspiration</li>
          <li style={{opacity:"0.7", fontSize:"0.8rem"}}>Maintenance and Care</li>
          <li style={{opacity:"0.7", fontSize:"0.8rem"}}>Materials</li>
          <li style={{opacity:"0.7", fontSize:"0.8rem"}}>Configurator</li>
        </InformationContainer>
        <ContactContainer>
        <h4 style={{opacity:"0.8", fontSize:"0.9rem"}}>Contact</h4>
          <p style={{opacity: "0.7", fontSize:"0.8rem"}}>1238 Fifth St. Berkeley, CA 94710.</p>
          <p style={{opacity: "0.7", fontSize:"0.8rem"}}>United States</p>
          <p style={{color:"blue"}}>+1(603) 555 - 0123</p>
          <p style={{opacity: "0.7", fontSize:"0.8rem"}}>info@plankers.com</p>
          <IconsContainer>
            <MdOutlineFacebook />
            <FaWhatsappSquare />
            <FaInstagram />
            <FaTwitter />
          </IconsContainer>
        </ContactContainer>
      </FooterContentContainer>
        </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
