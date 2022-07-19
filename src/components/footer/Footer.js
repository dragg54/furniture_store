import React from "react";
import {
  ContactContainer,
  FooterContainer,
  FooterContentContainer,
  HelpContainer,
  IconsContainer,
  InformationContainer,
} from "./StyledFooter";

import { MdOutlineFacebook } from "react-icons/md";
import {  FaWhatsappSquare, FaInstagram, FaTwitter  } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentContainer>
        <HelpContainer>
        <h4>Help</h4>
          <li>Contact us</li>
          <li>Track Your Order</li>
          <li>Returns & Exchanges</li>
          <li>Shipping</li>
          <li>Customer Service</li>
        </HelpContainer>
        <InformationContainer>
        <h4>Information</h4>
          <li>About</li>
          <li>Inspiration</li>
          <li>Maintenance and Care</li>
          <li>Materials</li>
          <li>Configurator</li>
        </InformationContainer>
        <ContactContainer>
        <h4>Contact</h4>
          <p>1238 Fifth St. Berkeley, CA 94710.</p>
          <p>United States</p>
          <p style={{color:"blue"}}>+1(603) 555 - 0123</p>
          <p>info@plankers.com</p>
          <IconsContainer>
            <MdOutlineFacebook />
            <FaWhatsappSquare />
            <FaInstagram />
            <FaTwitter />
          </IconsContainer>
        </ContactContainer>
      </FooterContentContainer>
    </FooterContainer>
  );
};

export default Footer;
