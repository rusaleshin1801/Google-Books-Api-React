import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import BookCard from "../components/BookCard";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { setCategory, setSortType } from "../redux/slices/filterSlice";

const Home = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.filter.category);
  const sortType = useSelector((state) => state.filter.sortType);

  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("react");
  const [startIndex, setStartIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStartIndex(0);
    setBooks([]);
  }, [category, dispatch, sortType]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}${
          category !== "all" ? `+subject:${category}` : ""
        }&orderBy=${sortType}&startIndex=${startIndex}&maxResults=30`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Unable to fetch books.");
        }
        const data = await response.json();
        setBooks((prevBooks) => [...prevBooks, ...(data.items || [])]);
        setTotalItems(data.totalItems);
      } catch (error) {
        setError(error);
      }
    };
    fetchBooks();
  }, [category, sortType, searchQuery, startIndex]);

  const loadMore = () => {
    setStartIndex((prevIndex) => prevIndex + 30);
  };

  if (error) {
    return <div className="container">An error occurred: {error.message}</div>;
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          setCategory={(category) => dispatch(setCategory(category))}
          setSearchQuery={setSearchQuery}
        />
        <Sort setSortType={(sortType) => dispatch(setSortType(sortType))} />
      </div>
      <h2 className="content__title">Список книг</h2>
      <div className="content__info">Найдено {totalItems} книг</div>
      <div className="content__items">
        {books.map((book) => (
          <BookCard book={book.volumeInfo} key={book.id} />
        ))}
      </div>
      {totalItems > books.length && (
        <div className="content__bottom">
          <button
            className="button button--outline button--add"
            onClick={loadMore}
          >
            <span>Load more</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
