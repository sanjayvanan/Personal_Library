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
          <div className="flex items-center mb-4">
            <h1 className="text-4xl font-bold">{book.bookName}</h1>
            {book.isCompleted && (
              <img
                src="https://img.icons8.com/?size=100&id=MX59Td3jZ5Q5&format=png&color=000000"
                alt="Completed"
                className="ml-4 w-10 h-10"
              />
            )}
          </div>
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
