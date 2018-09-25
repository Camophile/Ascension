/**
 * Module dependencies.
 */
import express from 'express';
import hbs from 'express-handlebars';
import path from 'path';

import routes from './public/routes/index';

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

app.set('views', `${__dirname}/public/views`);
app.set('view engine', 'hbs');

// Loads static assets from /public
app.use(express.static(publicDir));

// Load paths
app.use('/', routes(app));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
