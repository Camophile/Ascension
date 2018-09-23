const router = require('express').Router();

function loadConstructionPage() {
  return router.get('/', (req, res) => {
    res.render('construction/index', {
      title: 'Under Construction',
      layout: 'construction'
    });
  });
}

module.exports = loadConstructionPage();
