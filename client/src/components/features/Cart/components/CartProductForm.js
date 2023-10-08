import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartProductForm.module.scss';
import { IMAGES_URL } from '../../../../config';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getTotalPrice } from '../../../../Utils/getTotalPrice';
import { Trash } from 'react-bootstrap-icons';
import {
  decreaseProductQuantityInCart,
  increaseProductQuantityInCart,
  removeProductFromCart,
} from '../../../../redux/cart/cartActions';

const CartProductForm = ({ data }) => {
  const dispatch = useDispatch();

  const totalPrice = getTotalPrice([data]);

  const handleIncrement = (data) => {
    dispatch(increaseProductQuantityInCart(data.id));
  };

  const handleDecrement = (data) => {
    dispatch(decreaseProductQuantityInCart(data.id));
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

CartProductForm.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    salePrice: PropTypes.string,
    platform: PropTypes.string.isRequired,
    pegi: PropTypes.number.isRequired,
    language: PropTypes.string.isRequired,
    mainPicture: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
  }),
};

export default CartProductForm;
