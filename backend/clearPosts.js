// Run with: node clearPosts.js
require('dotenv').config();
const mongoose = require('mongoose');
const Post = require('./models/Post');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/blogdb';

async function run() {
  await mongoose.connect(MONGO_URI);
  const result = await Post.deleteMany({});
  console.log(`Deleted ${result.deletedCount} posts.`);
  await mongoose.disconnect();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});