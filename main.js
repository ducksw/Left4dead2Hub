import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express';
import connectDB from './database.js'
import configuration from './config.js';
import dotenv from 'dotenv';
import hbs from 'hbs';

import routes from './route.js';

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ### CONFIG HBS ###
hbs.registerPartials(path.join(__dirname, '/views/partials'), function () {});
//hbs.registerPartials(path.join(__dirname, 'views', 'partials'));
app.use(express.static(path.join(__dirname, '/public')));
app.set("views", path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();
configuration();

routes(app);

app.listen(process.env.PORT, () => {
  console.log(`The app listening on port http://localhost:${process.env.PORT}/`);
});
