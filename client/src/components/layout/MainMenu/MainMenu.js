import React from 'react';
import styles from './MainMenu.module.scss';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from 'react-bootstrap';
import CarouselComponent from '../../features/Carousel/Carousel';

const MainMenu = () => {
  return (
    <div className={styles.menuContainer}>
      <Navbar variant="dark" expand="lg" className={styles.navbar}>
        <Navbar.Brand className={styles.logo} href="#">
          Game
          <br /> Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={styles.basic_navbar_nav}>
          <Nav className={`me-auto ${styles.nav}`}>
            <NavDropdown
              title="użytkownik"
              className={styles.basic_nav_dropdown}
            >
              <NavDropdown.Item href="#">Moje zamówienia</NavDropdown.Item>
              <NavDropdown.Item href="#">Moje konto</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="panel administracyjny"
              className={styles.basic_nav_dropdown}
            >
              <NavDropdown.Item href="#">Zamównienia</NavDropdown.Item>
              <NavDropdown.Item href="#">Dodaj produkt</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className={styles.searchContainer}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="success">Search</Button>
          </Form>
          <Nav>
            <NavDropdown className={styles.basic_nav_dropdown} title="koszyk">
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
