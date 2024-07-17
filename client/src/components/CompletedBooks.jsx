import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const CompletedBooks = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/books/getbooks');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  // Function to filter out completed books
  const filteredBooks = data ? data.filter(book => book.isCompleted) : [];

  return (
    <div className="grid grid-cols-3 gap-4">
      
      {filteredBooks.map(book => (
        <div key={book._id} className="max-w-sm">
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col justify-between">
            <div>
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {book.bookName}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-900">
                {book.description}
              </p>
            </div>
            <Link
             to={`/books/${book._id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            {error && <p className="text-red-500 mt-5">{error}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompletedBooks;
