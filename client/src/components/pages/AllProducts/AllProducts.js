import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductThumb from '../../layout/ProductThumb/ProductThumb';
import { Container } from 'react-bootstrap';
import Divider from '../../layout/Divider/Divider';
import styles from './AllProducts.module.scss';
import { getScreenMode } from '../../../redux/screenSizeRedux';
import { getProductsPerPage } from '../../../Utils/getProductsPerPage';
import CustomPagination from '../../features/CustomPagination/CustomPagination';
import clsx from 'clsx';
import { getAllProducts } from '../../../redux/products/productSelectors';

const AllProducts = () => {
  const products = useSelector(getAllProducts);
  const screenMode = useSelector(getScreenMode);
  const [currentPage, setCurrentPage] = useState(1);
  const [fade, setFade] = useState(false);

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
      <Divider text={'All Games'} />
      <div
        className={clsx(styles.thumbsContainer, {
          [styles.fadeOut]: fade,
          [styles.fadeIn]: !fade,
        })}
      >
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
