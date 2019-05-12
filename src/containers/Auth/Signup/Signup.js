import React from 'react';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';

import { FormWrapper, StyledForm } from '../../../hoc/layout/elements';
import Button from '../../../components/UI/Forms/Button/Button';
import Heading from '../../../components/UI/Headings/Heading';
import Input from '../../../components/UI/Forms/Input/Input';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Your first name is required')
    .min(3, 'Too short')
    .max(25, 'Too long'),
  lastName: Yup.string()
    .required('Your last name is required')
    .min(3, 'Too short')
    .max(25, 'Too long'),
  email: Yup.string()
    .email('Invalid email')
    .required('The email is required.'),
  password: Yup.string().required('The password is required.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords do not match')
    .required('Confirm your password')
});

const Signup = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}>
      {(isSubmitting, isValid) => (
        <FormWrapper>
          <Heading noMargin size='h1' color='white'>
            Sign Up For An Account
          </Heading>

          <Heading bold size='h4' color='white'>
            Fill In Your Details To Register Your New Account
          </Heading>

          <StyledForm>
            <Field
              component={Input}
              type='text'
              name='firstName'
              placeholder='Your first name'
            />

            <Field
              component={Input}
              type='text'
              name='lastName'
              placeholder='Your last name'
            />

            <Field
              component={Input}
              type='email'
              name='email'
              placeholder='Enter your email'
            />

            <Field
              component={Input}
              type='password'
              name='password'
              placeholder='Enter your password'
            />

            <Field
              component={Input}
              type='password'
              name='confirmPassword'
              placeholder='Confirm your password'
            />

            <Button disabled={!isValid} type='submit'>
              Submit
            </Button>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Signup;
