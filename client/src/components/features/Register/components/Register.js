import { useDispatch, useSelector } from 'react-redux';
import RegisterForm from './RegisterForm';
import { Alert, Container, Spinner } from 'react-bootstrap';
import Divider from '../../../layout/Divider/Divider';
import { modalMessages } from '../../../../consts';
import {
  getRegisterErrorState,
  getRegisterSuccessState,
  getUsersLoadingState,
  registerUserRequest,
  resetUserState,
} from '../../../../redux/usersRedux';
import ModalComponent from '../../ModalComponent/ModalComponent';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(getUsersLoadingState);
  const errorMessages = useSelector(getRegisterErrorState);
  const success = useSelector(getRegisterSuccessState);

  const handleSubmit = async (user) => {
    dispatch(registerUserRequest(user));
  };

  const handleCloseModal = () => {
    dispatch(resetUserState());
    navigate('/');
  };

  return (
    <Container>
      <Divider text={'Register'} />

      {errorMessages && (
        <Alert className="alert" variant="danger">
          <Alert.Heading>Error</Alert.Heading>
          <hr />
          <p>{errorMessages}</p>
        </Alert>
      )}

      {isLoading && !errorMessages && (
        <div className="spinnerBox">
          <Spinner className="spinner" animation="border" variant="primary" />
        </div>
      )}

      <RegisterForm action={handleSubmit} />

      <ModalComponent
        show={success}
        onConfirm={handleCloseModal}
        headerText={modalMessages.registerSuccess.headerText}
        textMessage={modalMessages.registerSuccess.textMessage}
      />
    </Container>
  );
};
