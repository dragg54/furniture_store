import React, { useContext } from "react";
import { CartContext } from "../context/GlobalContext";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = ({children}) => {
  const context = useContext(CartContext)
  const item = context.state
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
      <Header item={item}/>
       {children}
       <Footer/>   
    </div>
  );
};

export default Layout;
