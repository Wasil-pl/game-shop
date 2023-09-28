import React from 'react';
import styles from './Platforms.module.scss';
import {
  Playstation,
  Xbox,
  Windows,
  NintendoSwitch,
} from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import AllProducts from '../../pages/AllProducts/AllProducts';
import { Link } from 'react-router-dom';
import ProductsByPlatform from '../../pages/ProductsByPlatform/ProductsByPlatform';

const Platforms = () => {
  return (
    <Container className={styles.container}>
      <div>
        <Link to={'/products/platform/XBOX'} element={<ProductsByPlatform />}>
          <div className={`${styles.iconBox} + ${styles.xbox}`}>
            <Xbox />
          </div>
          <p className={styles.textXbox}>Xbox</p>
        </Link>
      </div>

      <div>
        <Link
          to={'/products/platform/PLAYSTATION'}
          element={<ProductsByPlatform />}
        >
          <div className={`${styles.iconBox} + ${styles.playstation}`}>
            <Playstation />
          </div>
          <p className={styles.textPS}>Playstation</p>
        </Link>
      </div>

      <div>
        <Link to={'/products/platform/PC'} element={<ProductsByPlatform />}>
          <div className={`${styles.iconBox} + ${styles.windows}`}>
            <Windows />
          </div>
          <p className={styles.textWin}>Windows</p>
        </Link>
      </div>

      <div>
        <Link
          to={'/products/platform/NINTENDO'}
          element={<ProductsByPlatform />}
        >
          <div className={`${styles.iconBox} + ${styles.nintendo}`}>
            <NintendoSwitch />
          </div>
          <p className={styles.textNS}>Nintendo</p>
        </Link>
      </div>

      <div>
        <Link to={'products/allGames'} element={<AllProducts />}>
          <div className={styles.iconBoxAll}>
            <NintendoSwitch className={styles.ns} />
            <Windows className={styles.win} />
            <Playstation className={styles.ps} />
            <Xbox className={styles.x} />
          </div>
        </Link>
        <p className={styles.textAll}>All Games</p>
      </div>

      <div className={styles.testWrapper}> </div>
    </Container>
  );
};

export default Platforms;
