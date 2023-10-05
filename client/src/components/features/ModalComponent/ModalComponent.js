import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalComponent = ({ show, onConfirm, headerText, textMessage }) => {
  return (
    <Modal backdrop="static" keyboard={false} show={show} onHide={onConfirm}>
      <Modal.Header closeButton>
        <Modal.Title className="text-center w-100">{headerText}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <p>{textMessage}</p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="outline-info" onClick={onConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
