import React from 'react';
import styles from './UserOrdersForm.module.scss';
import { Card, ListGroup } from 'react-bootstrap';

const UserOrdersForm = ({ orders, firstName }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.welcomeText}> Welcome {firstName} </h1>
      <p>Here are your orders:</p>
      <div className={styles.cardContainer}>
        {orders.map((order) => (
          <Card className={styles.card}>
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
                  <div key={item.product.name}>
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

export default UserOrdersForm;
