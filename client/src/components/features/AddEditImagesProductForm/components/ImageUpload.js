import React from 'react';
import styles from './AddEditImagesProductForm.module.scss';
import { Form } from 'react-bootstrap';
import { Error } from '../../../../consts';

const ImageUpload = ({ label, onFileChange, error }) => (
  <Form.Group className={styles.inputBox}>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      onChange={(e) => onFileChange(e.target.files[0])}
      type="file"
      placeholder={label}
      autoComplete={label}
    />
    {error && <Error>{error}</Error>}
  </Form.Group>
);

export default ImageUpload;
