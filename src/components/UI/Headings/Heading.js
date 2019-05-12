import React from 'react';
import styled, { css } from 'styled-components';

const BaseStyles = css`
  color: ${({ color }) =>
    color === 'white' ? 'var(--color-white)' : 'var(--color-main)'};
  font-weight: ${({ bold }) => (bold ? '700' : '300')};
  margin-top: 0;
  margin-bottom: ${({ noMargin }) => (noMargin ? '0' : '5rem')};
`;

const Heading1 = styled.h1`
  font-size: 2rem;
  ${BaseStyles}
`;

const Heading2 = styled.h2`
  font-size: 1.8rem;
  ${BaseStyles}
`;

const Heading3 = styled.h3`
  font-size: 1.5rem;
  ${BaseStyles}
`;

const Heading4 = styled.h4`
  font-size: 1.3rem;
  ${BaseStyles}
`;

const Heading = ({ bold, children, color, noMargin, size }) => {
  switch (size) {
    case 'h1':
      return (
        <Heading1 bold={bold} noMargin={noMargin} color={color}>
          {children}
        </Heading1>
      );

    case 'h2':
      return (
        <Heading2 bold={bold} noMargin={noMargin} color={color}>
          {children}
        </Heading2>
      );

    case 'h3':
      return (
        <Heading3 bold={bold} noMargin={noMargin} color={color}>
          {children}
        </Heading3>
      );

    case 'h4':
      return (
        <Heading4 bold={bold} noMargin={noMargin} color={color}>
          {children}
        </Heading4>
      );

    default:
      return;
  }
};

export default Heading;
