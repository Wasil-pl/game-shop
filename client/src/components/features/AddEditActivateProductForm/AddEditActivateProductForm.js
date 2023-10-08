import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddEditActivateProductForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../consts/errorMesages';

const AddEditActivateProductForm = ({ action, defaultValues, actionText }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    action(data);
  };

  return (
    <div className={styles.container}>
      <Form
        className={styles.formLayout}
        noValidate
        onSubmit={validate(handleSubmit)}
      >
        <Form.Group className={styles.inputBox}>
          <Form.Label>Activate Product:</Form.Label>
          <Form.Control
            {...register('isActive', { required: errorMessages.required })}
            as="select"
            placeholder="Activate Product"
            autoComplete="isActive"
            required
          >
            <option>true</option>
            <option>false</option>
          </Form.Control>
          {errors.isActive && <Error>{errors.isActive?.message}</Error>}
        </Form.Group>

        <Form.Group className={styles.buttonBox}>
          <Button type="submit" variant="primary">
            {actionText}
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

AddEditActivateProductForm.propTypes = {
  action: PropTypes.func.isRequired,
  defaultValues: PropTypes.object,
  actionText: PropTypes.string.isRequired,
};

export default AddEditActivateProductForm;
