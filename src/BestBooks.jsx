import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Book from "./Book";
import AddBookModal from './AddBook';

function BestBooks(props) {

  const [showAddBookModal, setShowAddBookModal] = useState(false);

  function openAddBookForm() {
    setShowAddBookModal(true);
  }

  function hideAddBookForm() {
    setShowAddBookModal(false);
  }

  return (
    <>

      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

      {props.books.length ? (
        <Carousel interval={null} style={{ width: '400px', backgroundColor: 'black' }}>
          {props.books.map(book =>
            <Carousel.Item key={book._id}>
              <Book title={book.title} description={book.description} />
            </Carousel.Item>
          )}
        </Carousel>
      ) : (
        <h3>No Books Found </h3>
      )}

      <Button onClick={openAddBookForm}>Add Book</Button>

      <AddBookModal show={showAddBookModal} onHide={hideAddBookForm} />

    </>
  )
}

export default BestBooks;
