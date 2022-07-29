import React from "react";
import { HeroContainer, HeroContentContainer, HeroPrimaryCaption, HeroSecondaryCaption, HeroWrapper, PrimaryButton } from "./StyledHero";
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <HeroContentContainer>
          <HeroPrimaryCaption>
            FURNITURE TO FIT YOUR STYLE AND SPACE
          </HeroPrimaryCaption>
          <HeroSecondaryCaption>
            With the best cozy collection to make your home shine.
          </HeroSecondaryCaption>
        <Link to="/allitems" style={{color:"inherit"}}><PrimaryButton>EXPLORE OUR COLLECTION</PrimaryButton></Link>
        </HeroContentContainer>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
