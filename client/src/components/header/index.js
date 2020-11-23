import React from 'react';
import {
  Container,
  Frame,
  Group,
  Logo,
  TextLink,
  ButtonLink
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

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
