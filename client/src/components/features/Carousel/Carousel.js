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
        <picture>
          <source
            media="(max-width: 910px)"
            srcSet={`${SLIDER_IMAGES_URL}TheWitcher_tablet.jpg`}
          />
          <source
            media="(min-width: 911px)"
            srcSet={`${SLIDER_IMAGES_URL}TheWitcher.jpg`}
          />
          <img
            className={`d-block w-100 ${styles.carouselItem}`}
            src={`${SLIDER_IMAGES_URL}TheWitcher.jpg`}
            alt="TheWitcher.jpg"
          />
        </picture>
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
        <picture>
          <source
            media="(max-width: 774px)"
            srcSet={`${SLIDER_IMAGES_URL}assassinsCreed_tablet.jpg`}
          />
          <source
            media="(min-width: 775px)"
            srcSet={`${SLIDER_IMAGES_URL}assassinsCreed.jpg`}
          />
          <img
            className={`d-block w-100 ${styles.carouselItem}`}
            src={SLIDER_IMAGES_URL + 'assassinsCreed.jpg'}
            alt="assassinsCreed.jpg"
          />
        </picture>
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
        <picture>
          <source
            media="(max-width: 850px)"
            srcSet={`${SLIDER_IMAGES_URL}RDR2_tablet.jpg`}
          />
          <source
            media="(min-width: 851px)"
            srcSet={`${SLIDER_IMAGES_URL}RDR2.jpg`}
          />
          <img
            className={`d-block w-100 ${styles.carouselItem}`}
            src={SLIDER_IMAGES_URL + 'RDR2.jpg'}
            alt="RDR2.jpg"
          />
        </picture>
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
