import React from 'react';
import { Alert, Container, Spinner } from 'react-bootstrap';
import Divider from '../../../layout/Divider/Divider';
import CheckoutForm from './CheckoutForm';
import { useDispatch, useSelector } from 'react-redux';
import ModalComponent from '../../ModalComponent/ModalComponent';
import { modalMessages } from '../../../../consts';
import { useNavigate } from 'react-router-dom';
import {
  getErrorState,
  getLoadingState,
  getSuccessState,
} from '../../../../redux/orders/orderSelectors';
import { resetOrderState } from '../../../../redux/orders/orderActions';

export const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const errorMessages = useSelector(getErrorState);
  const isLoading = useSelector(getLoadingState);
  const success = useSelector(getSuccessState);

  const handleCloseModal = () => {
    dispatch(resetOrderState());
    navigate('/');
  };

  return (
    <Container>
      <Divider text={'Checkout'} />

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

      <CheckoutForm />
      <ModalComponent
        show={success}
        onConfirm={handleCloseModal}
        headerText={modalMessages.orderSuccess.headerText}
        textMessage={modalMessages.orderSuccess.textMessage}
      />
    </Container>
  );
};
