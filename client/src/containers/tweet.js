import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import moment from 'moment-timezone'

import { Loading, Tweet } from '../components';

export default function TweetContainer() {
  const { loading, data } = useQuery(FETCH_POST_QUERY);

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
                <Tweet.Time>{moment.tz(post.created, 'Asia/Jakarta').format('MMMM Do YYYY, h:mm:ss a')}</Tweet.Time>
              </Tweet.Group>
              <Tweet.Break />
              <Tweet.Icon>
                <Tweet.IconGroup>
                  <Tweet.Like />
                  <Tweet.LikeNumber>
                    {post.likeCount}  
                  </Tweet.LikeNumber>
                </Tweet.IconGroup>
                <Tweet.IconGroup>
                  <Tweet.Comment />
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