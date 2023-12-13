import axios from 'axios';
import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Book from "./Book";
import Accordion from 'react-bootstrap/Accordion';

const SERVER = import.meta.env.VITE_SERVER_URL;

function BestBooks(props) {




  return (
    <>
      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

      {props.books.length ? (
        <Carousel style={{ width:'400px', backgroundColor: 'black'}}>
          {props.books.map(book =>
            <Carousel.Item key={book._id}>
              <Book title={book.title} description={book.description} />
            </Carousel.Item>
          )}
        </Carousel>
      ) : (
        <h3>No Books Found </h3>
      )}
    </>
  )
}

/* TODO: Make a GET request to your API to fetch all the books from the database  */


/* TODO: render all the books in a Carousel */


export default BestBooks;
