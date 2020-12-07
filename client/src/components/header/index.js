import React from 'react';
import {
  Container,
  Frame,
  Group,
  Logo,
  Text,
  TextLink,
  ButtonLink,
  Profile,
  Dropdown,
  Picture,
  Break
} from './styles/header';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) { 
  return <Frame {...restProps}>{children}</Frame>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) { 
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Profile = function FeatureProfile({ children, ...restProps }) {
  return <Profile {...restProps}> {children} </Profile>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Break = function HeaderBreak({...restProps }) {
  return <Break {...restProps} />
};