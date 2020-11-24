import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: auto;
  max-width: 450px;
  width: 100%;
  margin: auto;
  padding: 60px 68px 60px;
  margin: 25px auto;
  background-color: rgba(1, 173, 159, 0.9);
  box-sizing: border-box;
  border-radius: 2px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 2px;
  font-size: 14px;
  margin: 0 0 16px;
  color: #ffffff;
  padding: 15px 20px;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 32px;
  font-family: 'Montserrat';
  font-weight: 600;
  margin: 0 0 32px;
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 14px;
  line-height: normal;
  color: #333333;
`;

export const Link = styled(ReactRouterLink)`

  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
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
  color: #333333;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  outline: none;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Submit = styled.button`
  background-color: #f5f6f8;
  border-radius: 2px;
  border: 0;
  box-sizing: border-box;
  font-size: 16px;
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