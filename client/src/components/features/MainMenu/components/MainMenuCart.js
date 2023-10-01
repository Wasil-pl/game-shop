import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDetailedCartProducts,
  getTotalQuantity,
  removeAllProductsFromCart,
} from '../../../../redux/cartRedux';
import styles from './MainMenuCart.module.scss';
import { Button } from 'react-bootstrap';
import MainMenuProductCartForm from './MainMenuProductCartForm';
import { Link, useNavigate } from 'react-router-dom';
import { getTotalPrice } from '../../../../Utils/cartFunctions';
import { maxDisplayedProducts } from '../../../../consts';

const MainMenuCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartProducts = useSelector(getDetailedCartProducts);

  const totalQuantity = useSelector(getTotalQuantity);
  const totalPrice = getTotalPrice(cartProducts);

  const handleRemoveAllProducts = () => {
    dispatch(removeAllProductsFromCart());
  };

  const handleViewCart = (e) => {
    e.preventDefault();
    navigate(`/cart`);
  };

  if (cartProducts.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>My Cart ({totalQuantity})</h2>
          <Link to="/cart">View All</Link>
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
        <Link to="/cart">View All</Link>
      </div>
      <div className={styles.cart}>
        {cartProducts.slice(0, maxDisplayedProducts).map((product) => (
          <MainMenuProductCartForm product={product} key={product.id} />
        ))}
        {cartProducts.length > maxDisplayedProducts && (
          <div className={styles.moreProductsIndicator}>And more ...</div>
        )}
      </div>
      <div className={styles.totalPrice}>
        <h3>Total Price:</h3>
        <p>{totalPrice}zł</p>
      </div>
      <div className={styles.buttons}>
        <Button onClick={handleViewCart} variant="secondary" size="sm">
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
