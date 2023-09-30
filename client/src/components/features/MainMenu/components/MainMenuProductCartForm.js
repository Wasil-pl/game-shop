import React from 'react';
import { useDispatch } from 'react-redux';
import {
  decreaseProductQuantityInCart,
  increaseProductQuantityInCart,
  removeProductFromCart,
} from '../../../../redux/cartRedux';
import styles from './MainMenuProductCartForm.module.scss';
import { IMAGES_URL } from '../../../../config';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

const MainMenuProductCartForm = ({ product }) => {
  const dispatch = useDispatch();

  const handleIncrement = (data) => {
    dispatch(increaseProductQuantityInCart(data));
  };

  const handleDecrement = (data) => {
    if (data.quantity > 1) {
      dispatch(decreaseProductQuantityInCart(data));
    }
  };

  const handleDeleteProduct = (data) => {
    console.log('data:', data);
    dispatch(removeProductFromCart(data));
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
        <p>{product.totalPrice}</p>
      </div>
      <hr />
    </div>
  );
};

export default MainMenuProductCartForm;
