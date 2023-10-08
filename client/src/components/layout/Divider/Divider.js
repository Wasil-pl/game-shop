import React from 'react';
import PropTypes from 'prop-types';
import styles from './Divider.module.scss';

const Divider = ({ text, variant }) => {
  return <div className={`${styles.divider} ${styles[variant]}`}>{text}</div>;
};

Divider.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
};

export default Divider;
