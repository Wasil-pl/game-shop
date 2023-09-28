import React from 'react';
import styles from './Carousel.module.scss';
import { Button, Carousel } from 'react-bootstrap';
import { SLIDER_IMAGES_URL } from '../../../config';

const CarouselComponent = () => {
  return (
    <Carousel className={styles.carousel} controls={false}>
      <Carousel.Item>
        <img
          className={`d-block w-100 ${styles.carouselItem}`}
          src={SLIDER_IMAGES_URL + 'TheWitcher.jpg'}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Wiedźmin 3</h5>
          <Button variant="success">Kup teraz</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className={`d-block w-100 ${styles.carouselItem}`}
          src={SLIDER_IMAGES_URL + 'assassinsCreed.jpg'}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Assassins Creed</h5>
          <Button variant="success">Kup teraz</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className={`d-block w-100 ${styles.carouselItem}`}
          src={SLIDER_IMAGES_URL + 'RDR2.jpg'}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Red Dead Redemption 2</h5>
          <Button variant="success">Kup teraz</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
