import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const SERVER = import.meta.env.VITE_SERVER_URL;

function AddBookModal({ show, onHide, onAddBook }) {

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();

  function handleChange(event) {
    const formField = event.target.id;
    if(formField === 'title') {
      setTitle(event.target.value);
    } else if (formField === 'description') {
      setDescription(event.target.value);
    } else if (formField === 'status') {
      setStatus(event.target.checked)
    }
  }

  function handleAddBook() {
    onHide();
    onAddBook({
      title: title,
      description: description,
      status: status
    });
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add a New Book</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Stack gap={3}>
            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control required onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group controlId='description'>
              <Form.Label>Book Description</Form.Label>
              <Form.Control required onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group controlId='status'>
              <Form.Label>Do you have it?</Form.Label>
              <br />
              <span> No </span><Form.Check type='switch' label='Yes' defaultChecked inline onChange={handleChange}></Form.Check>
            </Form.Group>
          </Stack>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleAddBook}>Add Book</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddBookModal;
