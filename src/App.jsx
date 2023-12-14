// import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {

  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   fetchBooks();
  // }, []);

  // async function fetchBooks() {
  //   const url = `${SERVER}/books`;

  //   try {
  //     const response = await axios.get(url);
  //     setBooks(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // async function addBookRequest(bookToAdd) {
  //   const url = `${SERVER}/books`;

  //   try {
  //     await axios.post(url, bookToAdd);
  //   } catch (error) {
  //     console.error(error);
  //   }

  //   fetchBooks();
  // }

  return (
    <>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route exact path="/" element={<BestBooks />} />
          <Route exact path="/About" element={<About />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App;
