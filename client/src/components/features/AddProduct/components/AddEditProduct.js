import React, { useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
import Divider from '../../../layout/Divider/Divider';
import { useSelector } from 'react-redux';
import {
  getAddProductStates,
  getAddedProductId,
} from '../../../../redux/products/productSelectors';
import AddEditProductSecondStep from './AddProductSecondStep';
import AddEditProductFirstStep from './AddEditProductFirstStep';
import { errorMessages } from '../../../../consts';

export const AddProduct = () => {
  const [step, setStep] = useState(1);

  const addedProductId = useSelector(getAddedProductId);
  const addProductStates = useSelector(getAddProductStates);
  const { content } = addProductStates;

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

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

          <AddEditProductFirstStep nextStep={nextStep} content={content} />
        </Container>
      );
    case 2:
      return (
        <Container>
          <Divider text="Step 2" />
          <Divider text="Add Images" />
          <AddEditProductSecondStep
            nextStep={nextStep}
            prevStep={prevStep}
            productId={addedProductId}
          />
        </Container>
      );
    case 3:
      return (
        <Container>
          <Divider text="Step 3" />
          <button onClick={prevStep}>Prev</button>
        </Container>
      );
    default:
      return (
        <Container>
          <Divider />
          <h1>Step 1</h1>
          <Divider />
          <button onClick={nextStep}>Next</button>
        </Container>
      );
  }
};
