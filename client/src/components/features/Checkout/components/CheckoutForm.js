import React from 'react';
import styles from './CheckoutForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../../consts';
import { getAllCartProducts } from '../../../../redux/cartRedux';
import { addOrderRequest } from '../../../../redux/ordersRedux';

const CheckoutForm = () => {
  const cart = useSelector(getAllCartProducts);

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    dispatch(addOrderRequest({ orderData: data, items: cart }));
  };

  return (
    <div className={styles.container}>
      <Form
        className={styles.formLogin}
        noValidate
        onSubmit={validate(handleSubmit)}
      >
        <Form.Group className={styles.inputBox}>
          <Form.Label>City:</Form.Label>
          <Form.Control
            {...register('city', {
              required: errorMessages.required,
            })}
            type="city"
            placeholder="city"
            autoComplete="city"
            required
          />
          {errors.city && <Error>{errors.city?.message}</Error>}
        </Form.Group>
        <Form.Group className={styles.inputBox}>
          <Form.Label>Street:</Form.Label>
          <Form.Control
            {...register('street', {
              required: errorMessages.required,
            })}
            type="street "
            placeholder="Street"
            autoComplete="street"
            required
          />
          {errors.street && <Error>{errors.street?.message}</Error>}
        </Form.Group>
        <Form.Group className={styles.inputBox}>
          <Form.Label>Postal code:</Form.Label>
          <Form.Control
            {...register('postalCode', {
              required: errorMessages.required,
            })}
            type="postalCode "
            placeholder="Postal Code"
            autoComplete="postalCode"
            required
          />
          {errors.postalCode && <Error>{errors.postalCode?.message}</Error>}
        </Form.Group>
        <Form.Group className={styles.inputBox}>
          <Form.Label>Address:</Form.Label>
          <Form.Control
            {...register('address')}
            type="address "
            placeholder="Address ( optional )"
            autoComplete="address"
            required
          />
        </Form.Group>
        <Form.Group className={styles.buttonBox}>
          <Button type="submit" variant="primary">
            Checkout
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default CheckoutForm;
