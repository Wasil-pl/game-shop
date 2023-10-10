import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectedProductForm.module.scss';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './ImageGallery.css';
import { generateImageList } from '../../../../Utils/generateImageList';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductToCart,
  decreaseProductQuantityInCart,
  increaseProductQuantityInCart,
} from '../../../../redux/cart/cartActions';
import { getCartProductQuantity } from '../../../../redux/cart/cartSelectors';

const SelectedProductForm = ({ data }) => {
  const dispatch = useDispatch();
  const images = generateImageList(data);

  const cartProductQuantity = useSelector((state) =>
    getCartProductQuantity(state, data.id),
  );

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addProductToCart(data.id));
  };

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
        <Button
          variant="primary"
          className={styles.addToCartButton}
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>

        <div className={styles.inputBox}>
          <Button
            size="sm"
            onClick={() => dispatch(decreaseProductQuantityInCart(data.id))}
          >
            -
          </Button>

          <span className={styles.cartQuantity}>
            {cartProductQuantity ? cartProductQuantity : '0'}
          </span>

          <Button
            size="sm"
            onClick={() => dispatch(increaseProductQuantityInCart(data.id))}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

SelectedProductForm.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    salePrice: PropTypes.string,
    platform: PropTypes.string.isRequired,
    pegi: PropTypes.number.isRequired,
    language: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
  }),
};

export default SelectedProductForm;
