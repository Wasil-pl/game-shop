import { useDispatch } from 'react-redux';
import Footer from '../Footer/Footer';
import React, { useEffect, useState } from 'react';
import { updateViewportMode } from '../../../redux/screenSizeRedux';
import { MainMenu } from '../../features/MainMenu/index';
import ContactUs from '../ContactUs/ContactUs';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      const mode =
        windowWidth >= 1200
          ? 'bigDesktop'
          : windowWidth >= 992
          ? 'desktop'
          : windowWidth >= 576
          ? 'tablet'
          : windowWidth >= 468
          ? 'mobile'
          : 'small-mobile';
      dispatch(updateViewportMode(mode));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch, windowWidth]);

  return (
    <div>
      <MainMenu />
      {children}
      <ContactUs />
      <Footer />
    </div>
  );
};

export default MainLayout;
