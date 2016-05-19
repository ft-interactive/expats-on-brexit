import ControlBar from '../ControlBar';
import InternalLink from '../InternalLink';
import OFooter from '../OFooter';
import React, { PropTypes } from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { selectOptions } from '../App/selectors';
import { StickyContainer, Sticky } from 'react-sticky';

export function HomePage({ headline, standfirst, byline }) {
  return (
    <div className={styles.homePage}>
      <div className={styles.mainContent}>
        <h1>{headline}</h1>
        <div dangerouslySetInnerHTML={{ __html: standfirst }} />
        <p>{byline}</p>

        <StickyContainer>
          <Sticky onStickyStateChange={isStuck => { console.log('isStuck', isStuck) }}>
            <ControlBar />
          </Sticky>

          <section className={styles.opinionsList}>
            {[...Array(200).keys()].map((x, i) => <p key={i} style={{ background:'#efe' }}>opinions {i}</p>)}
          </section>

          <InternalLink route="/form" className={styles.floatingActionButton}>Write a comment</InternalLink>
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
};

const select = createStructuredSelector({
  headline: createSelector(selectOptions, options => options.headline),
  standfirst: createSelector(selectOptions, options => options.standfirst),
  byline: createSelector(selectOptions, options => options.byline),
});

export default connect(select)(HomePage);
