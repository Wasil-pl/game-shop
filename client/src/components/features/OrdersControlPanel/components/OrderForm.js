import React, { useState } from 'react';
import styles from './OrderForm.module.scss';
import { Card, ListGroup } from 'react-bootstrap';
import OrderStatusChange from './OrderStatusChange';
import ModalComponent from '../../ModalComponent/ModalComponent';
import { useDispatch } from 'react-redux';
import { editOrderStatusRequest } from '../../../../redux/orders/orderThunks';
import { modalMessages } from '../../../../consts/modalMessages';

const OrderForm = ({ order }) => {
  const dispatch = useDispatch();

  const [pendingStatusChange, setPendingStatusChange] = useState(null);
  const clearPendingStatusChange = () => setPendingStatusChange(null);

  const handleStatusChange = (data) => {
    dispatch(editOrderStatusRequest(data, order.id));
    clearPendingStatusChange();
  };

  return (
    <div>
      <Card className={styles.cardForm}>
        <Card.Header>
          <strong>Zamówienie ID:</strong> {order.id}
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Created Date:</strong> {order.createdAt}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>City:</strong> {order.city}
          </ListGroup.Item>
          <strong>
            <ListGroup.Item>
              <strong>Postal Code:</strong> {order.postalCode}
            </ListGroup.Item>
          </strong>
          <ListGroup.Item>
            <strong>Street:</strong> {order.street}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Address:</strong> {order?.address}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Status:</strong> {order.status}{' '}
            <OrderStatusChange
              action={setPendingStatusChange}
              actionText="Edit Product"
              defaultValues={order.status}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Total price:</strong> {order.totalPrice}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Total quantity:</strong> {order.totalQuantity}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Message:</strong> {order?.message}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>User email:</strong> {order.user?.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>User first name:</strong> {order.user?.firstName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>User ID:</strong> {order.userId}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Products</strong>:
            {order.items.map((item) => (
              <div key={item.id}>
                <strong>Name:</strong> {item.product.name}
                <br />
                <strong>Price:</strong> {item.product.price}
                <br />
                <strong>Sale price:</strong>
                {item.product?.salePrice}
                <br />
                <hr />
              </div>
            ))}
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <ModalComponent
        show={!!pendingStatusChange}
        onClose={() => handleStatusChange(pendingStatusChange)}
        headerText={modalMessages.statusChangeConfirm.headerText(
          pendingStatusChange?.id,
        )}
        textMessage={modalMessages.statusChangeConfirm.textMessage}
        onCancel={clearPendingStatusChange}
        actionText="Edit"
      />
    </div>
  );
};

export default OrderForm;
