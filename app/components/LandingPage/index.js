/**
 * LandingPage - the article.
 */

import InternalLink from '../../components/InternalLink';
import React from 'react';
import SiteHeader from '../SiteHeader';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function LandingPage() {
  return (
    <div className="landing-page">
      <SiteHeader simple />

      <h1>
        LANDING PAGE
      </h1>

      <p>
        <InternalLink route="/explore">explore</InternalLink>
      </p>
    </div>
  );
}

export default connect(createStructuredSelector({

}))(LandingPage);
