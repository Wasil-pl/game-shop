import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalComponent = ({ show, onConfirm, headerText, textMessage }) => {
  return (
    <Modal show={show} onHide={onConfirm}>
      <Modal.Header closeButton>
        <Modal.Title>{headerText}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{textMessage}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
