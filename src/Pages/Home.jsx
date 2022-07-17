import React, { useEffect, useState } from "react";
import Sort from "../Components/Content/Sort/Sort";
import Skeleton from "../Components/FakeBlocks/Skeleton";
import Categories from "../Components/Content/Categories/Categories";
import ContentItem from "../Components/Content/ContentItem/ContentItem";
import Pagination from "../Components/Pagination/Pagination";

const Home = ({ searchValue }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortName: "rating",
  });
  const [category, setCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(3);

  useEffect(() => {
    let sortName = sortType.sortName.replace("-", "");
    let sortCategory = category != null ? "category=" + category + "&" : "";
    let order = `${sortCategory}&sortBy=${sortName}&order=${
      sortType.sortName.includes("-") ? "desc" : "asc"
    }`;
    let search = searchValue ? `&search=${searchValue}` : "";

    if (sortName === 1 || sortName === 2) {
      setPageCount(1);
    } 
    setIsLoading(true);
    fetch(
      `https://62ca7ecd1eaf3786ebac26cc.mockapi.io/warhammer/product?page=${currentPage}&limit=8&${order}${search}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setProducts(json);
        setIsLoading(false);
      });
    window.scroll(0, 0);
  }, [sortType, category, searchValue, currentPage]);

  const skeleton = [...new Array(8)].map((_, index) => {
    return <Skeleton key={index} />;
  });
  const items = products.map((product) => {
    return <ContentItem key={product.id} {...product} />;
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories category={category} setCategory={setCategory} />
        <Sort sortType={sortType} setSortType={setSortType} />
      </div>
      <h2 className="content__title">Все товары</h2>
      <div className="content__items">{isLoading ? skeleton : items}</div>
      <Pagination setCurrentPage={setCurrentPage} pageCount={pageCount} />
    </div>
  );
};

export default Home;
