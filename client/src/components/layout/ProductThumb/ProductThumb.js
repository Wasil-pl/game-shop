import React from 'react';
import styles from './ProductThumb.module.scss';
import { IMAGES_URL } from '../../../config';
import { Button } from 'react-bootstrap';
import { Cart, ArrowRight } from 'react-bootstrap-icons';
import {
  getPlatformIcon,
  getPlatformCssClass,
  getStockStatusColor,
} from '../../../Utils.js/ProductThumbFunctions';
import { useNavigate } from 'react-router-dom';

const ProductThumb = ({ data, variant = '' }) => {
  const navigate = useNavigate();

  const handleSubmit = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <div
        className={`${styles.cardPlatform} ${
          styles[getPlatformCssClass(data.platform)]
        }`}
      >
        <span className={styles.platformName}>{data.platform}</span>
        {getPlatformIcon(data.platform)}
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
                styles[getStockStatusColor(data.inStock)]
              }`}
            ></div>
          </div>
        </div>

        <div className={styles.buttons}>
          <Button
            size="sm"
            className={`${styles.cartButton} ${
              styles[getPlatformCssClass(data.platform)]
            }`}
          >
            Add to cart <Cart />
          </Button>

          <Button
            variant="outline-info"
            onClick={() => handleSubmit(data.id)}
            size="sm"
            className={`${styles.showMoreButton} ${
              styles[`showMore` + getPlatformCssClass(data.platform)]
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
