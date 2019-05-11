import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Li = styled.li`
  display: flex;
  height: 100%;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  border-bottom: ${props => (props.mobile ? '1px' : '2px')} solid transparent;
  font-size: 1.2rem;
  padding: ${props => (props.mobile ? '0.5rem 1rem' : '1rem')};
  margin: ${props => (props.mobile ? '2rem 0' : '0 1rem')};
  font-weight: 400;
  color: var(--color-white);
  transition: all 0.2s;

  &:hover {
    border-bottom: ${props => (props.mobile ? '1px' : '2px')} solid
      var(--color-white);
  }

  &.active {
    border-bottom: ${props => (props.mobile ? '1px' : '2px')} solid
      var(--color-white);
  }
`;

const NavItem = ({ link, children, mobile, clicked }) => {
  return (
    <Li>
      <StyledNavLink
        exact
        activeClassName='active'
        mobile={mobile}
        to={link}
        onClick={clicked}>
        {children}
      </StyledNavLink>
    </Li>
  );
};

export default NavItem;
