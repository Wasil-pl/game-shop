import React from 'react';
import styles from './MainMenuLoginForm.module.scss';
import { Button, Form, NavDropdown } from 'react-bootstrap';

const MainMenuLoginForm = () => {
  return (
    <div>
      <Form className={styles.formLogin}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email address" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group>
          <Button type="submit" variant="primary">
            Sign in
          </Button>
        </Form.Group>
      </Form>
      <NavDropdown.Divider />
      New here?{' '}
      <a href="*">
        <b>Join Us</b>
      </a>
    </div>
  );
};

export default MainMenuLoginForm;
