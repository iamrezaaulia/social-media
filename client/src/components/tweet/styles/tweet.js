import styled, { css } from 'styled-components/macro';
import { 
  HiOutlineChat, 
  HiOutlineHeart, 
  HiOutlineUser 
} from 'react-icons/hi';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Frame = styled.section`
  display: flex;
  flex-direction: column;
  background: #f5f6f8;
  width: 100%;
  max-width: 468px;
  margin: 8px 0;
  padding: 8px 16px;
  border: 1px solid #CCD6DD;
  border-radius: 12px;
  box-sizing: border-box;
  outline: none;

  &:hover {
    background-color: rgba(204, 214, 221, 0.1);
  }
`;

export const Group = styled.section`
  display: flex;
  align-items: center;
`; 

export const Avatar = styled(HiOutlineUser)`
  background-color: #aaaaaa;
  border: 1px solid none;
  border-radius: 50%;
  box-sizing: border-box;
  outline: none;
  color: #ffffff;
  width: 36px;
  height: 36px;
  padding: 6px;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const Username = styled.p`
  font-size: 15px;
  line-height: 16px;
  font-weight: 700;
  color: #14171A;
  white-space: nowrap;
  margin-left: 12px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Description = styled.p`
  color: #14171A;
  font-size: 15px;
  margin: 10px 0 0;
`;

export const Time = styled(ReactRouterLink)`
  font-size: 14px;
  font-weight: 400;
  color: #657786;
  white-space: nowrap;
  margin: 8px 0 0;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Dot = styled.div`
  background-color: #657786;
  width: 2px;
  height: 2px;
  margin: 8px 6px 0;
`;

export const Break = styled.div`
  border-bottom: 1px solid #CCD6DD;
  padding: 0 16px;
  margin: 12px 0 8px; 
`;

const IconCSS = css`
  width: 19px;
  height: 19px;
  margin: 0 0 0 -6px;
  padding: 6px;
`;

export const LikeNumber = styled.p`
  color: #657786;
  font-size: 15px;
  margin: 0;
`;

export const CommentNumber = styled.p`
  color: #657786;
  font-size: 15px;
  margin: 0;
`;

export const Like = styled(HiOutlineHeart)`
  ${IconCSS};
  color: #657786;
  &:hover {
    background-color: rgba(232, 38, 94, 0.1);
    border-radius: 50%;
    border: 0;
    outline: none;
  }
`;

export const Comment = styled(HiOutlineChat)`
  ${IconCSS};
  color: #657786;

  &:hover {
    background-color: rgba(29,161,242, 0.1);
    border-radius: 50%;
    border: 0;
    outline: none;
  }
`;

export const IconGroup = styled.section`
  display: flex;
  align-items: center;
  margin-right: 16px;

  &:hover ${Like} {
    color: #e8265e;
  }

  &:hover ${LikeNumber} {
    color: #e8265e;
    text-decoration: underline;
    text-decoration-color: #e8265e;
  }

  &:hover ${Comment} {
    color: #1DA1F2;
  }

  &:hover ${CommentNumber} {
    color: #1DA1F2;
    text-decoration: underline;
    text-decoration-color: #1DA1F2;
  }

  > svg {
    margin-right: 4px;
  }
`;

export const Icon = styled.section`
  display: flex;
  align-items: center;
  cursor: pointer;
`;





