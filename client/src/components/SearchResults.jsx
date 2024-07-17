import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/books/search?query=${query}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBooks();
  }, [query]);

  return (
    <div className="container mx-auto p-4 bg-gray-800 text-white">
      {error && <p className="text-red-500">{error}</p>}
      {books.length > 0 ? (
        <div>
          <h1 className="text-4xl font-bold mb-4">Search Results for "{query}"</h1>
          {books.map((book) => (
            <div key={book.id} className="mb-4">
              <h2 className="text-2xl font-bold">{book.bookName}</h2>
              <p className="text-lg mb-2">{book.description}</p>
              <p className="text-lg mb-2">Pages: <b>{book.pageNo}</b></p>
              <p className="text-lg mb-2">Completed: {book.isCompleted ? 'Yes' : 'No'}</p>
              <p className="text-lg mb-2">Bookmarked: {book.isBookmarked ? 'Yes' : 'No'}</p>
              <p className="text-lg mb-2">Bestseller: {book.isBestSeller ? 'Yes' : 'No'}</p>
              <p className="text-lg mb-2">Rating: <b>{book.rating}</b></p>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found for "{query}"</p>
      )}
    </div>
  );
};

export default SearchResults;
