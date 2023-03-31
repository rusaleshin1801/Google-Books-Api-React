import React from "react";

const Categories = ({ setCategory }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  const handleClick = (category) => {
    setCategory(category);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeIndex === 0 ? "active" : ""}
          onClick={() => {
            handleClick("all");
            onClickCategory(0);
          }}
        >
          all
        </li>
        <li
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => {
            handleClick("art");
            onClickCategory(1);
          }}
        >
          art
        </li>
        <li
          className={activeIndex === 2 ? "active" : ""}
          onClick={() => {
            handleClick("biography");
            onClickCategory(2);
          }}
        >
          biography
        </li>
        <li
          className={activeIndex === 3 ? "active" : ""}
          onClick={() => {
            handleClick("computers");
            onClickCategory(3);
          }}
        >
          computers
        </li>
        <li
          className={activeIndex === 4 ? "active" : ""}
          onClick={() => {
            handleClick("history");
            onClickCategory(4);
          }}
        >
          history
        </li>
        <li
          className={activeIndex === 5 ? "active" : ""}
          onClick={() => {
            handleClick("poetry");
            onClickCategory(5);
          }}
        >
          poetry
        </li>
        <li
          className={activeIndex === 6 ? "active" : ""}
          onClick={() => {
            handleClick("medical");
            onClickCategory(6);
          }}
        >
          medical
        </li>
      </ul>
    </div>
  );
};

export default Categories;
