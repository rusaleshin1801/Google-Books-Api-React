import React, { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    if (searchTerm.trim() !== "") {
      handleSearch(searchTerm.trim());
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && searchTerm.trim() !== "") {
      handleSearch(searchTerm.trim());
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        onKeyDown={handleKeyPress}
        placeholder="Search books"
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchBar;
