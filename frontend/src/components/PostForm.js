import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST, GET_POSTS } from '../apollo/queries';

function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const [addPost, { loading }] = useMutation(ADD_POST, {
    // Re-fetch the posts list after adding so the UI stays in sync
    refetchQueries: [{ query: GET_POSTS }],
    awaitRefetchQueries: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!title.trim() || !content.trim()) {
      setError('Please fill in both the title and content.');
      return;
    }

    try {
      await addPost({ variables: { title: title.trim(), content: content.trim() } });
      setTitle('');
      setContent('');
    } catch (err) {
      setError(err.message || 'Something went wrong while adding the post.');
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h2>Add a New Post</h2>

      {error && <p className="form-error">{error}</p>}

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a title"
          disabled={loading}
        />
      </div>

      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post..."
          rows={5}
          disabled={loading}
        />
      </div>

      <button type="submit" className="submit-btn" disabled={loading}>
        {loading ? 'Posting...' : 'Add Post'}
      </button>
    </form>
  );
}

export default PostForm;
