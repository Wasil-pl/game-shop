import React from 'react';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/productsRedux';
import ProductThumb from '../../layout/ProductThumb/ProductThumb';
import { Container } from 'react-bootstrap';
import Divider from '../../layout/Divider/Divider';
import styles from './AllProducts.module.scss';

const AllProducts = () => {
  const products = useSelector(getAllProducts);

  return (
    <Container>
      <Divider text={'All Games'} />
      <div className={styles.thumbsContainer}>
        {products.map((product) => (
          <ProductThumb data={product} variant="noInSwiper" key={product.id} />
        ))}
      </div>
    </Container>
  );
};

export default AllProducts;
