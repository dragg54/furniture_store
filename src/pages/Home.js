import React, { useEffect } from "react";
import { createContext } from "react"
import Hero from "../components/hero/Hero";
import { BASE_URL } from "../API/fetchAPI";
import useFetchAPI from "../API/fetchAPI";
import NowOnSale from "../components/sections/nowOnSale/NowOnSale";
import HomeFirst from "../components/sections/homeFirstSection/HomeFirst";
import LimitedEdition from "../components/sections/limited_edition/LimitedEdition";
import NewsLetter from "../components/sections/newsletter/NewsLetter";

export const ItemContext = createContext();
const Home = () => {
  const [data] = useFetchAPI(BASE_URL);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
      return(
        <ItemContext.Provider value={data}>
        <Hero />
        <NowOnSale />
        <HomeFirst />
        <LimitedEdition />
        <NewsLetter/>
      </ItemContext.Provider> 
      )
};

export default Home;