import React from 'react';
import styles from './MainMenuLogin.module.scss';
import { Alert, NavDropdown, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLoggedState,
  getUsersErrorState,
  loginUserRequest,
} from '../../../../redux/usersRedux';
import MainMenuLoginForm from './MainMenuLoginForm';

const MainMenuLogin = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    dispatch(loginUserRequest(data));
  };

  const isLoading = useSelector(getUsersErrorState);
  const errorMessages = useSelector(getUsersErrorState);
  const loginSuccess = useSelector(getLoggedState);

  return (
    <div>
      <MainMenuLoginForm action={handleSubmit} />

      {errorMessages && (
        <Alert className={styles.loginAlert} variant="danger">
          <Alert.Heading>Error</Alert.Heading>
          <hr />
          <p>{errorMessages}</p>
        </Alert>
      )}

      {isLoading && !errorMessages && (
        <div className={styles.spinnerBox}>
          <Spinner className="spinner" animation="border" variant="primary" />
        </div>
      )}

      {!isLoading && !errorMessages && loginSuccess && (
        <Alert className={styles.loginAlert} variant="success">
          <Alert.Heading>Success</Alert.Heading>
          <hr />
          <p>You have successfully logged in!</p>
        </Alert>
      )}

      <NavDropdown.Divider />
      <div className={styles.registerBox}>
        New here?{' '}
        <a href="*">
          <b>Join Us</b>
        </a>
      </div>
    </div>
  );
};

export default MainMenuLogin;
