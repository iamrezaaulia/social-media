import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: auto;
  max-width: 470px;
  width: 100%;
  margin: auto;
  padding: 60px 80px 60px;
  margin: 25px auto;
  background-color: #1DA1F2;
  box-sizing: border-box;
  border-radius: 20px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 470px;
  width: 100%;
`;

export const Error = styled.div`
  background: #ffb300;
  border: 0;
  outline: none;
  border-radius: 2px;
  font-size: 14px;
  margin: 0 0 16px;
  color: #ffffff;
  padding: 15px 20px;

  li {
    margin: 2px 0;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 24px;
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 15px;
  font-weight: 400;
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 14px;
  line-height: normal;
  color: #333333;
`;

export const Link = styled(ReactRouterLink)`

  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background-color: #f5f6f8;
  border-radius: 2px;
  border: 0;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: 500;
  color: #333333;
  height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  outline: none;

  &:last-of-type {
    margin-bottom: 30px;
  }

  &:focus:invalid {
    border: 10px solid #e87c03;
  }
`;

export const Submit = styled.button`
  background-color: #f5f6f8;
  border-radius: 2px;
  border: 0;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: bold;
  color: #333333;
  margin: 16px 0 18px;
  padding: 16px;
  outline: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  } 
`;