import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${bookId}?key=AIzaSyC9DW5law5NpME08n3hBt_6znevkC7TpGU`
        );
        const data = await response.json();
        if (response.ok) {
          if (data.volumeInfo) {
            // add this check
            setBook(data.volumeInfo);
          } else {
            console.error("No book data found");
          }
        } else {
          console.error("Ошибка получения данных о книге");
        }
      } catch (error) {
        console.error("Ошибка получения данных о книге:", error.message);
      }
    };
    fetchBook();
  }, [bookId]);

  console.log(book); // добавленный вывод

  return book ? (
    <div className="book-details">
      <h2 className="book-details__title">{book.title}</h2>
      <div>id: {bookId}</div>
      {book.imageLinks && (
        <img
          src={book.imageLinks.thumbnail}
          alt={book.title}
          className="book-details__image"
        />
      )}
      <p className="book-details__author">{book.authors?.[0]}</p>
      <p className="book-details__description">{book.description}</p>
    </div>
  ) : null;
};

export default BookDetails;
