import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_POSTS, DELETE_POST } from '../apollo/queries';

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Qatar',
  });
}

function PostList() {
  const { loading, error, data } = useQuery(GET_POSTS, {
    fetchPolicy: 'cache-and-network',
  });

  const [deletePost] = useMutation(DELETE_POST, {
    refetchQueries: [{ query: GET_POSTS }],
  });

  if (loading && !data) return <p className="status-msg">Loading posts...</p>;
  if (error) return <p className="status-msg error">Error loading posts: {error.message}</p>;

  const posts = data?.posts || [];

  if (posts.length === 0) {
    return <p className="status-msg">No posts yet. Be the first to add one!</p>;
  }

  return (
    <>
      <p className="post-count">
        {posts.length} {posts.length === 1 ? 'post' : 'posts'}
      </p>
      <div className="post-list">
        {posts.map((post, index) => (
          <article
            key={post.id}
            className="post-card"
            style={{ animationDelay: `${index * 0.06}s` }}
          >
            <div className="post-card-header">
              <h3>{post.title}</h3>
              <button
                className="delete-btn"
                onClick={() => deletePost({ variables: { id: post.id } })}
                aria-label={`Delete post ${post.title}`}
                title="Delete post"
              >
                ×
              </button>
            </div>
            <p className="post-content">{post.content}</p>
            <span className="post-date">{formatDate(post.createdAt)}</span>
          </article>
        ))}
      </div>
    </>
  );
}

export default PostList;