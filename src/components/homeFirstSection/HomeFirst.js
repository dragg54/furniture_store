import React from "react";
import { ButtonStroke, UniqueButton } from "../nowOnSale/StyledNowOnSale";
import {
  HomeFirstContainer,
  HomeFirstSection,
  ImageContainer,
  Img,
} from "./StyledHomeFirst";

const HomeFirst = () => {
  return (
    <HomeFirstContainer>
      <ImageContainer>
        <Img src="../../../images/kam.jpg" />
      </ImageContainer>
      <HomeFirstSection>
        <h1 style={{marginRight:"4px", whiteSpace:"nowrap", marginBottom:"7px"}}>HOME COMES FIRST</h1>
        <p>
          We believe in creating and finding things that travel with you and are
          meant to be enjoyed for a lifetime - from home to home, from
          generation to generation.
        </p>
        <p style={{marginTop:"7px"}}>
          We carefully select the best furniture from quality materials and an
          unwavering commitment to detail, taking care of the comfort of your
          home.
        </p>
        <div style={{display:"flex", marginTop:"11px"}}>
          <p style={{marginRight:"5px", fontWeight:"bold"}}>Read More About us</p>
          <UniqueButton>
            <ButtonStroke />
          </UniqueButton>
        </div>
      </HomeFirstSection>
    </HomeFirstContainer>
  );
};

export default HomeFirst;
