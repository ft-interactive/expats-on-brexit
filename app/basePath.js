/**
 * ugly hack - this decides the base path for routing purposes.
 * it varies depending on where the site is deployed.
 */

/* eslint-disable no-underscore-dangle */

let _basePath;
switch (location.hostname) {
  case 'localhost':
    _basePath = '';
    break;
  case 'ft-interactive.github.io':
    _basePath = '/expats-on-brexit';
    break;
  case 'ig.ft.com':
    _basePath = '/sites/expats-on-brexit';
    break;
  default:
    _basePath = '';
    console.warn('Host not known; add it to basePath.js');
}

const basePath = _basePath;

export default basePath;
