import Footer from '../Footer/Footer';
import MainMenu from '../MainMenu/MainMenu';
import React from 'react';

const MainLayout = ({ children }) => (
  <div>
    <MainMenu />
    {children}
    <Footer />
  </div>
);

export default MainLayout;
