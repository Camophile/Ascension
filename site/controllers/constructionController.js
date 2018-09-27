/**
 * Renders the construction page
 */

export function index(req, res) {
  res.render('construction/index', {
    title: 'Under Construction',
    layout: 'construction'
  });
}
