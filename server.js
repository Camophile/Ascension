/**
 * Module dependencies.
 */
const express = require('express');
const path = require('path');
const router = express.Router();

const app = express();

// add string concat to specify if index moved to diff dir

/* app.use('/styles', sass({
  src: `${__dirname}/styles`,
  dest: `${publicDir}/styles`,
  debug: true,
  outputStyle: 'expanded',
})); */

app.use('/', express.static(path.join(__dirname, '/public'),
  {
    extensions:['html'],
  })
);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
