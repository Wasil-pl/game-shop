import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import AllProducts from './components/pages/AllProducts/AllProducts';
import ProductsByPlatform from './components/pages/ProductsByPlatform/ProductsByPlatform';
import SearchResult from './components/pages/SearchResult/SearchResult';
import { SelectedProduct } from './components/features/SelectedProduct/index';
import { checkUserSession } from './redux/usersRedux';
import { CartProducts } from './components/features/Cart/index';
import { Checkout } from './components/features/Checkout/index';
import { Register } from './components/features/Register/index';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/allGames" element={<AllProducts />} />
        <Route
          path="/products/platform/:platform"
          element={<ProductsByPlatform />}
        />
        <Route
          path="/products/search/:searchPhrase"
          element={<SearchResult />}
        />
        <Route path="/products/:id" element={<SelectedProduct />} />
        <Route path="/cart" element={<CartProducts />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
