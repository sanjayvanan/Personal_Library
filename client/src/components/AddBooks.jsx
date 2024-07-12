import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddBooks() {

  const[formData, setFormData] = useState({});
  const[error, setError] = useState(null);
  const[loading, setLoading] = useState(false);
  const navigate = new useNavigate();
  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })

  }
  const handleSubmit = async(e) =>{
    try {
      
      e.preventDefault();
      setLoading(true);
      const res = await fetch('http://localhost:3001/api/books/addBooks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    
      const data = await res.json();
      if(data.success == false){
        setLoading(false);
        setError(data.message);
        return;
    
      }
      setLoading(false);
      setError(null);
      navigate('/');
      
    }

     catch (error) {
        setError(error.message);
        setLoading(false);
    }
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Add Books</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='book name' className='border p-3 rounded-lg' id='bookName' onChange = {handleChange}/>
        <input type="text" placeholder='no of pages' className='border p-3 rounded-lg' id='pageNo' onChange = {handleChange}/>    
        
        <select className='border p-3 rounded-lg' id='isBestSeller' onChange={handleChange} defaultValue='Normal'>
            <option value='true'>Bestseller</option>
            <option value='false'>Normal Seller</option>
        </select>
        <select className='border p-3 rounded-lg' id='isBookMarked' onChange={handleChange} defaultValue='false'>
            <option value='true'>BookMark it</option>
            <option value='false'>Dont bookmark it</option>
        </select>


        <input type="number" placeholder='Ratings' className='border p-3 rounded-lg' id='rating' onChange = {handleChange}/>
        <input type="text" placeholder='Description' className='border p-3 rounded-lg' id='description' onChange = {handleChange}/>    
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? "Loading":'Add Book'}</button>
      </form>
      
      <div className="flex gap-2 mt-5">
        <p>Want to see some completed books?</p>
        <Link to={"/completed-books"}>
          <span className='text-blue-700'>Click here</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}