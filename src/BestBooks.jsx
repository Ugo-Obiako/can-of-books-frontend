import { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Book from "./Book";
import AddBookModal from './AddBookModal';

const SERVER = import.meta.env.VITE_SERVER_URL;

function BestBooks() {

  const [showAddBookModal, setShowAddBookModal] = useState(false);

  function openAddBookForm() {
    setShowAddBookModal(true);
  }

  function hideAddBookForm() {
    setShowAddBookModal(false);
  }

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const url = `${SERVER}/books`;

    try {
      const response = await axios.get(url);
      setBooks(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function addBookRequest(bookToAdd) {
    const url = `${SERVER}/books`;

    try {
      await axios.post(url, bookToAdd);
    } catch (error) {
      console.error(error);
    }

    fetchBooks();
  }

  return (
    <>

      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

      <Carousel interval={null} style={{ width: '400px', backgroundColor: 'black' }}>
        {books.length ?
          (books.map(book =>
            <Carousel.Item key={book._id}>
              <Book title={book.title} description={book.description} />
            </Carousel.Item>
          )) : null}
      </Carousel>

      <Button onClick={openAddBookForm}>Add Book</Button>

      <AddBookModal show={showAddBookModal} onHide={hideAddBookForm} onAddBook={addBookRequest} />

    </>
  )
}

export default BestBooks;
