import React from "react";
import useFetchAPI, { BASE_URL } from "../API/fetchAPI";
import ItemSection from "../components/sections/item/ItemSection";
import { useSearchParams } from "react-router-dom";
const Item = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [item] = useFetchAPI(`${BASE_URL}?id=${id}`);
  return (
    <>
      <ItemSection item={item}/>
    </>
  );
};

export default Item;
