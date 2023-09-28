import React from 'react';
import styles from './Divider.module.scss';

const Divider = ({ text }) => {
  return <div className={styles.divider}>{text}</div>;
};

export default Divider;
