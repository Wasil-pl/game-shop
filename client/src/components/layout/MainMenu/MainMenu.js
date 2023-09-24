import React from 'react';
import styles from './MainMenu.module.scss';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from 'react-bootstrap';
import { Cart, PersonCircle, Gear } from 'react-bootstrap-icons';

const MainMenu = () => {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container fluid className={styles.container}>
        <Navbar.Brand href="#" className={styles.gameShopBrand}>
          Game
          <br /> Shop
        </Navbar.Brand>

        <div className={styles.navRows}>
          <div className={styles.firstRow}>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className={`me-auto my-2 my-lg-0 ${styles.nav}`}
                navbarScroll
              >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#cart">
                  <Cart /> Koszyk
                </Nav.Link>
                <NavDropdown title="Panel Administracyjny" id="adminDropdown">
                  <NavDropdown.Item href="#addProduct">
                    Dodaj produkt
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#viewOrders">
                    Podgląd zamówień
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Panel Klienta" id="clientDropdown">
                  <NavDropdown.Item href="#clientOrders">
                    Zamówienia
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#settings">
                    <Gear /> Ustawienia
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#profile">
                    <PersonCircle /> Profil
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </div>
          <div className={styles.secondRow}>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default MainMenu;
