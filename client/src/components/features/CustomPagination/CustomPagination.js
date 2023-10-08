import React from 'react';
import PropTypes from 'prop-types';
import { Container, Pagination } from 'react-bootstrap';
import styles from './CustomPagination.module.scss'; // Jeśli potrzebujesz stylów

const CustomPagination = ({ pagesCount, currentPage, handlePageChange }) => {
  return (
    <Container className={styles.container}>
      <Pagination className={styles.pagination}>
        {[...Array(pagesCount)].map((_, i) => (
          <Pagination.Item
            key={i}
            active={i + 1 === currentPage}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

CustomPagination.propTypes = {
  pagesCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default CustomPagination;
