import React, { useContext } from "react";
import useFetchAPI, { BASE_URL } from "../API/fetchAPI";
import ItemSection from "../components/sections/item/ItemSection";
import { useSearchParams } from "react-router-dom";
import  GlobalProvider, { CartContext } from "../context/GlobalContext";
import Loading from "../loading/Loading";


const Item = () => {
  const dispatch = useContext(CartContext).dispatch
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [item] = useFetchAPI(`${BASE_URL}?id=${id}`);

  if(typeof item === "object"){
    console.log(typeof item)
  return (
    <>
      <GlobalProvider>
        <ItemSection context={{item,dispatch}}/>
      </GlobalProvider>
    </>
  )
  }
  else{
    <div style={{height: "100vh"}}>
        <Loading />
    </div>
  }
     
};

export default Item;
