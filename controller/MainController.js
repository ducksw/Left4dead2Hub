import Post from '../models/PostModels.js';

const mn = {};

mn.index = async (req, res) => {
  let posts = await Post.find();
  posts.reverse();

  posts = posts.slice(0, 1);

  res.render('index', { posts });
}

export default mn; 
