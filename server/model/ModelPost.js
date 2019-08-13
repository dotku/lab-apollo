const axios = require('axios');

async function placeholderPosts() {
  try {
    const rsp = await axios('https://jsonplaceholder.typicode.com/posts');
    console.log('data', rsp.data);

    return rsp.data;
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