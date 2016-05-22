/**
 * <SiteHeader />
 *
 * Used on every page (variations for different pages are just done by setting
 * props).
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { selectOptions } from '../App/selectors';

export function SiteHeader({ linkToArticle }) {
  return (
    <header className="site-header">
      <a href="https://www.ft.com/" title="Go to Financial Times homepage">
        <span>Financial Times</span>
      </a>
    </header>
  );
}

SiteHeader.propTypes = {
  linkToArticle: PropTypes.string.isRequired,
};

const select = createStructuredSelector({
  linkToArticle: createSelector(selectOptions, options => options.linkToArticle),
});

export default connect(select)(SiteHeader);
