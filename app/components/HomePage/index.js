import InfoBar from '../InfoBar';
import InternalLink from '../InternalLink';
import OFooter from '../OFooter';
import React, { PropTypes } from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { selectOptions } from '../App/selectors';
import { StickyContainer, Sticky } from 'react-sticky';

export function HomePage({ headline, standfirst }) {
  return (
    <div className={styles.homePage}>
      <div className={styles.mainContent}>
        <h1>{headline}</h1>
        <p>{standfirst}</p>

        <StickyContainer>
          <Sticky>
            <InfoBar />
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
};

const select = createStructuredSelector({
  headline: createSelector(selectOptions, options => options.headline),
  standfirst: createSelector(selectOptions, options => options.standfirst),
});

export default connect(select)(HomePage);
