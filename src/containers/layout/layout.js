// @flow
import * as React from 'react';
import AppHeader from '../../components/header/header';
import Footer from '../../components/footer';

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
