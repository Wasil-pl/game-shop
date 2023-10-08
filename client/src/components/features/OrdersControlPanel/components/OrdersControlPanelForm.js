import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrdersControlPanelForm.module.scss';
import OrderForm from './OrderForm';
import Divider from '../../../layout/Divider/Divider';
import ModalComponent from '../../ModalComponent/ModalComponent';
import { useDispatch, useSelector } from 'react-redux';
import { resetOrderState } from '../../../../redux/orders/orderActions';
import { getEditOrderSuccessState } from '../../../../redux/orders/orderSelectors';
import { modalMessages } from '../../../../consts/modalMessages';

const OrdersControlPanelForm = ({ data }) => {
  const dispatch = useDispatch();
  const sortedData = data.toSorted((a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt);
  });

  const ordersToDeliver = sortedData.filter(
    (order) => order.status !== 'DELIVERED',
  );
  const deliveredOrders = sortedData.filter(
    (order) => order.status === 'DELIVERED',
  );

  const success = useSelector(getEditOrderSuccessState);

  const handleCloseModal = () => {
    dispatch(resetOrderState());
  };

  return (
    <div>
      <Divider text="Orders to deliver" variant={'secondLine'} />
      <div className={styles.ordersContainer}>
        {ordersToDeliver.map((order) => (
          <OrderForm key={order.id} order={order} />
        ))}
      </div>
      <Divider text="Orders delivered" />
      <div className={styles.ordersContainer} variant={'secondLine'}>
        {deliveredOrders.map((order) => (
          <OrderForm key={order.id} order={order} />
        ))}
      </div>

      <ModalComponent
        show={success}
        onClose={handleCloseModal}
        headerText={modalMessages.editOrderSuccess.headerText}
        textMessage={modalMessages.editOrderSuccess.textMessage}
      />
    </div>
  );
};

OrdersControlPanelForm.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      postalCode: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      address: PropTypes.string,
      totalprice: PropTypes.string,
      totalQuantity: PropTypes.number.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          quantity: PropTypes.number.isRequired,
          product: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            platform: PropTypes.string.isRequired,
            isActive: PropTypes.bool.isRequired,
            createdAt: PropTypes.string.isRequired,
            updatedAt: PropTypes.string.isRequired,
          }),
        }),
      ),
    }),
  ),
};

export default OrdersControlPanelForm;
