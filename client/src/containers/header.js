import React from 'react';
import * as ROUTES from '../constants/route';
import { Header } from '../components';

export default function HeaderContainer({ children }) {
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME}>Social Media</Header.Logo>
          <Header.Group>
            <Header.ButtonLink to={ROUTES.LOGIN}>
              Log in <img src='/images/icons/right-arrow.png' alt='Log in page'/>
            </Header.ButtonLink>
            </Header.Group>
        </Header.Frame>
        {children}
      </Header>
    </>
  );
};
