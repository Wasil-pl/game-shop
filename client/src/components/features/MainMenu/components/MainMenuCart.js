import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCartProducts,
  getTotalPrice,
  getTotalQuantity,
  removeAllProductsFromCart,
} from '../../../../redux/cartRedux';
import styles from './MainMenuCart.module.scss';
import { Button } from 'react-bootstrap';
import MainMenuProductCartForm from './MainMenuProductCartForm';

const MainMenuCart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(getAllCartProducts);
  const totalPrice = useSelector(getTotalPrice);
  const totalQuantity = useSelector(getTotalQuantity);

  const handleRemoveAllProducts = () => {
    dispatch(removeAllProductsFromCart());
  };

  if (cartProducts.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>My Cart ({totalQuantity})</h2>
          <a href="/cart">View All</a>
        </div>
        <div className={styles.emptyCart}>
          <p>Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>My Cart ({totalQuantity})</h2>
        <a href="/cart">View All</a>
      </div>
      <div className={styles.cart}>
        {cartProducts.map((product) => (
          <MainMenuProductCartForm product={product} key={product.id} />
        ))}
      </div>
      <div className={styles.totalPrice}>
        <h3>Total Price:</h3>
        <p>{totalPrice}zł</p>
      </div>
      <div className={styles.buttons}>
        <Button variant="primary" size="sm">
          Checkout
        </Button>
        <Button variant="secondary" size="sm">
          View Cart
        </Button>
        {totalQuantity !== 0 && (
          <Button variant="danger" size="sm" onClick={handleRemoveAllProducts}>
            Clear Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default MainMenuCart;
