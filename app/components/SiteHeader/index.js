/**
 * <SiteHeader />
 *
 * Used on every page (the 'simple' variant is used on the landing page).
 */

import classnames from 'classnames';
import InternalLink from '../InternalLink';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { selectOptions } from '../App/selectors';

export function SiteHeader({ simple }) {
  return (
    <header className={classnames('site-header', { 'site-header--simple': simple })}>
      <div className="site-header__inner">
        <div className="site-header__link">
          {simple ? null : <InternalLink route="/">Back to article</InternalLink>}
        </div>

        <div className="site-header__brand">
          <a href="https://www.ft.com/" title="Go to Financial Times homepage">
            <span>Financial Times</span>
          </a>
        </div>
      </div>
    </header>
  );
}

SiteHeader.propTypes = {
  simple: PropTypes.bool,
};

const select = createStructuredSelector({
  linkToArticle: createSelector(selectOptions, options => options.linkToArticle),
});

export default connect(select)(SiteHeader);
