import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CompletedBooks from './components/CompletedBooks'
import About from './components/About'


function App() {
  return <BrowserRouter>
   
   <Navbar/>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/completed-books" element={<CompletedBooks />}/>
    <Route path="/about" element={<About />}/>
  </Routes>

</BrowserRouter>
}

export default App
