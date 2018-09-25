/**
 * Renders the public pages based on url
 */

/**
 * Loads page based on url path
 */

export function loadPage(req, res) {
  let title;

  // return the raw path string
  const view = req.url === '/' ? 'home' : req.url.slice(1);

  switch (view) {
    case 'about':
    title = 'About Us';
    break;
    default:
    title = 'Ascension';
  }

  res.render(`${view}/index`, {
    title,
  });
}
