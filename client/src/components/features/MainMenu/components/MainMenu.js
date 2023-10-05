import React from 'react';
import styles from './MainMenu.module.scss';
import './MainMenu.css';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import CarouselComponent from '../../Carousel/Carousel';
import { Link } from 'react-router-dom';
import Home from '../../../pages/Home/Home';
import SearchPhrase from '../../SearchPhrase/SearchPhrase';
import MainMenuCart from './MainMenuCart';
import { useDispatch, useSelector } from 'react-redux';
import MainMenuLogin from './MainMenuLogin';
import ModalComponent from '../../ModalComponent/ModalComponent';
import { modalMessages } from '../../../../consts';
import {
  getLoggedState,
  getLoginSuccessState,
} from '../../../../redux/users/userSelectors';
import { logoutUserRequest } from '../../../../redux/users/userThunks';
import { resetUserState } from '../../../../redux/users/userActions';
import { getTotalQuantity } from '../../../../redux/cart/cartSelectors';
import AddProduct from '../../AddProduct/AddProduct';
import { ProductControlPanel } from '../../ProductControlPanel/index';

export const MainMenu = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector(getLoggedState);
  const loginSuccess = useSelector(getLoginSuccessState);

  const totalQuantity = useSelector(getTotalQuantity);

  const handleLogout = () => {
    dispatch(logoutUserRequest());
  };

  const handleCloseModal = () => {
    dispatch(resetUserState());
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
              <Link href="#">My Orders</Link>
              <Link href="#">My Account</Link>
            </NavDropdown>
            <NavDropdown title="Admin Panel">
              <Link href="#">All Orders</Link>
              <Link to={'/products/addProduct'} element={<AddProduct />}>
                Ad Product
              </Link>
              <Link
                to={'/productControlPanel'}
                element={<ProductControlPanel />}
              >
                Product Control Panel
              </Link>
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

      <ModalComponent
        show={loginSuccess}
        onClose={handleCloseModal}
        headerText={modalMessages.loginSuccess.headerText}
        textMessage={modalMessages.loginSuccess.textMessage}
      />
    </div>
  );
};
