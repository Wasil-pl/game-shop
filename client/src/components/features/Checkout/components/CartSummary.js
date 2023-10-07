import React from 'react';
import styles from './CartSummary.module.scss';
import { useSelector } from 'react-redux';
import {
  getDetailedCartProducts,
  getTotalQuantity,
} from '../../../../redux/cart/cartSelectors';
import { getTotalPrice } from '../../../../Utils/getTotalPrice';

const CartSummary = () => {
  const cartProducts = useSelector(getDetailedCartProducts);
  const totalQuantity = useSelector(getTotalQuantity);
  const totalPrice = getTotalPrice(cartProducts);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cart Summary</h2>
      <div className={styles.cart}>
        <div className={styles.cartProducts}>
          {cartProducts.map((product) => (
            <div className={styles.product} key={product.id}>
              <div className={styles.productInfo}>
                <h3>{product.name}</h3>
                <p>{product.platform}</p>
                <p>PEGI: {product.pegi}</p>
                <p>Language: {product.language}</p>
              </div>
              <div>
                <p>Quantity: {product.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.totalPrice}>
          <p>
            Total Quantity: <strong>{totalQuantity}</strong>
          </p>
          <p>
            Total Price: <strong>{totalPrice}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
