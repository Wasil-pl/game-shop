import React from 'react';
import styles from './MainMenuLogin.module.scss';
import { Alert, NavDropdown, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUsersErrorState,
  loginUserRequest,
} from '../../../../redux/usersRedux';
import MainMenuLoginForm from './MainMenuLoginForm';
import { Link } from 'react-router-dom';
import { Register } from '../../Register/index';

const MainMenuLogin = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    dispatch(loginUserRequest(data));
  };

  const isLoading = useSelector(getUsersErrorState);
  const errorMessages = useSelector(getUsersErrorState);

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

      <NavDropdown.Divider />
      <div className={styles.registerBox}>
        New here?{' '}
        <Link to="/register" element={<Register />}>
          <b>Join Us</b>
        </Link>
      </div>
    </div>
  );
};

export default MainMenuLogin;
