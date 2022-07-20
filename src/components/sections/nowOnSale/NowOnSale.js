import React from "react";
import { useContext } from "react";
import { ItemContext } from "../../../pages/Home";
import {
  ButtonStroke,
  DescriptionContainer,
  Heading,
  HeadingContainer,
  ImageContainer,
  Img,
  ItemCard,
  NowOnSaleContainer,
  NowOnSaleItemsContainer,
  NowOnSaleSection,
  UniqueButton,
} from "./StyledNowOnSale";
import { Link } from "react-router-dom";

const NowOnSale = () => {
  const items = useContext(ItemContext);
  console.log(items);
  return (
    <NowOnSaleContainer>
      <HeadingContainer>
        <Heading>NOW ON SALE</Heading>
        <div
          style={{
            width: "200px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "180px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ whiteSpace: "nowrap" }}>View all products</span>
            <UniqueButton>
              <ButtonStroke />
            </UniqueButton>
          </div>
        </div>
      </HeadingContainer>
      <NowOnSaleSection>
        <NowOnSaleItemsContainer>
          {items.splice(0, 4).map((item) => {
            return (
              <ItemCard key={item._id}>
                  <Link to={"items?id=" + item._id}>
                  <ImageContainer>
                    <Img
                      src={
                        "https://furniturestore54.herokuapp.com/" +
                        item.itemImage
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
              </Link>
                </ItemCard>
            );
          })}
        </NowOnSaleItemsContainer>
      </NowOnSaleSection>
    </NowOnSaleContainer>
  );
};

export default NowOnSale;
