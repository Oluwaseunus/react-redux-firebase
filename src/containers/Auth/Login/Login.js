import React from 'react';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';

import { FormWrapper, StyledForm } from '../../../hoc/layout/elements';
import Button from '../../../components/UI/Forms/Button/Button';
import Heading from '../../../components/UI/Headings/Heading';
import Input from '../../../components/UI/Forms/Input/Input';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('The email is required.'),
  password: Yup.string().required('The password is required.')
});

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}>
      {(isSubmitting, isValid) => (
        <FormWrapper>
          <Heading noMargin size='h1' color='white'>
            Log In To Your Account
          </Heading>
          <Heading bold size='h4' color='white'>
            Fill In Your Details To Log In To Your Account
          </Heading>
          <StyledForm>
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
            <Button disabled={!isValid} type='submit'>
              Submit
            </Button>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Login;
