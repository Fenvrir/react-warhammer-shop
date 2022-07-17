import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination = ({setCurrentPage, pageCount}) => {
  return (
    <div>
      <ReactPaginate
        className={styles.wrapper}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(ev) => setCurrentPage(ev.selected + 1)}
        pageRangeDisplayed={8}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
