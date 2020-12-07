import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import moment from 'moment-timezone';

import { Loading, Tweet } from '../components';

export default function TweetContainer() {
  const { loading, data } = useQuery(FETCH_POST_QUERY);

  const likePost = () => {
    console.log('like post')
  }
  
  const commentPost = () => {
    console.log('comment post')
  }

  return (
    <>
      { loading ? (
        <Loading>Loading ...</Loading>
      ) : (
        data && data.getPosts.map((post) => (
          <Tweet key={post.id}>
            <Tweet.Frame>
              <Tweet.Group>
                <Tweet.Avatar />
                <Tweet.Username>{post.username}</Tweet.Username>
              </Tweet.Group>
              <Tweet.Description>
                {post.body}
              </Tweet.Description>
              <Tweet.Group>
                <Tweet.Time to={`post/${post.id}`}>
                  {moment.tz(post.created, 'Asia/Jakarta').format('h:mm A')}
                </Tweet.Time>
                <Tweet.Dot />
                <Tweet.Time to={`post/${post.id}`}>
                  {moment.tz(post.created, 'Asia/Jakarta').format('MMM D, YYYY')}
                </Tweet.Time>
              </Tweet.Group>
              <Tweet.Break />
              <Tweet.Icon>
                <Tweet.IconGroup>
                  <Tweet.Like onClick={likePost}/>
                  <Tweet.LikeNumber>
                    {post.likeCount}  
                  </Tweet.LikeNumber>
                </Tweet.IconGroup>
                <Tweet.IconGroup>
                  <Tweet.Comment onClick={commentPost}/>
                  <Tweet.CommentNumber>
                    {post.commentCount} people are Comment about this
                  </Tweet.CommentNumber>
                </Tweet.IconGroup>
              </Tweet.Icon>
            </Tweet.Frame>
          </Tweet>
        ))
      )}
    </>
  );
};

const FETCH_POST_QUERY = gql`
  {
    getPosts {
      id
      body
      username
      created
      comments{
        id
        body
        username
      }
      commentCount
      likes{
        id
        username
      }
      likeCount
    }
  }
`;