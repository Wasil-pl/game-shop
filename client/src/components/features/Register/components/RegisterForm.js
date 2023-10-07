import React from 'react';
import styles from './RegisterForm.module.scss';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import { Error, errorMessages } from '../../../../consts/errorMesages';
import { patterns } from '../../../../consts/patterns';

const RegisterForm = ({ action }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
    watch,
  } = useForm();

  const handleSubmit = (data) => {
    action(data);
  };

  return (
    <div className={styles.container}>
      <Form
        className={styles.formLogin}
        noValidate
        onSubmit={validate(handleSubmit)}
      >
        <Form.Group className={styles.inputBox}>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            {...register('email', {
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
          {errors.email && <Error>{errors.email?.message}</Error>}
        </Form.Group>
        <Form.Group className={styles.inputBox}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            {...register('password', {
              required: errorMessages.required,
              minLength: {
                value: patterns.passwordMinLength,
                message: errorMessages.minLength(patterns.passwordMinLength),
              },
            })}
            type="password"
            placeholder="Password"
            required
            autoComplete="current-password"
          />
          {errors.password && <Error>{errors.password?.message}</Error>}
        </Form.Group>
        <Form.Group className={styles.inputBox}>
          <Form.Label>Password repeat</Form.Label>
          <Form.Control
            {...register('passwordRepeat', {
              required: errorMessages.required,
              validate: (value) =>
                value === watch('password') || errorMessages.passwordMatch,
            })}
            type="password"
            placeholder="Password repeat"
            required
            autoComplete="current-password"
          />
          {errors.passwordRepeat && (
            <Error>{errors.passwordRepeat?.message}</Error>
          )}
        </Form.Group>
        <Form.Group className={styles.inputBox}>
          <Form.Label>First name</Form.Label>
          <Form.Control
            {...register('firstName', {
              required: errorMessages.required,
            })}
            placeholder="firstName"
            required
            autoComplete="firstName"
          />
          {errors.firstName && <Error>{errors.firstName?.message}</Error>}
        </Form.Group>
        <Form.Group className={styles.buttonBox}>
          <Button type="submit" variant="primary">
            Sign in
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default RegisterForm;
