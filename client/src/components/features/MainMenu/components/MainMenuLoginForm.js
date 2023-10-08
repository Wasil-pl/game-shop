import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainMenuLoginForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../../consts/errorMesages';
import { patterns } from '../../../../consts/patterns';

const MainMenuLoginForm = ({ action }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleSubmit = (data) => {
    action({ email: data.login, password: data.password });
  };

  return (
    <Form
      className={styles.formLogin}
      noValidate
      onSubmit={validate(handleSubmit)}
    >
      <Form.Group className={styles.inputBox}>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          {...register('login', {
            required: errorMessages.required,
            pattern: {
              value: patterns.emailPattern,
              message: errorMessages.emailPattern,
            },
          })}
          type="email"
          placeholder="Email address"
          autoComplete="email"
          required
        />
        {errors.login && <Error>{errors.login?.message}</Error>}
      </Form.Group>
      <Form.Group className={styles.inputBox}>
        <Form.Label>Password</Form.Label>
        <Form.Control
          {...register('password', {
            required: errorMessages.required,
          })}
          type="password"
          placeholder="Password"
          required
          autoComplete="current-password"
        />
        {errors.password && <Error>{errors.password?.message}</Error>}
      </Form.Group>
      <Form.Group>
        <Button type="submit" variant="primary">
          Sign in
        </Button>
      </Form.Group>
    </Form>
  );
};

MainMenuLoginForm.propTypes = {
  action: PropTypes.func.isRequired,
};

export default MainMenuLoginForm;
