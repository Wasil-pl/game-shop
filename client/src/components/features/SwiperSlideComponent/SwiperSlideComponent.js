import React from 'react';
import PropTypes from 'prop-types';
import ProductThumb from '../../layout/ProductThumb/ProductThumb';
import { Container } from 'react-bootstrap';
import styles from './SwiperSlideComponent.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swiper.css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { getScreenMode } from '../../../redux/screenSizeRedux';
import { getProductsPerPage } from '../../../Utils/getProductsPerPage';

const SwiperSlideComponent = ({ data, title, variant = '' }) => {
  const screenMode = useSelector(getScreenMode);

  const productsConfig = {
    bigDesktop: 4,
    desktop: 3,
    tablet: 2,
    mobile: 2,
    smallMobile: 1,
  };

  const productsPerPage = getProductsPerPage(screenMode, productsConfig);

  return (
    <section className={`${styles.section} ${styles[variant]}`}>
      <Container className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <Swiper
          modules={[Pagination, Navigation]}
          navigation={true}
          autoHeight={false}
          loop={true}
          slidesPerView={productsPerPage}
          spaceBetween={20}
          pagination={false}
          centeredSlides={true}
          className="mySwiper"
        >
          {data.map((product) => (
            <SwiperSlide key={product.id} className={styles.card}>
              <ProductThumb data={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

SwiperSlideComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      platform: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
    }),
  ),
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default SwiperSlideComponent;
