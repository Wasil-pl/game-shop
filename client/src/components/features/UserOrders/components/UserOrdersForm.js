import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserOrdersForm.module.scss';
import { Card, ListGroup } from 'react-bootstrap';

const UserOrdersForm = ({ orders, firstName }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.welcomeText}> Welcome {firstName} </h1>
      <p>Here are your orders:</p>
      <div className={styles.cardContainer}>
        {orders.map((order) => (
          <Card key={order.id} className={styles.card}>
            <Card.Header>
              <strong>Order ID:</strong> {order.id}
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Created At:</strong> {order.createdAt}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Last Updated:</strong> {order.updatedAt}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Total Quantity:</strong> {order.totalQuantity}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Total Price:</strong> {order.totalPrice}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Status:</strong> {order.status}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Delivery Address:</strong> {order.street}, {order.city},{' '}
                {order.postalCode}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Products:</strong>
                {order.items.map((item) => (
                  <div key={`${item.product.name}-${item.product.platform}`}>
                    {item.product.name} ({item.product.platform}) - Quantity:{' '}
                    {item.quantity}
                  </div>
                ))}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
      </div>
    </div>
  );
};

UserOrdersForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      totalQuantity: PropTypes.number.isRequired,
      totalprice: PropTypes.string,
      status: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      postalCode: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          quantity: PropTypes.number.isRequired,
          product: PropTypes.shape({
            name: PropTypes.string.isRequired,
            platform: PropTypes.string.isRequired,
          }),
        }),
      ),
    }),
  ),
};

export default UserOrdersForm;
