import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import DrawerRight from "./DrawerRight/index";
const Layout = ({ children, title = 'this is the default title' }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      {/* <DrawerRight /> */}
    </>
  );
};

export default Layout;
