import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../Redux/Slices/productsSlice";
import styles from "./Pagination.module.scss";

const Pagination = ({...props}) => {
  const pageCount = useSelector(state => state.productsSlice.pageCount);
  const dispatch = useDispatch();
  
  return (
    <div>
      <ReactPaginate
        className={styles.wrapper}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(ev) => dispatch(setCurrentPage(ev.selected + 1))}
        pageRangeDisplayed={8}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
