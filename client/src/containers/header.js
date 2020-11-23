import React from 'react';
import * as ROUTES from '../constants/route';
import { Header } from '../components';

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo>Social Media</Header.Logo>
        <Header.Group>
          <Header.TextLink to={ROUTES.SIGNIN}>
            Log in
          </Header.TextLink>
          <Header.ButtonLink to={ROUTES.SIGNUP}>
            Sign up <img src='/images/icons/right-arrow.png' alt='Sign up page'/>
          </Header.ButtonLink>
          </Header.Group>
      </Header.Frame>
    </Header>
  );
};
