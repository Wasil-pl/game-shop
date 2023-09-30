import React from 'react';
import styles from './MainMenu.module.scss';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import CarouselComponent from '../../Carousel/Carousel';
import { Link } from 'react-router-dom';
import Home from '../../../pages/Home/Home';
import SearchPhrase from '../../SearchPhrase/SearchPhrase';
import MainMenuCart from './MainMenuCart';
import MainMenuLoginForm from './MainMenuLoginForm';
import { useSelector } from 'react-redux';
import { getTotalQuantity } from '../../../../redux/cartRedux';

export const MainMenu = () => {
  const totalQuantity = useSelector(getTotalQuantity);

  return (
    <div className={styles.menuContainer}>
      <Navbar variant="dark" expand="lg" className={styles.navbar}>
        <Navbar.Brand className={styles.logo}>
          <Link to={'/'} element={<Home />}>
            Game Shop
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={styles.navBarCollapse}>
          <Nav className={`me-auto ${styles.nav}`}>
            <NavDropdown title="User">
              <NavDropdown.Item href="#">My Orders</NavDropdown.Item>
              <NavDropdown.Item href="#">My Account</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Admin Panel">
              <NavDropdown.Item href="#">All Orders</NavDropdown.Item>
              <NavDropdown.Item href="#">Ad Product</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <SearchPhrase />
          <Nav className={styles.nav}>
            <NavDropdown
              title={`Cart ${totalQuantity ? `(${totalQuantity})` : ''}`}
              className={styles.cart}
              disabled={totalQuantity === 0}
            >
              <MainMenuCart />
            </NavDropdown>
            <NavDropdown title="Login" className={styles.loginDropdown}>
              <MainMenuLoginForm />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <CarouselComponent />
    </div>
  );
};
