import React from 'react';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/productsRedux';
import ProductThumb from '../../layout/ProductThumb/ProductThumb';
import { Container } from 'react-bootstrap';
import Divider from '../../layout/Divider/Divider';
import styles from './AllProducts.module.scss';
import { getScreenMode } from '../../../redux/screenSizeRedux';
import { getProductsPerPage } from '../../../Utils.js/GetProductsPerPage';
import CustomPagination from '../../features/CustomPagination/CustomPagination';

const AllProducts = () => {
  const products = useSelector(getAllProducts);
  const screenMode = useSelector(getScreenMode);
  const [currentPage, setCurrentPage] = React.useState(1);

  const productsPerPage = getProductsPerPage(screenMode);
  const pagesCount = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;

  return (
    <Container>
      <Divider text={'All Games'} />
      <div className={styles.thumbsContainer}>
        {products.slice(start, end).map((product) => (
          <ProductThumb data={product} variant="noInSwiper" key={product.id} />
        ))}
      </div>
      <CustomPagination
        pagesCount={pagesCount}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </Container>
  );
};

export default AllProducts;
