import React, { useEffect, useState } from 'react';
import styles from './CartProducts.module.scss';
import { Button, Container } from 'react-bootstrap';
import CartProductForm from './CartProductForm';
import { useDispatch, useSelector } from 'react-redux';
import { Cart } from 'react-bootstrap-icons';
import Divider from '../../../layout/Divider/Divider';
import { getTotalPrice } from '../../../../Utils/getTotalPrice';
import { useNavigate } from 'react-router-dom';
import { getLoggedState } from '../../../../redux/users/userSelectors';
import ModalComponent from '../../ModalComponent/ModalComponent';
import { modalMessages } from '../../../../consts';
import { getDetailedCartProducts } from '../../../../redux/cart/cartSelectors';
import { removeAllProductsFromCart } from '../../../../redux/cart/cartActions';
import { resetOrderState } from '../../../../redux/orders/orderActions';

export const CartProducts = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(getDetailedCartProducts);
  const isLogged = useSelector(getLoggedState);

  useEffect(() => {
    dispatch(resetOrderState());
  }, [dispatch]);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleClearCart = () => {
    dispatch(removeAllProductsFromCart());
  };

  const handleCheckout = () => {
    if (!isLogged) return handleShowModal(true);

    navigate('/checkout');
  };

  const totalPrice = getTotalPrice(products);

  return (
    <Container className={styles.container}>
      <Divider text={'Cart'} />
      <div className={styles.titleBox}>
        <h2>Your Shopping Cart</h2>
        <div onClick={handleClearCart} className={styles.cartIcon}>
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

      <div className={styles.totalPriceBox}>
        <h3>
          <span className={styles.totalPrice}>Total Price:</span>
          {totalPrice} zł
        </h3>
        <Button
          onClick={handleCheckout}
          className={styles.checkoutButton}
          variant="primary"
        >
          Checkout
        </Button>
      </div>

      <ModalComponent
        show={showModal}
        onConfirm={handleCloseModal}
        headerText={modalMessages.loginRequired.headerText}
        textMessage={modalMessages.loginRequired.textMessage}
      />
    </Container>
  );
};
