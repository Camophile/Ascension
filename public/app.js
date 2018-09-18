const express = require('express');
const path = require('path');

const app = express();

function goal() {
  return app.use('/', express.static(path.join(__dirname),
    {
      extensions:['html'],
    })
  );
}

module.exports = goal();
