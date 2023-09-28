import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getErrorState,
  getLoadingState,
  getProductsBySearchPhrase,
  searchProductsRequest,
} from '../../../redux/productsRedux';
import { Alert, Container, Spinner } from 'react-bootstrap';
import Divider from '../../layout/Divider/Divider';
import styles from './SearchResult.module.scss';
import ProductThumb from '../../layout/ProductThumb/ProductThumb';

const SearchResult = () => {
  const { searchPhrase } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(getProductsBySearchPhrase);

  const isLoading = useSelector(getLoadingState);
  const errorMessages = useSelector(getErrorState);

  useEffect(() => {
    dispatch(searchProductsRequest(searchPhrase));
  }, [dispatch, searchPhrase]);

  return (
    <Container>
      <Divider text={searchPhrase} />

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

      {!isLoading && !errorMessages && products && (
        <div className={styles.thumbsContainer}>
          {products.map((product) => (
            <ProductThumb
              data={product}
              variant="noInSwiper"
              key={product.id}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default SearchResult;
