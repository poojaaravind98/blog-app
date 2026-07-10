import React from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h2>Pooja's Test Blog</h2>
        <p>A simple web application to view and add blog posts</p>
      </header>

      <main className="app-main">
        <section className="form-section">
          <PostForm />
        </section>

        <section className="list-section">
          <h2>All Posts</h2>
          <PostList />
        </section>
      </main>

      <footer className="app-footer">
        <p>Full Stack Developer Assignment Demo</p>
      </footer>
    </div>
  );
}

export default App;
