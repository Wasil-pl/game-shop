import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Alert, Container, Spinner } from 'react-bootstrap';
import Divider from '../../../layout/Divider/Divider';
import {
  getErrorState,
  getLoadingState,
  getProductById,
  loadProductByIdRequest,
} from '../../../../redux/productsRedux';
import SelectedProductForm from './SelectedProductForm';

export const SelectedProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductByIdRequest(id));
  }, [dispatch, id]);

  const product = useSelector(getProductById);
  const isLoading = useSelector(getLoadingState);
  const errorMessages = useSelector(getErrorState);

  return (
    <Container>
      <Divider text={product.name} />
      <Divider text={product.platform} variant={'secondLine'} />

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

      {!isLoading && !errorMessages && product && (
        <SelectedProductForm data={product} />
      )}
    </Container>
  );
};
