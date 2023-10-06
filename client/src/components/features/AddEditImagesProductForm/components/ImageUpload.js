import React from 'react';
import styles from './ImageUpload.module.scss';
import { Form } from 'react-bootstrap';
import { Error } from '../../../../consts';

const ImageUpload = ({ label, onFileChange, error, selectedFileName }) => (
  <Form.Group className={styles.inputBoxImageUpload}>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      onChange={(e) => onFileChange(e.target.files[0])}
      type="file"
      placeholder={label}
      autoComplete={label}
    />
    {selectedFileName && (
      <div className={styles.fileName}>{selectedFileName}</div>
    )}
    {error && <Error>{error}</Error>}
  </Form.Group>
);

export default ImageUpload;
