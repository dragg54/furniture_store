import React, { useContext } from "react";
import useFetchAPI, { BASE_URL } from "../API/fetchAPI";
import ItemSection from "../components/sections/item/ItemSection";
import { useSearchParams } from "react-router-dom";
import  GlobalProvider, { CartContext } from "../context/GlobalContext";


const Item = () => {
  const dispatch = useContext(CartContext).dispatch
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [item] = useFetchAPI(`${BASE_URL}?id=${id}`);
  return (
    <>
      <GlobalProvider>
        <ItemSection context={{item,dispatch}}/>
      </GlobalProvider>
    </>
     
  );
};

export default Item;
