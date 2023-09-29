import React from 'react';
import styles from './Divider.module.scss';

const Divider = ({ text, variant }) => {
  return <div className={`${styles.divider} ${styles[variant]}`}>{text}</div>;
};

export default Divider;
