import Post from '../models/PostModels.js';

const ps = {};

ps.index = async (req, res) => {
  res.render('./admin/post');
}

ps.CreatePost = async (req, res) => {
  const post = req.body;

  try {
    const newPost = new Post(post);
    await newPost.save();

    console.log(post);
    res.redirect('/panel/post');
  } catch (error) {
    res.status(500).send("Error al crear el post: " + error.message);
  }
}

ps.viewPostAll = async (req, res) => {
  const posts = await Post.find();
  posts.reverse();

  res.render('noticias', { posts });
}

export default ps; 
