import React from 'react';
import styles from './MainMenu.module.scss';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import CarouselComponent from '../../Carousel/Carousel';
import { Link } from 'react-router-dom';
import Home from '../../../pages/Home/Home';
import SearchPhrase from '../../SearchPhrase/SearchPhrase';
import MainMenuCart from './MainMenuCart';
import { useDispatch, useSelector } from 'react-redux';
import MainMenuLogin from './MainMenuLogin';
import {
  getLoggedState,
  logoutUserRequest,
} from '../../../../redux/usersRedux';
import { getTotalQuantity } from '../../../../redux/cartRedux';

export const MainMenu = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector(getLoggedState);

  const totalQuantity = useSelector(getTotalQuantity);

  const handleLogout = () => {
    dispatch(logoutUserRequest());
  };

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
            >
              <MainMenuCart />
            </NavDropdown>
            {!isLogged && (
              <NavDropdown title="Login" className={styles.loginDropdown}>
                <MainMenuLogin />
              </NavDropdown>
            )}
            {isLogged && (
              <div className={styles.buttonBox}>
                <Button
                  className={styles.logoutButton}
                  variant="outline-danger"
                  size="sm"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <CarouselComponent />
    </div>
  );
};
