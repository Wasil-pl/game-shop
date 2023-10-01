import React from 'react';
import styles from './CartProducts.module.scss';
import { Container } from 'react-bootstrap';
import CartProductForm from './CartProductForm';
import { useSelector } from 'react-redux';
import { getDetailedCartProducts } from '../../../../redux/cartRedux';
import { Cart } from 'react-bootstrap-icons';
import Divider from '../../../layout/Divider/Divider';

export const CartProducts = () => {
  const products = useSelector(getDetailedCartProducts);
  return (
    <Container className={styles.container}>
      <Divider text={'Cart'} />
      <div className={styles.titleBox}>
        <h2>Your Shopping Cart</h2>
        <div className={styles.cartIcon}>
          <Cart />
          Empty Cart
        </div>
      </div>
      <div className={styles.columnNames}>
        <div className={styles.columnProduct}>Product</div>
        <div className={styles.columnQuantity}>Quantity</div>
        <div className={styles.columnPrice}>Price</div>
      </div>
      <hr />
      <div className={styles.cartBox}>
        {products.map((product) => (
          <CartProductForm key={product.id} data={product} />
        ))}
      </div>
    </Container>
  );
};
