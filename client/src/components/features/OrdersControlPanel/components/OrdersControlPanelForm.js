import React from 'react';
import styles from './OrdersControlPanelForm.module.scss';
import OrderForm from './OrderForm';

const OrdersControlPanelForm = ({ data }) => {
  const sortedData = data.toSorted((a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt);
  });

  return (
    <div>
      {
        <div className={styles.ordersContainer}>
          {sortedData.map((order) => (
            <OrderForm key={order.id} order={order} />
          ))}
        </div>
      }
    </div>
  );
};

export default OrdersControlPanelForm;
