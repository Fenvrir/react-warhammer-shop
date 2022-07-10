import React from "react";
import Categories from "./Categories/Categories";
import ContentItem from "./ContentItem/ContentItem";
import db from './../../Assets/DB/db.json'
import Sort from "./Sort/Sort";

const Content = () => {
  
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort/>
        </div>
        <h2 className="content__title">Все товары</h2>
        <div className="content__items">
          {db.products.map(product => {
            return  <ContentItem key={product.id} {...product}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;
