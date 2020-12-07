import React, { useContext } from 'react';
import * as ROUTES from '../constants/route';
import { Header } from '../components';
import { AuthContext } from '../context/auth';

export default function HeaderContainer({ children }) {
  const { user, logout } = useContext(AuthContext);

  function signOut() {
    logout();
  };

  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME}>HALU</Header.Logo>
          <Header.Group>
            { user ? (
              <Header.Profile>
                <Header.Text> {user.username} </Header.Text>
                <Header.Picture />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture />
                    <Header.TextLink> {user.username} </Header.TextLink>
                  </Header.Group>
                  <Header.Group>
                    <Header.TextLink onClick={signOut}>Logout</Header.TextLink>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            ) : (
              <Header.ButtonLink to={ROUTES.LOGIN}>
                Log in <img src='/images/icons/right-arrow.png' alt='Log in page'/>
              </Header.ButtonLink>
            )
          }
          </Header.Group>
        </Header.Frame>
        {children}
      </Header>
    </>
  );
};
