import React, { useState } from 'react';
import styles from './OrderStatusChange.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { orderStatusOptions } from '../../../../consts/constants';
import { Error, errorMessages } from '../../../../consts/errorMesages';

const OrderStatusChange = ({ action, defaultValues }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm({ defaultValues });

  const [selectedStatus, setSelectedStatus] = useState(defaultValues);

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
          <Form.Label>Status:</Form.Label>
          <Form.Control
            {...register('status', { required: errorMessages.required })}
            as="select"
            placeholder="status"
            autoComplete="status"
            required
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            {orderStatusOptions.map((status) => (
              <option key={status}>{status}</option>
            ))}
          </Form.Control>
          {errors.status && <Error>{errors.status?.message}</Error>}
        </Form.Group>

        <Form.Group className={styles.buttonBox}>
          <Button type="submit" variant="primary">
            confirm
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default OrderStatusChange;
