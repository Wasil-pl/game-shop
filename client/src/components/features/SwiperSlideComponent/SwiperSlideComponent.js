import React from 'react';
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

const SwiperSlideComponent = ({ data, title, variant = '' }) => {
  return (
    <section className={`${styles.section} ${styles[variant]}`}>
      <Container className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <Swiper
          modules={[Pagination, Navigation]}
          navigation={true}
          autoHeight={false}
          slidesPerView={4}
          spaceBetween={20}
          pagination={true}
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

export default SwiperSlideComponent;