import React from 'react';
import {
  Container,
  Frame,
  Avatar,
  Description,
  Group,
  Icon,
  IconGroup,
  Like,
  LikeNumber,
  Comment,
  CommentNumber,
  Username,
  Time,
  Dot,
  Break
} from './styles/tweet';

export default function Tweet({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Tweet.Frame = function TweetFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Tweet.Avatar = function TweetAvatar({ ...restProps }) {
  return <Avatar {...restProps}/>;
};

Tweet.Description = function TweetDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Tweet.Icon = function TweetIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

Tweet.Group = function TweetGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Tweet.IconGroup = function TweetIconGroup({ children, ...restProps }) {
  return <IconGroup {...restProps}>{children}</IconGroup>;
};

Tweet.Like = function TweetLike({ ...restProps }) {
  return <Like {...restProps} />;
};

Tweet.LikeNumber = function TweetLikeNumber({ children, ...restProps }) {
  return <LikeNumber {...restProps}>{children}</LikeNumber>;
};

Tweet.Comment = function TweetComment({...restProps }) {
  return <Comment {...restProps} />;
};

Tweet.CommentNumber = function TweetCommentNumber({ children, ...restProps }) {
  return <CommentNumber {...restProps}>{children}</CommentNumber>;
};

Tweet.Username = function TweetUsername({ children, ...restProps }) {
  return <Username {...restProps}>{children}</Username>;
};

Tweet.Time = function TweetTime({ children, ...restProps }) {
  return <Time {...restProps}>{children}</Time>;
};

Tweet.Dot = function TweetDot({ ...restProps }) {
  return <Dot {...restProps}/>;
};

Tweet.Break = function TweetBreak({ ...restProps }) {
  return <Break {...restProps}/>;
};
