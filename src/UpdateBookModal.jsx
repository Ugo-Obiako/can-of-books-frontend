import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function UpdateBookModal({ show, onHide, bookToUpdate, onUpdateBook }) {

  const [title, setTitle] = useState(bookToUpdate.title);
  const [description, setDescription] = useState(bookToUpdate.description);
  const [status, setStatus] = useState(bookToUpdate.status);

  function handleChange(event) {
    const formField = event.target.id;
    if (formField === 'title') {
      setTitle(event.target.value);
    } else if (formField === 'description') {
      setDescription(event.target.value);
    } else if (formField === 'status') {
      setStatus(event.target.checked)
    }
  }

  function handleUpdateBook() {
    onHide();
    onUpdateBook({
      title: title,
      description: description,
      status: status
    });
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Update Book Information</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Stack gap={3}>
            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control placeholder={bookToUpdate.title} required onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group controlId='description'>
              <Form.Label>Book Description</Form.Label>
              <Form.Control placeholder={bookToUpdate.description} required onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group controlId='status'>
              <Form.Label>Do you have it?</Form.Label>
              <br />
              <span> No </span><Form.Check type='switch' label='Yes' checked={bookToUpdate.status} inline onChange={handleChange}></Form.Check>
            </Form.Group>
          </Stack>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleUpdateBook}>Update Book</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UpdateBookModal;
