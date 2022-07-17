import React from "react";
import { useContext } from "react";
import { ItemContext } from "../../../pages/Home/Home";
import {
  ButtonStroke,
  DescriptionContainer,
  Heading,
  HeadingContainer,
  ImageContainer,
  ItemCard,
  UniqueButton,
} from "../nowOnSale/StyledNowOnSale";
import {
  Img,
  LimitedEditionContainer,
  LimitedEditionImageContainer,
  LimitedEditionItemsContainer,
  LimitedEditionItemSectionsContainer,
  LimitedEditionItemsSection,
} from "./StyledLimitedEdition";

const LimitedEdition = () => {
  const items = useContext(ItemContext);
  return (
    <>
      <LimitedEditionContainer>
        <LimitedEditionImageContainer>
          <Img src="../../../../images/don.jpg" />
        </LimitedEditionImageContainer>
        <LimitedEditionItemsContainer>
            <HeadingContainer>
                <Heading>LIMITED EDITIONS</Heading>
                <div
            style={{
              width: "200px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{width: "180px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <span style={{whiteSpace:"nowrap"}}>View all products</span>
            <UniqueButton>
              <ButtonStroke />
            </UniqueButton>
            </div>
          </div>
            </HeadingContainer>
            <LimitedEditionItemSectionsContainer>
            <LimitedEditionItemsSection>
            {items.splice(0, 4).map((item) => {
                return (
                    <ItemCard key={item._id + Math.random()}>
                <ImageContainer>
                  <Img
                    src={
                        "https://furniturestore54.herokuapp.com/" + item.itemImage
                    }
                    />
                </ImageContainer>
                <DescriptionContainer>
                  <p style={{ fontSize: "0.7rem", opacity: "0.7" }}>
                    {item.name}
                  </p>
                  <p
                    style={{
                        textDecoration: "line-through",
                        fontSize: "0.7rem",
                    }}
                    >
                    ${((item.price + 30) * 10).toFixed(2)}
                  </p>
                  <p style={{ color: "red" }}>
                    ${(item.price * 10).toFixed(2)}
                  </p>
                </DescriptionContainer>
              </ItemCard>
            );
        })}
            </LimitedEditionItemsSection>
        </LimitedEditionItemSectionsContainer>
        </LimitedEditionItemsContainer>
      </LimitedEditionContainer>
    </>
  );
};

export default LimitedEdition;
