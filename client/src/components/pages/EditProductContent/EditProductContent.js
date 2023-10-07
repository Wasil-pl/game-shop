import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import AddEditContentProductForm from '../../features/AddEditContentProductForm/AddEditContentProductForm';
import { Alert, Container, Spinner } from 'react-bootstrap';
import {
  editProductContentRequest,
  loadProductByIdRequest,
} from '../../../redux/products/productThunks';
import {
  getAddProductStates,
  getLoadingState,
  getProductById,
} from '../../../redux/products/productSelectors';
import Divider from '../../layout/Divider/Divider';
import ModalComponent from '../../features/ModalComponent/ModalComponent';
import { resetProductStates } from '../../../redux/products/productActions';
import { modalMessages } from '../../../consts/modalMessages';

const EditProductContent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadProductByIdRequest(id));
  }, [dispatch, id]);

  const productData = useSelector(getProductById);
  const isLoading = useSelector(getLoadingState);
  const addProductStates = useSelector(getAddProductStates);
  const { content } = addProductStates;

  const handleSubmit = (data) => {
    dispatch(editProductContentRequest(data, id));
  };

  const handleCloseModal = () => {
    dispatch(resetProductStates());
    navigate('/productControlPanel');
  };

  if (!productData && !isLoading) return <div> No data </div>;

  return (
    <Container>
      <Divider text="Edit Product Content" />
      <Divider text={productData.name} variant={'secondLine'} />

      {content.error && (
        <Alert className="alert" variant="danger">
          <Alert.Heading>Error</Alert.Heading>
          <hr />
          <p>{content.error}</p>
        </Alert>
      )}

      {isLoading && !content.error && (
        <div className="spinnerBox">
          <Spinner className="spinner" animation="border" variant="primary" />
        </div>
      )}

      <AddEditContentProductForm
        action={handleSubmit}
        actionText="Edit Product"
        defaultValues={{ ...productData }}
      />

      <ModalComponent
        show={content.success}
        onClose={handleCloseModal}
        headerText={modalMessages.editContentSuccess.headerText(
          productData.name,
        )}
        textMessage={modalMessages.editContentSuccess.textMessage}
      />
    </Container>
  );
};

export default EditProductContent;
