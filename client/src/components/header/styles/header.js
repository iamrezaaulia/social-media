import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Frame = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f6f8;
  width: 100%;
  max-width: 468px;
  margin: 16px 0 0;
  padding: 16px 0;
  border: 0;
  border-radius: 2px;
  box-sizing: border-box;
  outline: none;
`;

export const Group = styled.section`
  display: flex;
  align-items: center;
`;

export const Logo = styled(ReactRouterLink)`
  color: #1DA1F2;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const TextLink = styled(ReactRouterLink)`
  color: #121212;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  margin-right: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: flex;
  align-items: center;
  background-color: #1DA1F2;
  width: auto;
  height: fit-content;
  color: #ffffff;
  border: 0;
  border-radius: 2px;
  box-sizing: border-box;
  font-size: 12px;
  font-weight: 500;
  padding: 8px 18px;
  text-decoration: none;
  cursor: pointer;

  img {
    margin-left: 8px;
    filter: brightness(0) invert(1);
    width: 12px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const Break = styled.div`
	flex-basis: 100%;
	height: 0;
`;