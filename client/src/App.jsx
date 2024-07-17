import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CompletedBooks from './components/CompletedBooks'
import About from './components/About'
import AddBooks from './components/AddBooks'
import BookDetail from './components/BookDetail'
import Bookmarks from './components/Bookmarks'
import SearchResults from './components/SearchResults';


function App() {
  return <BrowserRouter>
   
   <Navbar/><br />
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/completed-books" element={<CompletedBooks />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/add-books" element={<AddBooks/>}/>
    <Route path="/books/:id" element={<BookDetail/>}></Route>
    <Route path="/bookmarks" element={<Bookmarks/>}></Route>
    <Route path="/search" element={<SearchResults />} />


  </Routes>

</BrowserRouter>
}

export default App
