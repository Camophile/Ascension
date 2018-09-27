/**
 * Module dependencies.
 */
import express from 'express';
import hbs from 'express-handlebars';
import bodyParser from 'body-parser';

import routes from './site/routes/index';

const app = express();
const siteDir = `${__dirname}/site`;

/**
 * Express configuration.
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
  layoutsDir: `${__dirname}/site/views/layouts/`,
  // set partial directory
  partialsDir: `${__dirname}/site/views/partials`,
}));

app.set('views', `${__dirname}/site/views`);
app.set('view engine', 'hbs');

// Loads static assets from /site
app.use(express.static(siteDir));

// Load paths
app.use('/', routes(app));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
