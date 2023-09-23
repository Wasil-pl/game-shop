import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadProductsRequest } from './redux/productsRedux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);

  return <div className="App"></div>;
};

export default App;
