import React, { useState } from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers';
import * as ROUTES from '../constants/route';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = username === '' || email === '' || password === '' || confirmPassword === '';

  const handleSignUp = (event) => {
    event.preventDefault();
  }

  return (
    <HeaderContainer>
      <Form>
        <Form.Title>Sign up</Form.Title>
        {error && <Form.Error> {error} </Form.Error>}

        <Form.Base onSubmit={handleSignUp} method="POST">
          <Form.Input 
            placeholder='Username'
            type='text'
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          /> 
          <Form.Input 
            placeholder='Email address'
            type='email'
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          /> 
          <Form.Input 
            placeholder='Password'
            type='password'
            autoComplete='off'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Form.Input 
            placeholder='Confirm Password'
            type='password'
            autoComplete='off'
            value={confirmPassword}
            onChange={({ target }) => setConfirmPassword(target.value)}
          />
          <Form.Submit type='submit' disabled={isInvalid}>
            Sign up
          </Form.Submit> 
        </Form.Base>

        <Form.Text>
          Already a user? <Form.Link to={ROUTES.LOGIN}>Log in now</Form.Link>
        </Form.Text>
      </Form>
    </HeaderContainer>
  );
};
