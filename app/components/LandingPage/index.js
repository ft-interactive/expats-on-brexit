/**
 * LandingPage – the article.
 */

import InternalLink from '../../components/InternalLink';
import React, { PropTypes } from 'react';
import SiteHeader from '../SiteHeader';
import ShareLinks from '../ShareLinks';
import OFooter from '../OFooter';
import OpinionsList from '../OpinionsList';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectOpinions } from '../App/selectors';

function LandingPage({ opinions }) {
  const insertOpinions = (...opinionIDs) => (
    <OpinionsList
      opinions={opinionIDs.map(id => opinions.find(opinion =>
        opinion.id === id))}
    />
  );

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
            FT survey aggregates the British expat perspective from more than 300 readers across 53 countries
          </p>

          <div className="landing-page__header-meta">
            <p className="landing-page__byline">
              By Lilah&nbsp;Raptopoulos, Callum&nbsp;Locke, Caroline&nbsp;Nevitt and Aleks&nbsp;Wisniewska
            </p>

            <p className="landing-page__date">
              May 23, 2016
            </p>
          </div>
        </header>

        <div className="landing-page__copy">
          <p>Millions of Britons living abroad have an interest in the outcome of the EU referendum, and many of them can vote. With the June 7 voting registration deadline looming, we asked those FT readers to describe how the outcome would affect them and what living abroad has taught them. Responses flooded in from Malta to Ghana to South Korea. Click the button below to explore their points of view.</p>

          <p className="landing-page__explore-link">
            <InternalLink route="/explore" className="btn btn--dark btn--raised">
              Explore expat responses
              <span className="icon icon--interaction"></span>
            </InternalLink>
          </p>

          <p>An estimated 5m British citizens live outside the UK, and they lean overwhelmingly in favour of remaining in the EU. Independent research conducted by global expat network Angloinfo put the split at 73 per cent Remain and 20 per cent Leave, with 7 per cent undecided. Though unscientific, our results show a similar breakdown: 71 per cent of our total respondents lean towards staying in. Here are some standout perspectives.</p>

          <div className="landing-page__factbox-pair">
            <aside className="landing-page__factbox">
              <h4>Public information for British expats</h4>
              <ul>
                <li>
                  <a href="https://www.gov.uk/register-to-vote" target="_blank">
                    Register online (before June 7)
                  </a>
                </li>
                <li>
                  <a href="https://www.eureferendum.gov.uk/q-and-a/" target="_blank">
                    Government Q&A page
                  </a>
                </li>
                <li>
                  <a href="http://www.voteleavetakecontrol.org/campaign" target="_blank">
                    Vote Leave campaign
                  </a>
                </li>
                <li>
                  <a href="http://www.strongerin.co.uk/" target="_blank">
                    Vote Remain campaign
                  </a>
                </li>
              </ul>
            </aside>

            <aside className="landing-page__factbox">
              <h4>FT coverage on the EU referendum</h4>
              <ul>
                <li>
                  <a href="https://www.ft.com/eu-referendum">Our Brexit hub page</a>
                </li>
                <li>
                  <a href="https://www.ft.com/content/e7b2d4d4-daea-11e5-98fd-06d75973fe09">Your top 10 questions answered</a>
                </li>
                <li>
                  <a href="https://www.ft.com/content/1465ef50-da34-11e5-98fd-06d75973fe09">What Brexit means for the UK economy</a>
                </li>
                <li>
                  <a href="https://www.ft.com/content/1a86ab36-afbe-11e5-b955-1a1d298b6250">What are economists’ views on Brexit?</a>
                </li>
              </ul>
            </aside>
          </div>

          <h3>EU dwellers: “I want practical facts”</h3>

          <p>Expats living in EU countries will be most directly affected by the vote. One main concern was what would happen to their residency rights if the UK voted to quit the union.</p>

          {insertOpinions(25)}

          <p>Many EU-based respondents also provided interesting context from their experiences living on the continent. Here are the observations of two FT readers living in Spain:</p>

          {insertOpinions(30, 16)}

          <h3>The Swiss model: “Some sovereignty!”</h3>

          <p>European countries outside the EU are often raised as potential models for the UK if it left the bloc. We received 17 responses from Switzerland, 12 of which leaned towards Remain. Many of them spoke of the danger of losing the opportunity to influence EU laws.</p>

          {insertOpinions(8, 53)}

          <h3>Brussels residents: the insider perspective</h3>

          <p>A few respondents from Brussels offered some interesting insights on the inner workings of the EU as an institution.</p>

          {insertOpinions(26)}

          <h3>Australasians: “Come on out, the water’s lovely”</h3>

          <p>Residents of Commonwealth countries were much more split: 49 per cent leaned towards Remain and 33 per cent Leave. Many respondents from New Zealand and Australia referred to their varied relationship with the UK – pointing to those countries as models for economic independence, or chastising the UK for focusing too much attention on the EU in recent years.</p>

          {insertOpinions(19, 101)}

          <h3>The disenfranchised: “I have no vote!”</h3>

          <p>Finally, it is worth noting the concerns of British expats who have lived abroad for more than 15 years and therefore cannot vote in the referendum. These ineligible EU members recently <a href="https://www.ft.com/content/f56df4d6-0d22-11e6-ad80-67655613c2d6">lost a challenge</a> in the court of appeal and their case <a href="http://www.theguardian.com/politics/2016/may/20/british-expats-battle-for-eu-referendum-vote-goes-to-supreme-court">has escalated</a> to the supreme court. Many responses from this 15-year-plus population expressed deep frustration.</p>

          {insertOpinions(12, 1)}

          <p>More British expats are eligible to vote than they think: according to a survey by the Electoral Commission, 20 per cent of eligible voters wrongly think they are not entitled. The number of overseas Britons who have registered to vote has jumped to approximately 196,000 in recent months, but that still only accounts for about 3 per cent of British expats – and 1 per cent of eligible Brexit voters.</p>

          <p className="landing-page__explore-link">
            <InternalLink route="/explore" className="btn btn--dark btn--raised">
              Explore expat responses
              <span className="icon icon--interaction"></span>
            </InternalLink>
          </p>
        </div>

        

        <div className="landing-page__invitation-well">
          <p>Are you also a British expat? We want to hear from you.</p>
          <div>
            <InternalLink route="/form" className="btn btn--raised">Add your view</InternalLink>
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
  opinions: PropTypes.array.isRequired,
};

export default connect(createStructuredSelector({
  opinions: selectOpinions,
}))(LandingPage);
