import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function AddBookModal({ show, onHide }) {

  function handleAddBook() {
    onHide();
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add a New Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleAddBook}>Add Book</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddBookModal;
