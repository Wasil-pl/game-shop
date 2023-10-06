import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Alert, Container, Spinner } from 'react-bootstrap';
import {
  editProductIsActiveRequest,
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
import { modalMessages } from '../../../consts';
import AddEditActivateProductForm from '../../features/AddEditActivateProductForm/AddEditActivateProductForm';

const EditProductIsActive = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadProductByIdRequest(id));
  }, [dispatch, id]);

  const productData = useSelector(getProductById);
  const isLoading = useSelector(getLoadingState);
  const addProductStates = useSelector(getAddProductStates);
  const { activate } = addProductStates;

  const handleSubmit = (data) => {
    dispatch(editProductIsActiveRequest(data, id));
  };

  const handleCloseModal = () => {
    dispatch(resetProductStates());
    navigate('/productControlPanel');
  };

  if (!productData && !isLoading) return <div> No data </div>;

  return (
    <Container>
      <Divider text="Edit Product active" />
      <Divider text={productData.name} variant={'secondLine'} />

      {activate.error && (
        <Alert className="alert" variant="danger">
          <Alert.Heading>Error</Alert.Heading>
          <hr />
          <p>{activate.error}</p>
        </Alert>
      )}

      {isLoading && !activate.error && (
        <div className="spinnerBox">
          <Spinner className="spinner" animation="border" variant="primary" />
        </div>
      )}

      <AddEditActivateProductForm
        action={handleSubmit}
        actionText="Edit Product"
        defaultValues={{ ...productData }}
      />

      <ModalComponent
        show={activate.success}
        onClose={handleCloseModal}
        headerText={modalMessages.editActivateSuccess.headerText(
          productData.name,
        )}
        textMessage={modalMessages.editActivateSuccess.textMessage}
      />
    </Container>
  );
};

export default EditProductIsActive;
