import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './MainMenuProductCartForm.module.scss';
import { IMAGES_URL } from '../../../../config';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import { getTotalPrice } from '../../../../Utils/getTotalPrice';
import {
  decreaseProductQuantityInCart,
  increaseProductQuantityInCart,
  removeProductFromCart,
} from '../../../../redux/cart/cartActions';

const MainMenuProductCartForm = ({ product }) => {
  const dispatch = useDispatch();

  const totalPrice = getTotalPrice([product]);

  const handleIncrement = (data) => {
    dispatch(increaseProductQuantityInCart(data.id));
  };

  const handleDecrement = (data) => {
    dispatch(decreaseProductQuantityInCart(data.id));
  };

  const handleDeleteProduct = (data) => {
    dispatch(removeProductFromCart(data.id));
  };

  return (
    <div>
      <div key={product.id} className={styles.product}>
        <div className={styles.image}>
          <img src={IMAGES_URL + product.mainPicture} alt={product.name} />
        </div>
        <div className={styles.productInfo}>
          <h3>{product.name}</h3>
          <p>{product.platform}</p>
        </div>
      </div>
      <div className={styles.inputAndPriceBox}>
        <Trash
          className={styles.trash}
          onClick={() => handleDeleteProduct(product)}
        />
        <InputGroup as="div" size="sm" className={styles.inputGroup}>
          <Button
            variant="outline-secondary"
            onClick={() => handleDecrement(product)}
          >
            -
          </Button>
          <Form.Control value={product.quantity} readOnly />
          <Button
            variant="outline-secondary"
            onClick={() => handleIncrement(product)}
          >
            +
          </Button>
        </InputGroup>
        <p>{totalPrice}</p>
      </div>
      <hr />
    </div>
  );
};

export default MainMenuProductCartForm;
