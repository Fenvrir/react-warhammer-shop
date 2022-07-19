import React, { useEffect, useState } from "react";
import Sort from "../Components/Content/Sort/Sort";
import Skeleton from "../Components/FakeBlocks/Skeleton";
import Categories from "../Components/Content/Categories/Categories";
import ContentItem from "../Components/Content/ContentItem/ContentItem";
import Pagination from "../Components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Components/Redux/Slices/productsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const {products, sortType, category, currentPage} = useSelector((state) => state.productsSlice);
  const searchValue = useSelector((state) => state.search.searchValue);
  
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    let sortName = sortType.sortName.replace("-", "");
    let sortCategory = category != null ? "&category=" + category : "";
    let order = `&sortBy=${sortName}${sortCategory}&order=${
      sortType.sortName.includes("-") ? "desc" : "asc"
    }`;
    let search = searchValue ? `&search=${searchValue}` : "";

    setIsLoading(true);
    fetch(
      `https://62ca7ecd1eaf3786ebac26cc.mockapi.io/warhammer/product?page=${currentPage}&limit=8${order}${search}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch(setProducts(json));
        setIsLoading(false);
      });
    window.scroll(0, 0);
  }, [sortType, category, searchValue, currentPage, dispatch]);

  const skeleton = [...new Array(8)].map((_, index) => {
    return <Skeleton key={index} />;
  });
  const items = products.map((product) => {
    return <ContentItem key={product.id} {...product} />;
  });

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort  />
      </div>
      <div className="container">
        <h2 className="content__title">Все товары</h2>
        <div className="content__items">{isLoading ? skeleton : items}</div>
        <Pagination />
      </div>
    </>
  );
};

export default Home;
