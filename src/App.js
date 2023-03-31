import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchValue) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`
      );
      const data = await response.json();
      setBooks(data.items);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="wrapper">
      <Header onSearch={handleSearch} />
      <div className="content">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Routes>
            <Route path="/" element={<Home books={books} />} />
            <Route path="/about" element={<BookDetails />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
