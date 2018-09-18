/**
 * Module dependencies.
 */
const express = require('express');
const path = require('path');
const homePage = require('./public/app');
const router = express.Router();

const app = express();

const publicDir = `${__dirname}/public`;

// add string concat to specify if index moved to diff dir

/* app.use('/styles', sass({
  src: `${__dirname}/styles`,
  dest: `${publicDir}/styles`,
  debug: true,
  outputStyle: 'expanded',
})); */

app.use(express.static(`${publicDir}/construction`));

console.log('!!!!!!!! server.js homePage.goal', homePage, '\n');

app.use('/no-view-mode', homePage);
/* app.use('/', express.static(path.join(__dirname, '/public/construction'),
  {
    extensions:['html'],
  })
); */

app.listen(3000, () => console.log('Example app listening on port 3000!'));
