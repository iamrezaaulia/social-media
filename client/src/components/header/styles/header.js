import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { 
  HiOutlineUser 
} from 'react-icons/hi';

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
  font-size: 18px;
  font-family: 'Montserrat';
  font-weight: 600;
  outline: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Text = styled.h1`
  color: #14171A;
  font-size: 16px;
  font-weight: 600;
  margin-right: 14px;
`;

export const TextLink = styled(ReactRouterLink)`
  color: #ffffff;
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
  font-size: 15px;
  font-family: 'Montserrat';
  font-weight: 500;
  padding: 8px 18px;
  text-decoration: none;
  cursor: pointer;

  img {
    margin-left: 8px;
    filter: brightness(0) invert(1);
    width: 14px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const Picture = styled(HiOutlineUser)`
  background-color: #aaaaaa;
  border: 1px solid none;
  border-radius: 50%;
  box-sizing: border-box;
  outline: none;
  color: #ffffff;
  width: 32px;
  height: 32px;
  padding: 6px;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const Dropdown = styled.section`
  display: none;
  position: absolute;
  background-color: rgba(170, 170, 170, 0.8);
  padding: 10px;
  width: 100px;
  top: 36px;
  right: 10px;
  border: none;
  border-radius: 12px;

  ${Group}:last-of-type ${TextLink} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${TextLink}, ${Picture} {
      cursor: default;
    }
  }

  ${Picture} {
    margin-right: 10px;
  }

  ${TextLink} {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.section`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  ${Picture} {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const Break = styled.section`
	flex-basis: 100%;
	height: 0;
`;