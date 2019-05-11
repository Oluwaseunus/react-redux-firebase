import React from 'react';
import styled from 'styled-components';

import Navbar from '../../components/Navigation/Navbar/Navbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 4rem);
  margin-top: 4rem;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <SideDrawer />
      <MainWrapper>{children}</MainWrapper>
    </>
  );
};

export default Layout;
