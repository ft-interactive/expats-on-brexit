/**
 * LandingPage - the article.
 */

import InternalLink from '../../components/InternalLink';
import React, { PropTypes } from 'react';
import SiteHeader from '../SiteHeader';
import ShareLinks from '../ShareLinks';
import OFooter from '../OFooter';
import { connect } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { selectOptions } from '../App/selectors';
import basePath from '../../basePath';

function LandingPage() {
  return (
    <div className="landing-page page">
      <SiteHeader simple />

      <main>
        <div className="landing-page__illustration">
          <img src="http://i.imgur.com/su6eFmY.jpg" alt="" role="presentation" />
        </div>

        <header className="landing-page__header">

          <h1 className="landing-page__headline">
            What do Britons abroad think of Brexit?
          </h1>
          <p className="landing-page__standfirst">
            FT survey aggregates the British expat perspective from 300+ readers across 53 countries
          </p>
          <p className="landing-page__byline">
            By Lilah&nbsp;Raptopoulos, Callum&nbsp;Locke, Caroline&nbsp;Nevitt and Aleks&nbsp;Wisniewska
          </p>
          <p className="landing-page__date">
            May 23, 2016
          </p>
        </header>

        <div className="landing-page__copy">
          <p>Millions of Britons living abroad have an interest in the outcome of the EU referendum. With the June 7 voting registration deadline looming, we asked FT readers to describe how the referendum may affect them and what they have learned from living abroad. Nearly 350 British expats in 53 countries responded to our call - from Malta to Ghana to South Korea. You can explore their responses in our interactive. If you are an expat yourself, there is space to add your own opinion.</p>

          <p className="landing-page__explore-link">
            <InternalLink route="/explore" className="btn btn--dark">Explore expat responses</InternalLink>
          </p>

          <p>An estimated five million British citizens live outside the UK, and they lean overwhelmingly in favour of remaining in the EU. Independent research conducted by global expat network Angloinfo put the split at 73 per cent Remain and 20 per cent Leave, with 7 per cent undecided. Though much less scientific, our results show a similar breakdown: 71 per cent of our total respondents lean towards staying in. Here are some standout perspectives.</p>

          <div className="landing-page__aside-pair">
            <aside className="landing-page__factbox">
              <h4>Public information for British expats</h4>
              <ul>
                <li>Register online (before June 7)</li>
                <li>Government Q&A page</li>
                <li>Vote Leave campaign</li>
                <li>Vote Remain campaign</li>
              </ul>
            </aside>

            <aside className="landing-page__factbox">
              <h4>FT coverage on the EU referendum</h4>
              <ul>
                <li>Your top 10 questions answered</li>
                <li>What do Europeans think of Brexit?</li>
                <li>What are economists' views on Brexit?</li>
              </ul>
            </aside>
          </div>

          <h3>EU dwellers: “I want practical facts”</h3>

          <p>Expats living in EU countries will be most directly affected by this vote. One main concern was what would happen to their residency rights if the UK voted to quit the union.</p>

          <p>TK: 2 OPINIONS</p>

          <h3>The Swiss model: “Some sovereignty!”</h3>

          <p>European countries outside the EU are often raised as potential models for the UK if it left the bloc. We received 15 responses from Switzerland, 12 of which leaned Remain. Many of them spoke of the danger of losing the opportunity to influence EU laws.</p>

          <p>TK: 2 OPINIONS</p>

          <h3>Brussels residents: the insider perspective</h3>

          <p>A few respondents from Brussels offered some interesting insights on the inner workings of the EU as an institution.</p>

          <p>TK: 1 OPINION</p>

          <h3>Australasians: “Come on out, the water’s lovely”</h3>

          <p>Residents of Commonwealth countries were much more split: 49 per cent leaned Remain and 33 per cent Leave. Many responses from New Zealand and Australia referred to their varied relationship with the UK - pointing to those countries as models for economic independence, or chastising the UK for focusing too much attention on the EU in recent years.</p>

          <p>TK: 1 OPINION</p>

          <h3>The disenfranchised: “I have no vote!”</h3>

          <p>Finally, it is worth noting the concerns of British expats who have lived abroad for more than 15 years and therefore cannot vote in the referendum. These ineligible EU members recently lost a challenge in the court of appeal; their case has escalated to the supreme court. Many responses from this 15-year-plus population expressed deep frustration.</p>

          <p>TK: 2 OPINIONS</p>

          <p>More British expats are eligible to vote than they think: according to a survey by the Electoral Commission, 20 per cent of eligible voters wrongly think they are not entitled. The number of overseas Britons who have registered to vote has jumped to approximately 196,000 in recent months, but that still only accounts for about 3 per cent of British expats - and 1 per cent of eligible Brexit voters.</p>
        </div>

        <div className="landing-page__invitation">
          <p>Are you also a British expat? We want to hear from you.</p>
          <p>Quality responses will be published</p>

          <div>
            <InternalLink route="/form" className="btn btn--dark">Add your views</InternalLink>
          </div>
        </div>

        <ShareLinks
          url="https://ig.ft.com/sites/expats-on-brexit/"
          text="What do British expats think of Brexit?"
        />

        <p className="landing-page__illustrator-credit">
          Illustration by Jonathan McHugh
        </p>
      </main>

      <OFooter />
    </div>
  );
}

LandingPage.propTypes = {
  // headline: PropTypes.string.isRequired,
  // standfirst: PropTypes.string.isRequired,
  // byline: PropTypes.string.isRequired,
};

export default connect(createStructuredSelector({
  // headline: createSelector(selectOptions, options => options.headline),
  // standfirst: createSelector(selectOptions, options => options.standfirst),
  // byline: createSelector(selectOptions, options => options.byline),  
}))(LandingPage);
