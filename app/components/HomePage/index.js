import ControlBar from '../ControlBar';
import InternalLink from '../InternalLink';
import Opinion from '../Opinion';
import OnlyMobile from '../OnlyMobile';
import OFooter from '../OFooter';
import React, { PropTypes } from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { selectOptions, selectFilteredOpinions } from '../App/selectors';
import { StickyContainer, Sticky } from 'react-sticky';

export function HomePage({
  headline, standfirst, byline, filteredOpinions,
}) {
  return (
    <div className={styles.homePage}>
      <div className={styles.mainContent}>
        <h1 className={styles.headline}>{headline}</h1>
        <div className={styles.standfirst} dangerouslySetInnerHTML={{ __html: standfirst }} />

        <StickyContainer>
          <Sticky
            stickyStyle={{ zIndex: 4 }}
            // onStickyStateChange={isStuck => {
            //   console.log('isStuck', isStuck)
            // }}
          >
            <ControlBar />
          </Sticky>

          <section className={styles.opinionsList}>
            {filteredOpinions.map(opinion => (
              <Opinion {...opinion} num={opinion.key} />
            ))}
          </section>

          <OnlyMobile>
            <InternalLink route="/form" className={styles.floatingActionButton}>
              Write a comment
            </InternalLink>
          </OnlyMobile>
        </StickyContainer>
      </div>

      <OFooter />
    </div>
  );
}

HomePage.propTypes = {
  headline: PropTypes.string.isRequired,
  standfirst: PropTypes.string.isRequired,
  byline: PropTypes.string.isRequired,
  filteredOpinions: PropTypes.array.isRequired,
};

const select = createStructuredSelector({
  headline: createSelector(selectOptions, options => options.headline),
  standfirst: createSelector(selectOptions, options => options.standfirst),
  byline: createSelector(selectOptions, options => options.byline),
  filteredOpinions: selectFilteredOpinions,
});

export default connect(select)(HomePage);
