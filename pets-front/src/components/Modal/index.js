import React from "react";
import { Modal, Button } from "react-bootstrap";

function MyModal({ showModal, onCloseModal, title, message }) {
  return (
    <Modal show={showModal} onHide={onCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onCloseModal} variant="primary">
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;
