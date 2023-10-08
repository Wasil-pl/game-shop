import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Alert, Container, Spinner } from 'react-bootstrap';
import {
  editProductImagesRequest,
  loadProductByIdRequest,
} from '../../../redux/products/productThunks';
import {
  getAddProductStates,
  getLoadingState,
  getProductById,
} from '../../../redux/products/productSelectors';
import Divider from '../../layout/Divider/Divider';
import { AddEditImagesProductForm } from '../../features/AddEditImagesProductForm';
import ModalComponent from '../../features/ModalComponent/ModalComponent';
import { resetProductStates } from '../../../redux/products/productActions';
import { modalMessages } from '../../../consts/modalMessages';

const EditProductFiles = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadProductByIdRequest(id));
  }, [dispatch, id]);

  const productData = useSelector(getProductById);
  const isLoading = useSelector(getLoadingState);
  const addProductStates = useSelector(getAddProductStates);
  const { images } = addProductStates;

  const handleSubmit = (data) => {
    dispatch(editProductImagesRequest(data, id));
  };

  const handleCloseModal = () => {
    dispatch(resetProductStates());
    navigate('/productControlPanel');
  };

  if (!productData && !isLoading) return <div> No data </div>;

  return (
    <Container>
      <Divider text="Edit Product files" />
      <Divider text={productData?.name} variant={'secondLine'} />

      {images.error && (
        <Alert className="alert" variant="danger">
          <Alert.Heading>Error</Alert.Heading>
          <hr />
          <p>{images.error}</p>
        </Alert>
      )}

      {isLoading && !images.error && (
        <div className="spinnerBox">
          <Spinner className="spinner" animation="border" variant="primary" />
        </div>
      )}

      <AddEditImagesProductForm
        action={handleSubmit}
        actionText="Edit Product"
        defaultValues={productData}
      />

      <ModalComponent
        show={images.success}
        onClose={handleCloseModal}
        headerText={modalMessages.editImagesSuccess.headerText(
          productData?.name,
        )}
        textMessage={modalMessages.editImagesSuccess.textMessage}
      />
    </Container>
  );
};

export default EditProductFiles;
