import { useDispatch } from 'react-redux';
import Footer from '../Footer/Footer';
import MainMenu from '../MainMenu/MainMenu';
import React, { useEffect, useState } from 'react';
import { updateViewportMode } from '../../../redux/screenSizeRedux';

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
          : windowWidth >= 768
          ? 'tablet'
          : windowWidth >= 576
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
      <Footer />
    </div>
  );
};

export default MainLayout;
