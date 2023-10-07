import React from 'react';
import styles from './Banner.module.scss';
import { BANNER_IMAGES_URL } from '../../../config';

const Banner = () => {
  return (
    <div className={styles.container}>
      <img
        src={BANNER_IMAGES_URL + 'ps5.png'}
        alt="ps5"
        className={styles.consoleImage}
      />
      <div className={styles.bannerMessage}>
        <h2>Exciting News!</h2>
        <p>
          Top-tier gaming consoles are landing soon. Stay tuned for the ultimate
          gaming experience!
        </p>
      </div>
      <img
        src={BANNER_IMAGES_URL + 'xbox.png'}
        alt="xbox"
        className={styles.consoleImage}
      />
      <img
        src={BANNER_IMAGES_URL + 'Nintendo.png'}
        alt="switch"
        className={styles.consoleImage}
      />
    </div>
  );
};

export default Banner;
