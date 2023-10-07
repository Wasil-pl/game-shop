import React from 'react';
import styles from './Carousel.module.scss';
import { Button, Carousel } from 'react-bootstrap';
import { SLIDER_IMAGES_URL } from '../../../config';
import { useNavigate } from 'react-router-dom';

const CarouselComponent = () => {
  const navigate = useNavigate();

  const handleSubmit = (e, data) => {
    e.preventDefault();
    navigate(`/products/search/${data}`);
  };

  return (
    <Carousel className={styles.carousel} controls={false}>
      <Carousel.Item>
        <img
          className={`d-block w-100 ${styles.carouselItem}`}
          src={SLIDER_IMAGES_URL + 'TheWitcher.jpg'}
          alt="TheWitcher.jpg"
        />
        <Carousel.Caption>
          <h5>Wiedźmin 3</h5>
          <Button
            onClick={(e) => handleSubmit(e, 'Wiedźmin 3')}
            variant="success"
          >
            Shop Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className={`d-block w-100 ${styles.carouselItem}`}
          src={SLIDER_IMAGES_URL + 'assassinsCreed.jpg'}
          alt="assassinsCreed.jpg"
        />
        <Carousel.Caption>
          <h5>Assassins Creed</h5>
          <Button
            onClick={(e) => handleSubmit(e, 'Assassins Creed')}
            variant="success"
          >
            Shop Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className={`d-block w-100 ${styles.carouselItem}`}
          src={SLIDER_IMAGES_URL + 'RDR2.jpg'}
          alt="RDR2.jpg"
        />
        <Carousel.Caption>
          <h5>Red Dead Redemption 2</h5>
          <Button
            onClick={(e) => handleSubmit(e, 'Red Dead Redemption 2')}
            variant="success"
          >
            Shop Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
