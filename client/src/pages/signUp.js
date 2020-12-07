import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import * as ROUTES from '../constants/route';
import { Form } from '../components';
import { HeaderContainer } from '../containers';
import { useForm } from '../hooks/useForm';
import { AuthContext } from '../context/auth';

export default function SignUp() {
  const history = useHistory();
  const context = useContext(AuthContext);

  const [errors, setErrors] = useState({});
  const { onChange, onSubmit, values } = useForm(handleRegister, {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [registerUser, { loading }] = useMutation(SIGN_UP, {
    update(_, { data : { register : userData } }) {
      context.login(userData);
      history.push(ROUTES.LOGIN);
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values
  });

  function handleRegister() {
    registerUser();
  };

  return (
    <HeaderContainer>
      <Form>
        <Form.Title>Sign up</Form.Title>
          {Object.keys(errors).length > 0 && (
            <Form.Error>
            {Object.values(errors).map(value =>(
                <li key={value}> {value} </li>
            ))}
            </Form.Error>
          )}

        <Form.Base onSubmit={onSubmit} method="POST" loading={loading ? 'Loading' : ''}>
          <Form.Input 
            placeholder='Username'
            type='text'
            name='username'
            value={values.username}
            error={errors.username}
            onChange={onChange}
          /> 
          <Form.Input 
            placeholder='Email address'
            type='email'
            name='email'
            value={values.email}
            onChange={onChange}
          /> 
          <Form.Input 
            placeholder='Password'
            type='password'
            name='password'
            autoComplete='off'
            value={values.password}
            onChange={onChange}
          />
          <Form.Input 
            placeholder='Confirm Password'
            type='password'
            name='confirmPassword'
            autoComplete='off'
            value={values.confirmPassword}
            onChange={onChange}
          />
          <Form.Submit type='submit'>
            Sign up
          </Form.Submit> 
        </Form.Base>

        <Form.Text>
          Already a user? 
          <Form.Link to={ROUTES.LOGIN}>
            Log in now.
          </Form.Link>
        </Form.Text>
      </Form>
    </HeaderContainer>
  );
};

const SIGN_UP = gql`
  mutation register (
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register ( registerInput : {
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    }) {
      id
      email
      username
      token
      created
    }
  }
`;