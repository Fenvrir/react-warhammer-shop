import React from "react";

export default function Categories({category, setCategory}) {
  
  const arrayOfCategories = [
    "40.000",
    "Age Of Sigmar",
    "Horus Hersey",
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
              onClick={() => setCategory(index)}
              className={category === index ? "active" : "" }
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
