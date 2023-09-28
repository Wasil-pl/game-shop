import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  loadProductsRequest,
  getLoadingState,
  getErrorState,
} from './redux/productsRedux';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import { Alert, Spinner } from 'react-bootstrap';
import AllProducts from './components/pages/AllProducts/AllProducts';
import ProductsByPlatform from './components/pages/ProductsByPlatform/ProductsByPlatform';
import SearchResult from './components/pages/SearchResult/SearchResult';

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getLoadingState);
  const errorMessages = useSelector(getErrorState);

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);

  return (
    <MainLayout>
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

      <Routes>
        {!isLoading && !errorMessages && <Route path="/" element={<Home />} />}
        <Route path="/products/allGames" element={<AllProducts />} />
        <Route
          path="/products/platform/:platform"
          element={<ProductsByPlatform />}
        />
        <Route
          path="/products/search/:searchPhrase"
          element={<SearchResult />}
        />
      </Routes>
    </MainLayout>
  );
};

export default App;
