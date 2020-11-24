import React, { useState } from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers';
import * as ROUTES from '../constants/route';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = username === '' || password === '';

  const handleLogIn = (event) => {
    event.preventDefault();
  }

  return (
    <HeaderContainer>
      <Form>
          <Form.Title>Log in</Form.Title>
          {error && <Form.Error> {error} </Form.Error>}

          <Form.Base onSubmit={handleLogIn} method="POST">
            <Form.Input 
              placeholder='Username'
              type='text'
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            /> 
            <Form.Input 
              placeholder='Password'
              type='password'
              autoComplete='off'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit type='submit' disabled={isInvalid}>
              Log in
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Social Media ? 
            <Form.Link to={ROUTES.SIGNUP}>
              Sign up now
            </Form.Link>
          </Form.Text>
        </Form>
    </HeaderContainer>
  );
};
