import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import * as ROUTES from '../constants/route';
import { Form } from '../components';
import { HeaderContainer } from '../containers';
import { useForm } from '../hooks/useForm';
import { AuthContext } from '../context/auth';

export default function LogIn() {
  const history = useHistory();
  const context = useContext(AuthContext);

  const [errors, setErrors] = useState({});
  const { onChange, onSubmit, values } = useForm(handleLogin, {
    username: '',
    password: '',
  });

  const [loginUser, { loading }] = useMutation(LOGIN, {
    update(_, { data : { login : userData } }) {
      context.login(userData);
      history.push(ROUTES.HOME);
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values
  });

  function handleLogin() {
    loginUser();
  };

  return (
    <HeaderContainer>
      <Form>
          <Form.Title>Log in</Form.Title>
          {Object.keys(errors).length > 0 && (
            <Form.Error>
            {Object.values(errors).map(value =>(
                <li key={value}> {value} </li>
            ))}
            </Form.Error>
          )}

          <Form.Base onSubmit={onSubmit} method="POST" loading={loading ?  'Loading' : ''}>
            <Form.Input 
              placeholder='Username'
              type='text'
              name='username'
              value={values.username}
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
            <Form.Submit type='submit'>
              Log in
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Social Media ? 
            <Form.Link to={ROUTES.SIGNUP}>
              Sign up now.
            </Form.Link>
          </Form.Text>
        </Form>
    </HeaderContainer>
  );
};

const LOGIN = gql`
  mutation login (
    $username: String!
    $password: String!
  ) {
    login ( loginInput : {
      username: $username
      password: $password
    }) {
      id
      email
      username
      token
      created
    }
  }
`;
