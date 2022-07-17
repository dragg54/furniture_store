import React from "react";
import { createContext } from "react"
import Hero from "../../components/hero/Hero";
import { BASE_URL } from "../../API/fetchAPI";
import useFetchAPI from "../../API/fetchAPI";
import NowOnSale from "../../components/section/nowOnSale/NowOnSale";
import HomeFirst from "../../components/section/homeFirstSection/HomeFirst";
import LimitedEdition from "../../components/section/limited_edition/LimitedEdition";

export const ItemContext = createContext();
const Home = () => {
  const [data] = useFetchAPI(BASE_URL);
  return (
    <>
      <ItemContext.Provider value={data}>
        <Hero />
        <NowOnSale />
        <HomeFirst />
        <LimitedEdition />
      </ItemContext.Provider>
    </>
  );
};

export default Home;
