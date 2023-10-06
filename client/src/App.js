import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import AllProducts from './components/pages/AllProducts/AllProducts';
import ProductsByPlatform from './components/pages/ProductsByPlatform/ProductsByPlatform';
import SearchResult from './components/pages/SearchResult/SearchResult';
import { SelectedProduct } from './components/features/SelectedProduct/index';
import { CartProducts } from './components/features/Cart/index';
import { Checkout } from './components/features/Checkout/index';
import { Register } from './components/features/Register/index';
import { checkUserSession } from './redux/users/userThunks';
import AddProduct from './components/features/AddProduct/AddProduct';
import { ProductControlPanel } from './components/features/ProductControlPanel/index';
import EditProductContent from './components/pages/EditProductContent/EditProductContent';
import EditProductFiles from './components/pages/EditProductFiles/EditProductFiles';
import EditProductIsActive from './components/pages/EditProductIsActive/EditProductIsActive';
import { OrdersControlPanel } from './components/features/OrdersControlPanel/index';

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
        <Route path="/products/edit/:id" element={<EditProductContent />} />
        <Route
          path="/products/edit/images/:id"
          element={<EditProductFiles />}
        />
        <Route
          path="/products/edit/active/:id"
          element={<EditProductIsActive />}
        />
        <Route path="/ordersControlPanel" element={<OrdersControlPanel />} />
        <Route path="/cart" element={<CartProducts />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/addProduct" element={<AddProduct />} />
        <Route path="/productControlPanel" element={<ProductControlPanel />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
