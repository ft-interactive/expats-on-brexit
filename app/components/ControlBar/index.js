/**
 * ControlBar - the sticky bar containing the sentence summary and buttons.
 *
 * Both mobile and desktop. (But the 'write comment' button is hidden on mobile, and the 'filter' button behaves differently, taking you to a different page on mobile.)
 *
 * Sticky behaviour might be a bit different on mobile, pulling itself up.
 */

import InternalLink from '../InternalLink';
import OnlyMobile from '../OnlyMobile';
import OnlyDesktop from '../OnlyDesktop';
import React, { PropTypes } from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { selectOptions, selectSentenceParts } from '../App/selectors';

function ControlBar({ linkToArticle, sentenceParts }) {
  return (
    <div className={styles.controlBar}>
      <div className={styles.pinkBar}>
        <a href={linkToArticle}>Back to article</a>
      </div>

      <div className={styles.whiteBar}>
        <div className={styles.buttons}>
          <OnlyMobile>
            <InternalLink route="/filter" className={styles.mobileFilterButton}>Filter</InternalLink>
          </OnlyMobile>

          <OnlyDesktop>
            <InternalLink className={styles.desktopFilterButton}>Filter (Desktop, TODO)</InternalLink>
            {' '}
            <InternalLink route="/form" className={styles.desktopWriteCommentButton}>Write a comment</InternalLink>
          </OnlyDesktop>
        </div>

        <p className={styles.sentence}>
          {sentenceParts.map(({ text, mark }, i) => (
            mark
              ? <mark key={i}>{text}</mark>
              : <span key={i}>{text}</span>
          ))}
        </p>
      </div>
    </div>
  );
}

ControlBar.propTypes = {
  linkToArticle: PropTypes.string.isRequired,
  sentenceParts: PropTypes.array.isRequired,
};

const select = createStructuredSelector({
  linkToArticle: createSelector(selectOptions, options => options.linkToArticle),
  sentenceParts: selectSentenceParts,
});

export default connect(select)(ControlBar);
