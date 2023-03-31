import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchButtonClick = (event) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch(searchValue);
    }
  };

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width={38} src="./img/book_logo.png" alt="logo" />
            <h1>Google Books Api</h1>
          </div>
        </Link>
        <div className="header__search">
          <h2>Find your book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Search your book"
              value={searchValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
            <button onClick={handleSearchButtonClick}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
