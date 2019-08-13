const fetch = require("node-fetch");
const axios = require('axios');

async function placeholderPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    return posts;
  } catch(e) {
    console.error(e);
  }
}

class ModelPost {
  constructor() {
    this.posts = placeholderPosts();
  }

  async createPost(post) {
    const {data: dataPost} = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
    // console.log(posts);
    return dataPost;
  }
}

module.exports = ModelPost;