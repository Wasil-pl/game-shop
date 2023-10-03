import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalComponent = ({
  show,
  onClose,
  onConfirm,
  headerText,
  textMessage,
  cancel,
}) => {
  return (
    <Modal show={show} onHide={onClose}>
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
        {cancel && (
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
