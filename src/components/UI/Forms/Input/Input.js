import React from 'react';
import styled from 'styled-components';

const Error = styled.div`
  color: var(--color-errorRed);
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0 2rem;
  position: absolute;
  left: 0;
  bottom: 0;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  transform: translateY(${({ show }) => (show ? '20px' : '10px')});
  transition: all 0.1s;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 3rem;

  &:last-of-type {
    margin-bottom: 4.5rem;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  background-color: var(--color-mainLight);
  color: var(--color-white);
  border: none;
  font-weight: 500;
  font-size: 1.2rem;
  border-radius: 2rem;

  &::placeholder {
    color: var(--color-white);
  }
`;

const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput {...field} {...props} />
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </InputWrapper>
  );
};

export default Input;
