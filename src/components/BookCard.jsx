import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { imageLinks, title, authors, categories, language } = book;
  const [isLoading, setIsLoading] = useState(true);
  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="book-block">
      <img
        className="book-block__image"
        src={imageLinks?.smallThumbnail || ""}
        alt={title}
        onLoad={handleLoad}
      />
      <h4 className="book-block__title">{title}</h4>
      <p className="book-block__authors">{authors?.join(", ")}</p>
      <p className="book-block__categories">{categories?.[0]}</p>
      <div className="book-block__bottom">
        <div className="book-block__price">{language}</div>
        {!isLoading && (
          <Link to={`/about/${book.id}`}>
            <div className="button button--outline button--add">
              <span>Open Book</span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BookCard;
