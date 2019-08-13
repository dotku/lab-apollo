
const ModelPost = require("./ModelPost");
// console.log('ModelPost', ModelPost);

module.exports = {
  ModelPost: new ModelPost(),
  ModelBook: {
    ...require("./ModelBook")
  },
};