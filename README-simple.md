# Full Stack Blog App

A simple full-stack blog application where users can view existing blog posts and add new ones. The application is built using React, Node.js, GraphQL, Apollo Server, and MongoDB.

## Tech Stack

- Frontend: React, Apollo Client, CSS
- Backend: Node.js, Express, Apollo Server (GraphQL)
- Database: MongoDB with Mongoose

## Approach

- The backend exposes a GraphQL API (via Apollo Server + Express) with two main operations: posts (fetch all posts) and addPost (create a new post). Posts are stored in MongoDB using Mongoose, which also auto-generates createdAt timestamps.
- Integrated Apollo Client in the React frontend to query and mutate data.
- Created reusable React components for displaying posts and adding new posts.
- Plain CSS is used for styling, with a responsive two-column layout (form + list) that collapses to a single column on smaller screens.

## Project Structure

```
blog-app/
├── backend/
│   ├── graphql/
│   ├── models/
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    ├── package.json
    └── ...
```

## Prerequisites

- Node.js (v18 or later)
- MongoDB Community Server or MongoDB Atlas

## Setup Instructions

### Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=mongodb://127.0.0.1:27017/blogdb
PORT=4000
```

Start the backend:

```bash
npm start
```

GraphQL endpoint:

```
http://localhost:4000/graphql
```

### Frontend

Open another terminal:

```bash
cd frontend
npm install
npm start
```

Frontend:

```
http://localhost:3000
```

## Features

- View all blog posts
- Add a new blog post
- Store posts in MongoDB
- GraphQL API for querying and creating posts
- Responsive user interface

## Future Improvements

- Edit and delete posts
- User authentication
- Pagination
- Unit and integration testing
- Deployment using Render/Vercel