import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/books/getBookById/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBook(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBook();
  }, [id]);

  return (
    <div className="container mx-auto p-4 bg-gray-800 text-white">
      {error && <p className="text-red-500">{error}</p>}
      {book ? (
        <div>
          <h1 className="text-4xl font-bold mb-4">{book.bookName}</h1>
          <p className="text-lg mb-2">{book.description}</p>
          <p className="text-lg mb-2">This Book Comprises of: <b>{book.pageNo} pages</b></p>
          <p className="text-lg mb-2">Completed: {book.isCompleted ? 'Yes' : 'No'}</p>
          <p className="text-lg mb-2">Bookmarked: {book.isBookmarked ? 'Yes' : 'No'}</p>
          <p className="text-lg mb-2">Bestseller: {book.isBestSeller ? 'Yes' : 'No'}</p>
          <p className="text-lg mb-2">Book has a total rating of: <b>{book.rating}</b></p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetail;
