/**
 * ControlBar - the sticky bar containing the sentence summary and buttons.
 *
 * Both mobile and desktop. (But the 'write comment' button is hidden on mobile, and the 'filter' button behaves differently, taking you to a different page on mobile.)
 *
 * Sticky behaviour might be a bit different on mobile, pulling itself up.
 */

import InternalLink from '../InternalLink';
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
        <p className={styles.sentence}>
          {sentenceParts.map(({ text, mark }, i) => (
            mark
              ? <mark key={i}>{text}</mark>
              : <span key={i}>{text}</span>
          ))}
        </p>

        <InternalLink route="/filter">Filter</InternalLink>
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
