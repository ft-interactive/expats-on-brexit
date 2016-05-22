import ControlBar from '../ControlBar';
import InternalLink from '../InternalLink';
import OFooter from '../OFooter';
import OnlyMobile from '../OnlyMobile';
import Opinion from '../Opinion';
import React, { PropTypes } from 'react';
import SiteHeader from '../SiteHeader';
import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { selectOptions, selectFilteredOpinions } from '../App/selectors';
import { StickyContainer, Sticky } from 'react-sticky';

export function ExplorePage({ filteredOpinions }) {
  return (
    <div className="explore-page page">
      <SiteHeader />

      <main>
        <StickyContainer>
          <Sticky
            stickyStyle={{ zIndex: 4 }}
            // onStickyStateChange={isStuck => {
            //   console.log('isStuck', isStuck)
            // }}
          >
            <ControlBar />
          </Sticky>

          <section className="explore-page__opinions-list">
            {filteredOpinions.map(opinion => (
              <Opinion {...opinion} num={opinion.key} />
            ))}
          </section>

          <OnlyMobile>
            <InternalLink route="/form" className="explore-page__floating-action-button">
              Write a comment
            </InternalLink>
          </OnlyMobile>
        </StickyContainer>
      </main>

      <OFooter />
    </div>
  );
}

ExplorePage.propTypes = {
  filteredOpinions: PropTypes.array.isRequired,
};

const select = createStructuredSelector({
  filteredOpinions: selectFilteredOpinions,
});

export default connect(select)(ExplorePage);
