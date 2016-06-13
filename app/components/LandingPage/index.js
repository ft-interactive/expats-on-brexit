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
import { selectOpinions, selectNumCountries } from '../App/selectors';
import { RESET_FILTERS, SET_FILTER } from '../../constants';

function LandingPage({ opinions, numCountries, dispatch }) {
  const insertOpinions = (...opinionIDs) => (
    <OpinionsList
      opinions={opinionIDs.map(id => opinions.find(opinion =>
        opinion.id === id))}
    />
  );

  const setExpatsLivingInEU = () => {
    dispatch({ type: RESET_FILTERS });
    dispatch({ type: SET_FILTER, name: 'livingOutsideEU', value: false });
  };

  const setCountrySwitzerland = () => {
    dispatch({ type: RESET_FILTERS });
    dispatch({ type: SET_FILTER, name: 'country', value: 'Switzerland' });
  };

  const setBelgium = () => {
    dispatch({ type: RESET_FILTERS });
    dispatch({ type: SET_FILTER, name: 'country', value: 'Belgium' });
  };

  const setAustralia = () => {
    dispatch({ type: RESET_FILTERS });
    dispatch({ type: SET_FILTER, name: 'country', value: 'Australia' });
  };

  const setNewZealand = () => {
    dispatch({ type: RESET_FILTERS });
    dispatch({ type: SET_FILTER, name: 'country', value: 'New Zealand' });
  };

  return (
    <div className="landing-page page">
      <SiteHeader simple />

      <main>
        <div className="landing-page__illustration">
          <img src="https://image.webservices.ft.com/v1/images/raw/https%3A%2F%2Fig.ft.com%2Fsites%2Fexpats-on-brexit-files%2Fillustration.jpg?source=ig&amp;width=740&amp;quality=high" alt="" role="presentation" />
        </div>

        <header className="landing-page__header">

          <h1 className="landing-page__headline">
            What do Britons abroad think of Brexit?
          </h1>

          <p className="landing-page__standfirst">
            FT survey aggregates the British expat perspective from more than 400 readers across {numCountries} countries
          </p>

          <div className="landing-page__header-meta">

            <p className="landing-page__byline">
              By <a href="https://twitter.com/lilahrap">Lilah&nbsp;Raptopoulos</a>, <a href="https://twitter.com/callumlocke">Callum&nbsp;Locke</a>, <a href="https://twitter.com/carolinenevitt">Caroline&nbsp;Nevitt</a> and <a href="https://twitter.com/alekswis">Aleks&nbsp;Wisniewska</a>
            </p>

            <p className="landing-page__date">
              May 23, 2016
            </p>
          </div>
        </header>

        <div className="landing-page__copy">
          <p>Millions of Britons living abroad have an interest in the outcome of the <a href="https://www.ft.com/eu-referendum">EU referendum</a>, and many of them can vote. With election day looming, we asked those FT readers to describe how the outcome would affect them and what living abroad has taught them. Responses have been flooding in from Malta to Ghana to South Korea. Click the button below to explore their points of view.</p>

          <p className="landing-page__explore-link">
            <InternalLink route="/explore" className="btn btn--dark btn--raised">
              Explore expat responses
              <span className="icon icon--interaction"></span>
            </InternalLink>
          </p>

          <p>An estimated 5m British citizens live outside the UK, and they lean overwhelmingly in favour of remaining in the EU. Independent research conducted by global expat network Angloinfo put the split at 73 per cent Remain and 20 per cent Leave, with 7 per cent undecided. Though unscientific, our results show a similar breakdown: 72 per cent of our total respondents lean towards staying in. Here are some standout perspectives.</p>


          <h3>EU dwellers: “I want practical facts”</h3>

          <p><InternalLink route="/explore" onClick={() => { setExpatsLivingInEU(); }}>Expats living in EU countries</InternalLink> will be most directly affected by the vote. One main concern was what would happen to their residency rights if the UK voted to quit the union.</p>

          {insertOpinions(25)}

          <p>Many EU-based respondents also provided interesting context from their experiences living on the continent. Here are the observations of two FT readers living in Spain:</p>

          {insertOpinions(30, 16)}

          <h3>The Swiss model: “Some sovereignty!”</h3>

          <p>European countries outside the EU are often raised as potential models for the UK if it left the bloc. We received <InternalLink route="/explore" onClick={() => { setCountrySwitzerland(); }}>29 responses from Switzerland</InternalLink>, 69 per cent of which leaned towards Remain. Many of them spoke of the danger of losing the opportunity to influence EU laws.</p>

          {insertOpinions(8, 53)}

          <div className="landing-page__factbox-pair">
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
          </div>

          <h3>Brussels residents: the insider perspective</h3>

          <p>A few <InternalLink route="/explore" onClick={() => { setBelgium(); }}>respondents from Brussels</InternalLink> offered some interesting insights on the inner workings of the EU as an institution.</p>

          {insertOpinions(26)}

          <h3>Australasians: “Come on out, the water’s lovely”</h3>

          <p>Residents of Commonwealth countries were much more split: 45 per cent leaned towards Remain and 38 per cent Leave. Many respondents from <InternalLink route="/explore" onClick={() => { setNewZealand(); }}>New Zealand</InternalLink> and <InternalLink route="/explore" onClick={() => { setAustralia(); }}>Australia</InternalLink> referred to their varied relationship with the UK – pointing to those countries as models for economic independence, or chastising the UK for focusing too much attention on the EU in recent years.</p>

          {insertOpinions(19, 101)}

          <h3>The disenfranchised: “I have no vote!”</h3>

          <p>Finally, it is worth noting the concerns of British expats who have lived abroad for more than 15 years and therefore cannot vote in the referendum. These ineligible EU members recently <a href="https://www.ft.com/fastft/2016/05/24/british-expats-lose-third-challenge-over-brexit-vote/">lost their third challenge</a> in the supreme court. Many responses from this 15-year-plus population expressed deep frustration.</p>

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
          <p>Are&nbsp;you&nbsp;also&nbsp;a&nbsp;British&nbsp;expat? We&nbsp;want&nbsp;to&nbsp;hear&nbsp;from&nbsp;you.</p>
          <div className="landing-page__add-your-view-button">
            <InternalLink route="/form" className="btn">Add your view</InternalLink>
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
  numCountries: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(createStructuredSelector({
  opinions: selectOpinions,
  numCountries: selectNumCountries,
}))(LandingPage);
