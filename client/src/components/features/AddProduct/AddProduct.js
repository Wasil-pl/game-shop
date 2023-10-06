import React, { useState } from 'react';
import { Alert, Container, Spinner } from 'react-bootstrap';
import Divider from '../../layout/Divider/Divider';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAddProductStates,
  getAddedProductId,
  getLoadingState,
} from '../../../redux/products/productSelectors';
import { modalMessages } from '../../../consts';
import AddEditContentProductForm from '../AddEditContentProductForm/AddEditContentProductForm';
import {
  addProductContentRequest,
  addProductImagesRequest,
  addProductIsActiveRequest,
} from '../../../redux/products/productThunks';
import { AddEditImagesProductForm } from '../AddEditImagesProductForm/index';
import ModalComponent from '../ModalComponent/ModalComponent';
import { resetProductStates } from '../../../redux/products/productActions';
import AddEditActivateProductForm from '../AddEditActivateProductForm/AddEditActivateProductForm';

const AddProduct = () => {
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();

  const addedProductId = useSelector(getAddedProductId);
  const isLoading = useSelector(getLoadingState);
  const addProductStates = useSelector(getAddProductStates);
  const { content } = addProductStates;
  const { images } = addProductStates;
  const { activate } = addProductStates;

  const nextStep = () => setStep(step + 1);

  const handleCloseModal = () => {
    if (step === 3) {
      setStep(1);
      dispatch(resetProductStates());
      return;
    }
    nextStep();
    dispatch(resetProductStates());
  };

  const handleSubmitContent = (data) => {
    dispatch(addProductContentRequest(data));
  };

  const handleSubmitImages = (data) => {
    dispatch(addProductImagesRequest(data, addedProductId));
  };

  const handleSubmitActivate = (data) => {
    dispatch(addProductIsActiveRequest(data, addedProductId));
  };

  switch (step) {
    case 1:
      return (
        <Container>
          <Divider text="Step 1" />
          <Divider text="Add Content" />

          {content.error && (
            <Alert className="alert" variant="danger">
              <Alert.Heading>Error</Alert.Heading>
              <hr />
              <p>{content.error}</p>
            </Alert>
          )}

          {isLoading && !content.error && (
            <div className="spinnerBox">
              <Spinner
                className="spinner"
                animation="border"
                variant="primary"
              />
            </div>
          )}

          <AddEditContentProductForm
            action={handleSubmitContent}
            actionText="next step"
          />

          <ModalComponent
            show={content.success}
            onClose={handleCloseModal}
            headerText={modalMessages.addContentSuccess.headerText}
            textMessage={modalMessages.addContentSuccess.textMessage}
          />
        </Container>
      );
    case 2:
      return (
        <Container>
          <Divider text="Step 2" />
          <Divider text="Add Images" />

          {isLoading && !images.error && (
            <div className="spinnerBox">
              <Spinner
                className="spinner"
                animation="border"
                variant="primary"
              />
            </div>
          )}

          {images.error && (
            <Alert className="alert" variant="danger">
              <Alert.Heading>Error</Alert.Heading>
              <hr />
              <p>{content.error}</p>
            </Alert>
          )}

          <AddEditImagesProductForm
            action={handleSubmitImages}
            actionText="next step"
          />

          <ModalComponent
            show={images.success}
            onClose={handleCloseModal}
            headerText={modalMessages.addImagesSuccess.headerText}
            textMessage={modalMessages.addImagesSuccess.textMessage}
          />
        </Container>
      );
    case 3:
      return (
        <Container>
          <Divider text="Step 3" />
          <Divider text="Activate Product" />

          {isLoading && !activate.error && (
            <div className="spinnerBox">
              <Spinner
                className="spinner"
                animation="border"
                variant="primary"
              />
            </div>
          )}

          {activate.error && (
            <Alert className="alert" variant="danger">
              <Alert.Heading>Error</Alert.Heading>
              <hr />
              <p>{content.error}</p>
            </Alert>
          )}

          <AddEditActivateProductForm
            action={handleSubmitActivate}
            actionText="Confirm"
          />

          <ModalComponent
            show={activate.success}
            onClose={handleCloseModal}
            headerText={modalMessages.addActivateSuccess.headerText}
            textMessage={modalMessages.addActivateSuccess.textMessage}
          />
        </Container>
      );
    default:
      return <Container>Something went wrong</Container>;
  }
};

export default AddProduct;
