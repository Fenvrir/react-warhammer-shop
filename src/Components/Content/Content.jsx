import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../../Pages/Cart";
import Home from "../../Pages/Home";
import NotFound from "../../Pages/NotFound";

const Content = () => {
  return (
    <div className="content">
      <div className="container">
        <Routes>
          <Route path="" element={ <Home/>}/>
          <Route path="/cart" element={ <Cart/>}/>
          <Route path="*" element={ <NotFound/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default Content;
