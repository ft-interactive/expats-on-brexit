/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import InternalLink from '../InternalLink';
import OFooter from '../OFooter';
import styles from './styles.scss';

export function HomePage() {
  return (
    <div className={styles.homePage}>
      <div className={styles.mainContent}>
        <h1>This is the Homepage!</h1>

        <InternalLink route="/form" className={styles.floatingActionButton}>Write a comment</InternalLink>
      </div>

      <OFooter />
    </div>
  );
}

export default HomePage;
