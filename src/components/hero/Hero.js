import React from "react";
import { HeroContainer, HeroContentContainer, HeroPrimaryCaption, HeroSecondaryCaption, HeroWrapper, PrimaryButton } from "./StyledHero";

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
        <PrimaryButton>EXPLORE OUR COLLECTION</PrimaryButton>
        </HeroContentContainer>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
