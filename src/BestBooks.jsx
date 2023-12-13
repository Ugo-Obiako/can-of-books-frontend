import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Book from "./Book";
import AddBookModal from './AddBookModal';

function BestBooks({ books, onAddBook }) {

  const [showAddBookModal, setShowAddBookModal] = useState(false);

  function openAddBookForm() {
    setShowAddBookModal(true);
  }

  function hideAddBookForm() {
    setShowAddBookModal(false);
  }

  const booksLibrary = 
  
    books.map(book =>
    <Carousel.Item key={book._id}>
      <Book title={book.title} description={book.description} />
    </Carousel.Item>
  )

  return (
    <>

      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

      <Carousel interval={null} style={{ width: '400px', backgroundColor: 'black' }}>
        {booksLibrary}
      </Carousel>

      <Button onClick={openAddBookForm}>Add Book</Button>

      <AddBookModal show={showAddBookModal} onHide={hideAddBookForm} onAddBook={onAddBook} />

    </>
  )
}

export default BestBooks;
