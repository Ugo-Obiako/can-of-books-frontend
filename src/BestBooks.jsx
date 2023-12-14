import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Book from "./Book";
import AddBookModal from './AddBookModal';
import UpdateBookModal from './UpdateBookModal';

const SERVER = import.meta.env.VITE_SERVER_URL;

function BestBooks() {

  const [books, setBooks] = useState([]);
  const [showAddBookModal, setShowAddBookModal] = useState(false);
  const [showUpdateBookModal, setShowUpdateBookModal] = useState(false);
  const [bookToUpdate, setBookToUpdate] = useState({});

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const url = `${SERVER}/books`;

    try {
      const response = await axios.get(url);
      setBooks(response.data);
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

  async function deleteBook(bookID) {
    const url = `${SERVER}/books/${bookID}`;

    try {
      await axios.delete(url);
    } catch (error) {
      console.error(error);
    }

    fetchBooks();
  }

  async function updateBook(book) {
    
    const url = `${SERVER}/books/${bookToUpdate._id}`;

    if (book.title === undefined) {
      book.title = bookToUpdate.title;
    }
    if (book.description === undefined) {
      book.description = bookToUpdate.description;
    }
    if (book.status === undefined) {
      book.status = bookToUpdate.status;
    }

    console.log(book);

    try {
      await axios.post(url, book);
    } catch (error) {
      console.error(error);
    }

    fetchBooks();
  }

  // show/hide AddBookModal
  function openAddBookForm() {
    setShowAddBookModal(true);
  }
  function hideAddBookForm() {
    setShowAddBookModal(false);
  }

  // show/hide UpdateBookModal
  function openUpdateBookForm(book) {
    setBookToUpdate(book);
    setShowUpdateBookModal(true);
  }
  function hideUpdateBookForm() {
    setShowUpdateBookModal(false);
  }

  return (
    <Container>

      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

      <Carousel interval={null} style={{ width: '400px', backgroundColor: 'black' }}>
        {books.length ?
          (books.map(book =>
            <Carousel.Item key={book._id}>
              <Book book={book} title={book.title} description={book.description} id={book._id} status={book.status} onDelete={deleteBook} onUpdate={openUpdateBookForm} />
            </Carousel.Item>
          )) : null}
      </Carousel>

      <Button onClick={openAddBookForm}>Add Book</Button>

      <AddBookModal show={showAddBookModal} onHide={hideAddBookForm} onAddBook={addBookRequest} />

      <UpdateBookModal show={showUpdateBookModal} onHide={hideUpdateBookForm} bookToUpdate={bookToUpdate} onUpdateBook={updateBook} />

    </Container>
  )
}

export default BestBooks;
