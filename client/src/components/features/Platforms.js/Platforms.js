import React from 'react';
import styles from './Platforms.module.scss';
import {
  Playstation,
  Xbox,
  Windows,
  NintendoSwitch,
} from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';

const Platforms = () => {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div>
          <div className={`${styles.iconBox} + ${styles.xbox}`}>
            <Xbox />
          </div>
          <p className={styles.textXbox}>Xbox</p>
        </div>

        <div>
          <div className={`${styles.iconBox} + ${styles.playstation}`}>
            <Playstation />
          </div>
          <p className={styles.textPS}>Playstation</p>
        </div>

        <div>
          <div className={`${styles.iconBox} + ${styles.windows}`}>
            <Windows />
          </div>
          <p className={styles.textWin}>Windows</p>
        </div>

        <div>
          <div className={`${styles.iconBox} + ${styles.nintendo}`}>
            <NintendoSwitch />
          </div>
          <p className={styles.textNS}>Nintendo</p>
        </div>
      </Container>
    </div>
  );
};

export default Platforms;
