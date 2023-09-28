import React from 'react';
import styles from './ProductThumb.module.scss';
import { IMAGES_URL } from '../../../config';
import {
  Playstation,
  Xbox,
  Windows,
  NintendoSwitch,
} from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import { Cart, ArrowRight } from 'react-bootstrap-icons';

const ProductThumb = ({ data }) => {
  const platformIcon = (platform) => {
    switch (platform) {
      case 'XBOX':
        return <Xbox />;
      case 'PLAYSTATION':
        return <Playstation />;
      case 'PC':
        return <Windows />;
      case 'NINTENDO':
        return <NintendoSwitch />;
      default:
        return null;
    }
  };

  const platformColor = (platform) => {
    switch (platform) {
      case 'XBOX':
        return 'xbox';
      case 'PLAYSTATION':
        return 'playstation';
      case 'PC':
        return 'windows';
      case 'NINTENDO':
        return 'nintendo';
      default:
        return null;
    }
  };

  const stockBarColor = (inStock) => {
    if (inStock > 8) return 'green';
    if (inStock > 4) return 'yellow';
    if (inStock > 0) return 'orange';
    return 'red';
  };

  return (
    <div className={styles.card}>
      <div
        className={`${styles.cardPlatform} ${
          styles[platformColor(data.platform)]
        }`}
      >
        <span className={styles.platformName}>{data.platform}</span>
        {platformIcon(data.platform)}
      </div>

      <div className={styles.cardImg}>
        <img src={IMAGES_URL + data.mainPicture} alt={data.name} />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{data.name}</h3>

        {data.salePrice && (
          <div className={styles.priceBox}>
            <p className={styles.oldPrice}>{data.price} zł</p>
            <p className={styles.cardSalePrice}>{data.salePrice} zł</p>
          </div>
        )}
        {!data.salePrice && (
          <div className={styles.priceBox}>
            <p>{data.price} zł</p>
          </div>
        )}

        <div className={styles.inStockBox}>
          <p className={styles.stockText}>In stock: </p>
          <div className={styles.stockBarContainer}>
            <div
              className={`${styles.stockBar} ${
                styles[stockBarColor(data.inStock)]
              }`}
            ></div>
          </div>
        </div>

        <div className={styles.buttons}>
          <Button
            size="sm"
            className={`${styles.cartButton} ${
              styles[platformColor(data.platform)]
            }`}
          >
            Add to cart <Cart />
          </Button>
          <Button
            variant="outline-info"
            size="sm"
            className={`${styles.showMoreButton} ${
              styles[`showMore` + platformColor(data.platform)]
            }`}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductThumb;
