import React from 'react';
import styles from './CheckoutForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  getAllCartProducts,
  getDetailedCartProducts,
} from '../../../../redux/cart/cartSelectors';
import { addOrderRequest } from '../../../../redux/orders/orderThunks';
import { Error, errorMessages } from '../../../../consts/errorMesages';
import CartSummary from './CartSummary';

const CheckoutForm = () => {
  const cart = useSelector(getAllCartProducts);
  const cartProducts = useSelector(getDetailedCartProducts);

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
      <CartSummary cartData={cartProducts} />

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
            placeholder="Address ( optional )"
            autoComplete="address"
            required
          />
        </Form.Group>

        <Form.Group className={styles.inputBox}>
          <Form.Label>Note to the Seller:</Form.Label>
          <Form.Control
            {...register('message')}
            as="textarea"
            rows={3}
            placeholder="Note to the Seller ( optional )"
            autoComplete="message"
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
