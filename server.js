/**
 * Module dependencies.
 */
const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');

const homePage = require('./public/app');
const construction = require('./public/routes/index');
const router = express.Router();

const app = express();
const publicDir = `${__dirname}/public`;

/*
 * view engine config
 */
app.engine('hbs', hbs({
  // set file extenstions to .hbs
  extname: 'hbs',
  helpers: {
    if_eq: function (a, b, opts) {
      if (a == b) {
        return opts.fn(this);
      }
      return opts.inverse(this);
    },
  },
  // set defaultLayout
  defaultLayout: 'main',
  // set defaultLayout directory
  layoutsDir: `${__dirname}/public/views/layouts/`,
  // set partial directory
  partialsDir: `${__dirname}/public/views/partials`,
}));

app.set('views', `${__dirname}/public`);
app.set('view engine', 'hbs');

app.use(express.static(publicDir));

app.use('/construction', construction);

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Ascension'
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
