/**
 * Renders the Landing page
 */

export function index(req, res) {
  res.render('homepage/index', {
    title: 'Ascension',
  });
}
