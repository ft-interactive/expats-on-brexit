/**
 * ugly hack - this decides the base path for routing purposes.
 * it varies depending on where the site is deployed.
 */

/* eslint-disable no-underscore-dangle */

let _basePath;
switch (location.hostname) {
  case 'localhost':
    _basePath = '/';
    break;
  case 'ft-interactive.github.io':
    _basePath = '/expats-on-brexit/';
    break;
  default:
    throw new Error('Host not known; add it to basePath.js');
}

const basePath = _basePath;

export default basePath;
