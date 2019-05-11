import React from 'react';
import styled from 'styled-components';

import NavItem from './NavItem/NavItem';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-top: ${props => (props.mobile ? '-4.2rem' : null)};
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: ${props => (props.mobile ? 'column' : 'row')};
  align-items: center;
  height: 100%;
`;

const NavItems = ({ clicked, mobile }) => {
  return (
    <Nav mobile={mobile}>
      <Ul mobile={mobile}>
        <NavItem clicked={clicked} mobile={mobile} link='/'>
          Home
        </NavItem>
        <NavItem clicked={clicked} mobile={mobile} link='/todos'>
          Todos
        </NavItem>
      </Ul>
    </Nav>
  );
};

export default NavItems;
