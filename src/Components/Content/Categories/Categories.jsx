import React from "react";
import { useState } from "react";

export default function Categories() {
  const [active, setActive] = useState(0);
  const arrayOfCategories = [
    "Age Of Sigmar",
    "Horus Hersey",
    "40.000",
    "Middle Earth",
    "Black Library",
  ];

  return (
    <div className="categories">
      <ul>
        {arrayOfCategories.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => setActive(index)}
              className={active === index ? "active" : "" }
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
