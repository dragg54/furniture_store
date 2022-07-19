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
        <Img src="../../../../images/kam.jpg" />
      </ImageContainer>
      <HomeFirstSection>
        <h1 style={{marginRight:"4px", whiteSpace:"nowrap", marginBottom:"7px", color:"#ffc304"}}>HOME COMES FIRST</h1>
        <p style={{opacity:"0.7"}}>
          We believe in creating and finding things that travel with you and are
          meant to be enjoyed for a lifetime - from home to home, from
          generation to generation.
        </p>
        <p style={{opacity:"0.7"}}>
          We carefully select the best furniture from quality materials and an
          unwavering commitment to detail, taking care of the comfort of your
          home.
        </p>
        <div style={{display:"flex", marginTop:"11px"}}>
          <p style={{marginRight:"10px", fontWeight:"bold", opacity:"0.85"}}>Read More About us</p>
          <UniqueButton secondary>
            <ButtonStroke secondary/>
          </UniqueButton>
        </div>
      </HomeFirstSection>
    </HomeFirstContainer>
  );
};

export default HomeFirst;
