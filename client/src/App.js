import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadProductsRequest } from './redux/productsRedux';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { Container } from 'react-bootstrap';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);

  return (
    <MainLayout>
      <Container>
        <h1>App</h1>
      </Container>
    </MainLayout>
  );
};

export default App;
