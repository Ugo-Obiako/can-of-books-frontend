import axios from 'axios';
import { useState, useEffect } from 'react';


const SERVER = import.meta.env.VITE_SERVER_URL;

function BestBooks () {
const [books, setBooks] = useState([]);

useEffect(() => {
  fetchBooks();
}, []);

async function fetchBooks () {
  const url = `${SERVER}/books`;

  try {
    const response = await axios.get(url);
    setBooks(response.data);
  } catch (error) {
    console.error(error);
  }

  
}


console.log(books)

  return (
    <>
      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

      {books.length ? (
        <p>Book Carousel coming soon</p>
      ) : (
        <h3>No Books Found </h3>
      )}
    </>
  )
}
    
  /* TODO: Make a GET request to your API to fetch all the books from the database  */


    /* TODO: render all the books in a Carousel */

    
export default BestBooks;
