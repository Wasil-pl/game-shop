import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Container, Spinner } from 'react-bootstrap';
import Divider from '../../../layout/Divider/Divider';
import { loadUserRequest } from '../../../../redux/users/userThunks';
import {
  getUsersLoadingState,
  getUsersErrorState,
  getUser,
} from '../../../../redux/users/userSelectors';
import UserOrdersForm from './UserOrdersForm';

export const UserOrders = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getUsersLoadingState);
  const errorMessages = useSelector(getUsersErrorState);

  useEffect(() => {
    dispatch(loadUserRequest());
  }, [dispatch]);

  const user = useSelector(getUser);
  console.log('user:', user);
  const firstName = user?.firstName;
  const orders = user?.orders;

  return (
    <Container>
      <Divider text={'My Orders'} />

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

      {!isLoading && !errorMessages && user && (
        <UserOrdersForm orders={orders} firstName={firstName} />
      )}
    </Container>
  );
};
