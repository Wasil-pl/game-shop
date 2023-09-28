import React from 'react';
import styles from './MainMenu.module.scss';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import CarouselComponent from '../../features/Carousel/Carousel';
import { Link } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import SearchPhrase from '../../features/SearchPhrase/SearchPhrase';

const MainMenu = () => {
  return (
    <div className={styles.menuContainer}>
      <Navbar variant="dark" expand="lg" className={styles.navbar}>
        <Navbar.Brand className={styles.logo}>
          <Link to={'/'} element={<Home />}>
            Game
            <br /> Shop
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={styles.basic_navbar_nav}>
          <Nav className={`me-auto ${styles.nav}`}>
            <NavDropdown title="User" className={styles.basic_nav_dropdown}>
              <NavDropdown.Item href="#">My Orders</NavDropdown.Item>
              <NavDropdown.Item href="#">My Account</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Admin Panel"
              className={styles.basic_nav_dropdown}
            >
              <NavDropdown.Item href="#">All Orders</NavDropdown.Item>
              <NavDropdown.Item href="#">Ad Product</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <SearchPhrase />
          <Nav>
            <NavDropdown className={styles.basic_nav_dropdown} title="Cart">
              <NavDropdown.Item href="#">Produkt 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Produkt 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Produkt 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Login" className={styles.basic_nav_dropdown}>
              <Form className={styles.formLogin}>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                  />
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
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <CarouselComponent />
    </div>
  );
};

export default MainMenu;
