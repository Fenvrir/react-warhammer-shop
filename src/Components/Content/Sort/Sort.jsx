import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortType } from "../../Redux/Slices/productsSlice";

const Sort = ({...props }) => {
  const dispatch = useDispatch();
  const sortType = useSelector(state => state.productsSlice.sortType);
  const [isVisible, setIsVisible] = useState(false);
  const typeList = [
    { name: "популярности", sortName: "rating" },
    { name: "цене (воз.)", sortName: "price" },
    { name: "цене (убыв.)", sortName: "-price" },
    { name: "алфавиту", sortName: "title" },
  ];

  const popupHandler = (type) => {
    setIsVisible(!isVisible);
    dispatch(setSortType(type));
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="wight"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#fff"
          />
        </svg>
       
        <b>Сортировка по:</b>
        <span onClick={() => setIsVisible(!isVisible)}>{sortType.name}</span>
      </div>
      {isVisible && (
        <div className="sort__popup">
          <ul>
            {typeList.map((obj, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    popupHandler(obj);
                  }}
                  className={sortType.name === obj.name ? "active" : ""}
                >
                  {obj.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
