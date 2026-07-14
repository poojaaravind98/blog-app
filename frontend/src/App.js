import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 My Blog</h1>
        <p>A simple full-stack blog built with React, GraphQL, Node.js and MongoDB</p>
      </header>

      <main className="app-main-single">
        <div className="list-header">
          <h2>All Posts</h2>
          <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>
            + Add Post
          </button>
        </div>

        <PostList />
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add a New Post"
      >
        <PostForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>

      <footer className="app-footer">
        <p>Full Stack Developer Assignment Demo</p>
      </footer>
    </div>
  );
}

export default App;