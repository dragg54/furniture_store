import React from "react";
import Hero from "../../components/hero/Hero";
import { BASE_URL } from "../../API/fetchAPI";
import useFetchAPI from "../../API/fetchAPI";
import NowOnSale from "../../components/nowOnSale/NowOnSale";
import HomeFirst from "../../components/homeFirstSection/HomeFirst";
import LimitedEdition from "../../components/sections/limited_edition/LimitedEdition";
import NewsLetter from "../../components/sections/newsletter/NewsLetter";

const Home = () => {
  const[ data ] = useFetchAPI(BASE_URL)
  return (
    <>
      <Hero />
      <NowOnSale items={data}/>
      <HomeFirst />
      <LimitedEdition items={data}/>
      <NewsLetter />
    </>
  );
};

export default Home;
