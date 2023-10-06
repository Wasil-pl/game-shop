import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Container, Spinner } from 'react-bootstrap';
import Divider from '../../../layout/Divider/Divider';
import {
  getAllOrders,
  getErrorState,
  getLoadingState,
} from '../../../../redux/orders/orderSelectors';

import { loadOrdersRequest } from '../../../../redux/orders/orderThunks';
import OrdersControlPanelForm from './OrdersControlPanelForm';

export const OrdersControlPanel = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector(getAllOrders);

  const isLoading = useSelector(getLoadingState);
  const errorMessages = useSelector(getErrorState);

  useEffect(() => {
    dispatch(loadOrdersRequest());
  }, [dispatch]);

  return (
    <Container>
      <Divider text={'Orders Control Panel'} />

      {errorMessages && (
        <Alert className="alert" variant="danger">
          <Alert.Heading>Error</Alert.Heading>
          <hr />
          <p>{errorMessages}</p>
        </Alert>
      )}

      {isLoading && !errorMessages && (
        <div className="spinnerBox">
          <Spinner className="spinner" animation="border" variant="primary" />
        </div>
      )}
      {!isLoading && !errorMessages && allOrders && (
        <OrdersControlPanelForm data={allOrders} />
      )}
    </Container>
  );
};
