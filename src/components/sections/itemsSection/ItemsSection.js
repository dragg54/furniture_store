import React, { useEffect, useState } from "react";
import useFetchAPI, { BASE_URL } from "../../../API/fetchAPI";
import Loading from "../../../loading/Loading";
import {
  ImageContainer,
  Img,
  ItemDetailsContainer,
  ItemList,
  ItemsContainer,
  ItemsSectionContainer,
  ItemsWrapper,
} from "./StyledItemsSection";
import { Link } from "react-router-dom"

const ItemsSection = () => {
  const [items] = useFetchAPI(BASE_URL);
  const [isLoading, setIsLoading] = useState(true);
  const [allItems, setAllItems] = useState([]);

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    if (items.length !== 0 && isLoading) {
      setAllItems(items);
      setIsLoading(false);
    }
  }, [items, isLoading]);

  const handleCategory = (category) => {
    const filterArray = items.filter((item) => {
      return item.category === category;
    });
    setAllItems(filterArray);
  };

  const showAllItems = () => {
    return setAllItems(items);
  };
if(!isLoading){

  return (
    <ItemsSectionContainer>
      <ItemList>
        <li onClick={showAllItems}>All</li>
        <li
          onClick={() => {
            handleCategory("chair");
          }}
          >
          Chairs
        </li>
        <li
          onClick={() => {
            handleCategory("sofa");
          }}
          >
          Sofas
        </li>
        <li
          onClick={() => {
            handleCategory("table");
          }}
        >
          Tables
        </li>
      </ItemList>
      <ItemsWrapper>
        {allItems.map((item) => {
          return (
            <Link to={"?id=" + item._id} style= {{color: "inherit"}}><ItemsContainer key={item._id}> 
              <ImageContainer>

                <Img
                  src={
                    "https://furniturestore54.herokuapp.com/" + item.itemImage
                  }
                  />
              </ImageContainer>
              <ItemDetailsContainer></ItemDetailsContainer>
            </ItemsContainer>
            </Link>
          );
        })}
      </ItemsWrapper>
    </ItemsSectionContainer>
  );
}
else{
  return(
    <Loading />
  )
}
};

export default ItemsSection;
