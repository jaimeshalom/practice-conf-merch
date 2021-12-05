import React, { Children } from 'react';
import Footer from './Footer';
import Header from './Header';
import '../styles/components/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header></Header>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
