import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express';
import connectDB from './database.js'
import dotenv from 'dotenv';
import hbs from 'hbs';

import routes from './route.js';

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

hbs.registerHelper('increment', function(value) {
  return value + 1;
});

hbs.registerHelper('inc', function(value) {
  return parseInt(value) + 1;
});

hbs.registerHelper('eq', function(a, b) {
  return a === b;
});

hbs.registerHelper('ifCond', function(v1, operator, v2, options) {
  switch (operator) {
    case '<':
      return (v1 < v2) ? options.fn(this) : options.inverse(this);
    default:
      return options.inverse(this);
  }
});

hbs.registerHelper('ifBetween', function(index, min, max, options) {
  if (index >= min && index <= max) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

hbs.registerHelper('ifEquals', function(a, b, options) {
  if (a === b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

// ### CONFIG HBS ###
hbs.registerPartials(path.join(__dirname, '/views/partials'), function () {});
//hbs.registerPartials(path.join(__dirname, 'views', 'partials'));
app.use(express.static(path.join(__dirname, '/public')));
app.set("views", path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

routes(app);

app.listen(process.env.PORT, () => {
  console.log(`The app listening on port http://localhost:${process.env.PORT}/`);
})
