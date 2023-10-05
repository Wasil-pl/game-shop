import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProducts,
  getErrorState,
  getLoadingState,
} from '../../../../redux/products/productSelectors';
import { Alert, Container, Spinner } from 'react-bootstrap';
import Divider from '../../../layout/Divider/Divider';
import ProductControlPanelForm from './ProductControlPanelForm';
import { loadProductsRequest } from '../../../../redux/products/productThunks';

export const ProductControlPanel = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(getAllProducts);

  const isLoading = useSelector(getLoadingState);
  const errorMessages = useSelector(getErrorState);

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);

  return (
    <Container>
      <Divider text={'Product Control Panel'} />

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
      {!isLoading && !errorMessages && allProducts && (
        <ProductControlPanelForm data={allProducts} />
      )}
    </Container>
  );
};
