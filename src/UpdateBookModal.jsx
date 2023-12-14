import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function UpdateBookModal({ show, onHide }) {

  function handleUpdateBook() {
    onHide();
    // onAddBook({
    //   title: title,
    //   description: description,
    //   status: status
    // });
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Update Book Information</Modal.Title>
      </Modal.Header>

      <Modal.Body>

      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleUpdateBook}>Update Book</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UpdateBookModal;
