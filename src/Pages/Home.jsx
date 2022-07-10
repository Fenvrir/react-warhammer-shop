import React,  { useEffect, useState } from 'react';
import Sort from '../Components/Content/Sort/Sort';
import Skeleton from "../Components/FakeBlocks/Skeleton";
import Categories from "../Components/Content/Categories/Categories";
import ContentItem from '../Components/Content/ContentItem/ContentItem';



const Home = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://62ca7ecd1eaf3786ebac26cc.mockapi.io/warhammer/product")
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            setProducts(json);
            setIsLoading(false);
          });
      }, []);
    return (
        <>
           <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все товары</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(8)].map((_, index) => {
                return <Skeleton key={index} />;
              })
            : products.map((product) => {
                return <ContentItem key={product.id} {...product} />;
              })}
        </div> 
        </>
    );
}

export default Home;
