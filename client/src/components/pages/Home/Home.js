import React, { useEffect } from 'react';
import Platforms from '../../features/Platforms/Platforms';
import SwiperSlideComponent from '../../features/SwiperSlideComponent/SwiperSlideComponent';
import Divider from '../../layout/Divider/Divider';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSaleProducts,
  getNewProducts,
  getLoadingState,
  getErrorState,
  loadProductsRequest,
} from '../../../redux/productsRedux.js';
import { Alert, Spinner } from 'react-bootstrap';

const Home = () => {
  const dispatch = useDispatch();
  const saleProducts = useSelector(getSaleProducts);
  const newProducts = useSelector(getNewProducts);

  const isLoading = useSelector(getLoadingState);
  const errorMessages = useSelector(getErrorState);

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);

  return (
    <div>
      <Divider text={'Explore our games by platform'} />
      <Platforms />

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

      <SwiperSlideComponent data={saleProducts} title="Sale" />
      <SwiperSlideComponent
        data={newProducts}
        title="New releases"
        variant="section-no-divider"
      />
    </div>
  );
};

export default Home;
