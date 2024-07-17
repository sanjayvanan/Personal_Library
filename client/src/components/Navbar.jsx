import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Personal</span>
            <span className='text-slate-700'>Library</span>
          </h1>
        </Link>
        <form className='flex items-center' onSubmit={handleSearch}>
          <input
            type='text'
            placeholder='Search...'
            className='bg focus:outline-none w-24 sm:w-32 md:w-48 py-2 px-3 rounded-l-lg text-sm text-slate-700'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type='submit'
            className='bg-blue-700 text-white py-2 px-4 rounded-r-lg text-sm hover:bg-blue-800 focus:outline-none'
          >
            Search
          </button>
        </form>
        <ul className='flex gap-4 text-slate-700'>
          <li className='hidden sm:inline'>
            <Link to='/' className='hover:underline'>
              Home
            </Link>
          </li>
          <li className='hidden sm:inline'>
            <Link to='/completed-books' className='hover:underline'>
              Completed Books
            </Link>
          </li>
          <li>
            <Link to='/about' className='hover:underline'>
              About
            </Link>
          </li>
          <li>
            <Link to='/add-books' className='hover:underline'>
              Add Book
            </Link>
          </li>
          <li>
            <Link to='/bookmarks' className='hover:underline'>
              Bookmarks
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
