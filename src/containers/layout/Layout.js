// @flow

import * as React from 'react';
import AppHeader from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

type LayoutProps = {
  children: React.Node,
};

const Layout = ({ children }: LayoutProps) => (
  <div>
    <AppHeader />
    <main>{children && children}</main>
    <Footer />
  </div>
);

export default Layout;
