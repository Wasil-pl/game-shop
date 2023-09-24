import React from 'react';
import { useSelector } from 'react-redux';
import { getPlatforms } from '../../../redux/productsRedux';
import styles from './Platforms.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import {
  faPlaystation,
  faWindows,
  faXbox,
} from '@fortawesome/free-brands-svg-icons';

const Platforms = () => {
  const platforms = useSelector(getPlatforms);

  return (
    <div className={styles.container}>
      <div className={`${styles.iconBox} + ${styles.xbox}`}>
        <FontAwesomeIcon icon={faXbox} /> <p>xbox</p>
      </div>
      <div className={`${styles.iconBox} + ${styles.playstation}`}>
        <FontAwesomeIcon icon={faPlaystation} /> <p>playstation</p>
      </div>
      <div className={`${styles.iconBox} + ${styles.windows}`}>
        <FontAwesomeIcon icon={faWindows} /> <p>pc</p>
      </div>
      <div className={`${styles.iconBox} + ${styles.nintendo}`}>
        <FontAwesomeIcon icon={faGamepad} /> <p>nintendo</p>
      </div>
    </div>
  );
};

export default Platforms;
