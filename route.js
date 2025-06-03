import express from 'express';

import POST from './controller/PostController.js';
import ADMIN from './controller/AdminController.js';
import PLAYER from './controller/PlayerController.js';
import MAIN from './controller/MainController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/home');
});

router.get('/panel', (req, res) => {
  res.render('admin/main');
});

// main
router.get('/home', MAIN.index);

// admins
router.get('/panel/post', POST.index);
router.post('/panel/post', POST.CreatePost);
router.get('/panel/createPlayer', ADMIN.index);
router.post('/panel/createPlayer', ADMIN.create);

// edit player
router.get('/panel/edit', ADMIN.editView);
router.get('/panel/edit/:id', ADMIN.viewOnePlayer);
router.post('/panel/edit/:id', ADMIN.editPlayer);

// players
router.get('/stats', PLAYER.stats);
router.get('/liga', PLAYER.champions);
router.get('/rankings', PLAYER.ranking);
router.get('/admin', ADMIN.viewAdmin);

// posts
router.get('/noticias', POST.viewPostAll);

export default (app) => {
  app.use(router);
}