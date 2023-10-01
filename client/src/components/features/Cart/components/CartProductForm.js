import React from 'react';
import styles from './CartProductForm.module.scss';
import { IMAGES_URL } from '../../../../config';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  decreaseProductQuantityInCart,
  increaseProductQuantityInCart,
} from '../../../../redux/cartRedux';
import { getTotalPrice } from '../../../../Utils/cartFunctions';

const CartProductForm = ({ data }) => {
  const dispatch = useDispatch();

  const totalPrice = getTotalPrice([data]);

  const handleIncrement = (data) => {
    dispatch(increaseProductQuantityInCart(data.id));
  };

  const handleDecrement = (data) => {
    if (data.quantity > 1) {
      dispatch(decreaseProductQuantityInCart(data.id));
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.productBox}>
          <div className={styles.image}>
            <img src={IMAGES_URL + data.mainPicture} alt={data.name} />
          </div>
        </div>
        <div className={styles.inputBox}>
          <InputGroup as="div" size="sm" className={styles.inputGroup}>
            <Button
              variant="outline-secondary"
              onClick={() => handleDecrement(data)}
            >
              -
            </Button>
            <Form.Control value={data.quantity} readOnly />
            <Button
              variant="outline-secondary"
              onClick={() => handleIncrement(data)}
            >
              +
            </Button>
          </InputGroup>
        </div>
        <div className={styles.priceBox}>
          <p>{totalPrice} zł</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartProductForm;
