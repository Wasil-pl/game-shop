import React from 'react';
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

export default CustomPagination;
