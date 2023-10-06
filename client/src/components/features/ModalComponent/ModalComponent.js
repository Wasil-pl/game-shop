import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalComponent = ({
  show,
  onClose,
  headerText,
  textMessage,
  onCancel,
}) => {
  return (
    <Modal
      backdrop="static"
      keyboard={false}
      show={show}
      onHide={onCancel || onClose}
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-center w-100">{headerText}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <p>{textMessage}</p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="outline-info" onClick={onClose}>
          Confirm
        </Button>
        {onCancel && (
          <Button variant="outline-info" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
