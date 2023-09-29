import React from 'react';
import styles from './SelectedProductForm.module.scss';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './ImageGallery.css';
import { GenerateImageList } from '../../../../Utils.js/GenerateImageList';
import { Button } from 'react-bootstrap';

const SelectedProductForm = ({ data }) => {
  const images = GenerateImageList(data);

  return (
    <div className={styles.container}>
      <div className={styles.productBox}>
        <div className={styles.productPictures}>
          <ImageGallery
            items={images}
            showFullscreenButton={true}
            showPlayButton={false}
            showNav={true}
            showThumbnails={true}
            showBullets={true}
            autoPlay={false}
            slideOnThumbnailOver={true}
            thumbnailPosition="bottom"
            additionalClass={styles.imageGallery}
          />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productName}>
            Product:
            <p>{data.name}</p>
          </div>
          <div className={styles.productPlatform}>
            Platform: <p>{data.platform}</p>
          </div>
          <div className={styles.productPegi}>
            PEGI: <p>{data.pegi}</p>
          </div>
          <div className={styles.productLanguage}>
            Language: <p>{data.language}</p>
          </div>
        </div>
        <div className={styles.productDescription}>
          Description: <p>{data.description}</p>
        </div>
      </div>
      <div className={styles.productPrice}>
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
        <Button variant="primary" className={styles.addToCartButton}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default SelectedProductForm;
