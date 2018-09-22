/**
 * Module dependencies.
 */
const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');

const homePage = require('./public/app');
const router = express.Router();

const app = express();

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
  
  app.use(express.static(`${__dirname}/public`));

const publicDir = `${__dirname}/public`;

// add string concat to specify if index moved to diff dir

/* app.use('/styles', sass({
  src: `${__dirname}/styles`,
  dest: `${publicDir}/styles`,
  debug: true,
  outputStyle: 'expanded',
})); */

//app.use(express.static(`${publicDir}/construction`));

app.get('/', (req, res) => {
  res.render('home');
});
//app.use('/no-view-mode', homePage);
/* app.use('/', express.static(path.join(__dirname, '/public/construction'),
  {
    extensions:['html'],
  })
); */

app.listen(3000, () => console.log('Example app listening on port 3000!'));
