import React from 'react';
import styles from './CartProductForm.module.scss';
import { IMAGES_URL } from '../../../../config';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  decreaseProductQuantityInCart,
  increaseProductQuantityInCart,
  removeProductFromCart,
} from '../../../../redux/cartRedux';
import { getTotalPrice } from '../../../../Utils/getTotalPrice';
import { Trash } from 'react-bootstrap-icons';

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

  const handleRemoveProduct = () => {
    dispatch(removeProductFromCart(data.id));
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.productBox}>
          <div className={styles.image}>
            <img src={IMAGES_URL + data.mainPicture} alt={data.name} />
          </div>
          <div className={styles.productInfo}>
            <h3>{data.name}</h3>
            <p>{data.platform}</p>
            <p>PEGI: {data.pegi}</p>
            <p>Language: {data.language}</p>
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
          <Trash onClick={handleRemoveProduct} className={styles.trash} />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartProductForm;
