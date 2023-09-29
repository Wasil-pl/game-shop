import React, { useEffect, useState } from 'react';
import ProductThumb from '../../layout/ProductThumb/ProductThumb';
import { Alert, Container, Spinner } from 'react-bootstrap';
import Divider from '../../layout/Divider/Divider';
import styles from './ProductsByPlatform.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getErrorState,
  getLoadingState,
  getProductsByPlatform,
  loadProductsByPlatformRequest,
} from '../../../redux/productsRedux';
import { getScreenMode } from '../../../redux/screenSizeRedux';
import { getProductsPerPage } from '../../../Utils.js/GetProductsPerPage';
import CustomPagination from '../../features/CustomPagination/CustomPagination';
import clsx from 'clsx';

const ProductsByPlatform = () => {
  const { platform } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [fade, setFade] = useState(false);
  const dispatch = useDispatch();

  const screenMode = useSelector(getScreenMode);

  useEffect(() => {
    dispatch(loadProductsByPlatformRequest(platform));
  }, [dispatch, platform]);

  const products = useSelector(getProductsByPlatform);
  const isLoading = useSelector(getLoadingState);
  const errorMessages = useSelector(getErrorState);

  const productsPerPage = getProductsPerPage(screenMode);
  const pagesCount = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page) => {
    setFade(true);
    setTimeout(() => {
      setCurrentPage(page);

      setTimeout(() => {
        setFade(false);
      }, 0);
    }, 500);
  };

  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;

  return (
    <Container>
      <Divider text={platform} />

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
        <div
          className={clsx(styles.thumbsContainer, {
            [styles.fadeOut]: fade,
            [styles.fadeIn]: !fade,
          })}
        >
          {products.slice(start, end).map((product) => (
            <ProductThumb
              data={product}
              variant="noInSwiper"
              key={product.id}
            />
          ))}
        </div>
      )}
      <CustomPagination
        pagesCount={pagesCount}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </Container>
  );
};

export default ProductsByPlatform;
