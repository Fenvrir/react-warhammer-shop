import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "../../Pages/CartPage";
import Home from "../../Pages/Home";
import NotFound from "../../Pages/NotFound";

const Content = ({searchValue}) => {
  return (
    <div className="content">
      <Routes>
        <Route path="" element={<Home searchValue={searchValue} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Content;
