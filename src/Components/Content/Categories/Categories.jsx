import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../Redux/Slices/productsSlice";

export default function Categories(...props) {
  const category = useSelector(state => state.productsSlice.category);
  const dispatch = useDispatch();

  const arrayOfCategories = [
    "https://www.games-workshop.com/resources/static/header-2017/40k-nav-logo.png",
    "https://www.games-workshop.com/resources/static/header-2017/New_AOS_Logo.png",
    "https://www.games-workshop.com/resources/static/header-2017/HH-Nav-logo.png",
    "https://www.games-workshop.com/resources/static/header-2017/LOTR_NavBar_Logo.png",
    "https://www.games-workshop.com/resources/static/header-2017/GW-BL-Logo-Update.png",
  ];

  return (
    <div className="categories">
      <ul>
        {arrayOfCategories.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => dispatch(setCategory(index))}
              className={category === index ? "active" : ""}
            >
              <img className="categories__img" src={item} alt="age of sigmar" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
