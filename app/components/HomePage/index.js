/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import InternalLink from '../InternalLink';

export function HomePage() {
  return (
    <div>
      <h1>This is the Homepage!</h1>
      <p>
        <InternalLink route="/form">Form</InternalLink>
      </p>
    </div>
  );
}

export default HomePage;
