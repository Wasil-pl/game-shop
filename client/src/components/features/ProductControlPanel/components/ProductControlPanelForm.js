import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductControlPanelForm.module.scss';
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProductRequest } from '../../../../redux/products/productThunks';
import ModalComponent from '../../ModalComponent/ModalComponent';
import { modalMessages } from '../../../../consts/modalMessages';

const ProductControlPanelForm = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pendingDeletion, setPendingDeletion] = useState(null);
  const clearPendingDeletion = () => setPendingDeletion(null);

  const handleDeleteProduct = (e) => {
    e.preventDefault();
    dispatch(deleteProductRequest(pendingDeletion.id));
    clearPendingDeletion();
  };

  const handleEditContentProduct = (id) => {
    navigate(`/products/edit/${id}`);
  };

  const handleEditImagesProduct = (id) => {
    navigate(`/products/edit/images/${id}`);
  };

  const handleActivateProduct = (id) => {
    navigate(`/products/edit/isActive/${id}`);
  };

  return (
    <div>
      <Table
        className={styles.tableContainer}
        striped
        bordered
        hover
        responsive
        size="sm"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Description</th>
            <th>In Stock</th>
            <th>Language</th>
            <th>Pegi</th>
            <th>Platform</th>
            <th>Price</th>
            <th>Sale Price</th>
            <th>Main Picture</th>
            <th>Picture One</th>
            <th>Picture Two</th>
            <th>Picture Three</th>
            <th>Picture Four</th>
            <th>Picture Five</th>
            <th>Is Active</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td className={styles.title}>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
              </td>
              <td>{product.id}</td>
              <td>{product.description}</td>
              <td>{product.inStock}</td>
              <td>{product.language}</td>
              <td>{product.pegi}</td>
              <td>{product.platform}</td>
              <td>{product.price}</td>
              <td>{product.salePrice}</td>
              <td>{product.mainPicture}</td>
              <td>{product.pictureOne}</td>
              <td>{product.pictureTwo}</td>
              <td>{product.pictureThree}</td>
              <td>{product.pictureFour}</td>
              <td>{product.pictureFive}</td>
              <td>{product.isActive.toString()}</td>
              <td>{product.createdAt}</td>
              <td>{product.updatedAt}</td>
              <td>
                <div className={styles.buttonsContainer}>
                  <Button
                    variant="primary"
                    size="sm"
                    className={styles.actionButton}
                    onClick={() => handleEditContentProduct(product.id)}
                  >
                    Content Edit
                  </Button>
                  <Button
                    variant="warning"
                    size="sm"
                    className={styles.actionButton}
                    onClick={() => handleEditImagesProduct(product.id)}
                  >
                    Images Edit
                  </Button>
                  <Button
                    variant="info"
                    size="sm"
                    className={styles.actionButton}
                    onClick={() => handleActivateProduct(product.id)}
                  >
                    IsActive Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    className={styles.actionButton}
                    onClick={() => setPendingDeletion(product)}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ModalComponent
        show={!!pendingDeletion}
        onClose={handleDeleteProduct}
        headerText={modalMessages.deleteProductConfirm.headerText(
          pendingDeletion?.name,
        )}
        textMessage={modalMessages.deleteProductConfirm.textMessage}
        onCancel={clearPendingDeletion}
        actionText="Delete"
      />
    </div>
  );
};

ProductControlPanelForm.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      salePrice: PropTypes.string,
      platform: PropTypes.string.isRequired,
      pegi: PropTypes.number.isRequired,
      language: PropTypes.string.isRequired,
      mainPicture: PropTypes.string,
      pictureOne: PropTypes.string,
      pictureTwo: PropTypes.string,
      pictureThree: PropTypes.string,
      pictureFour: PropTypes.string,
      pictureFive: PropTypes.string,
      description: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
    }),
  ),
};

export default ProductControlPanelForm;
