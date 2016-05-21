/**
 * ControlBar - the sticky bar containing the sentence summary and buttons.
 *
 * Both mobile and desktop. (But the 'write comment' button is hidden on mobile, and the 'filter' button behaves differently, taking you to a different page on mobile.)
 *
 * Sticky behaviour might be a bit different on mobile, pulling itself up.
 */

import classnames from 'classnames';
import Filters from '../Filters';
import InternalLink from '../InternalLink';
import OnlyDesktop from '../OnlyDesktop';
import OnlyMobile from '../OnlyMobile';
import React, { PropTypes } from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { RESET_FILTERS, HIDE_DESKTOP_FILTERS, SHOW_DESKTOP_FILTERS } from '../../constants';
import { selectOptions, selectSentenceParts, selectFilteredOpinionsCount, selectDesktopFiltersVisible } from '../App/selectors';

function ControlBar({ linkToArticle, sentenceParts, count, desktopFiltersVisible, dispatch }) {
  return (
    <div
      className={classnames(styles.controlBar, {
        [styles.desktopFiltersVisible]: desktopFiltersVisible,
      })}
    >
      <div className={styles.pinkBar}>
        <a href={linkToArticle}>Back to article</a>
      </div>

      <div className={styles.whiteBar}>
        <div className={styles.sentenceAndButtons}>
          <div className={styles.buttons}>
            <OnlyMobile>
              <InternalLink route="/filter" className={styles.mobileFilterButton}>Filter</InternalLink>
            </OnlyMobile>

            <OnlyDesktop>
              <button
                className={styles.desktopFilterButton}
                onClick={() => {
                  dispatch({ type: SHOW_DESKTOP_FILTERS });
                }}
              >Filter</button>
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

        <OnlyDesktop>
          <div className={styles.dropDownFiltersWrapper}>
            <Filters horizontal />

            <div className={styles.dropDownFiltersButtons}>
              <button
                className={styles.applyFiltersButton}
                onClick={() => {
                  dispatch({ type: HIDE_DESKTOP_FILTERS });

                  // TODO maybe also scroll to top, if filters have changed?
                }}
              >
                {`Show ${count} responses`}
              </button>

              <span>{' or '}</span>

              <button
                className={styles.showAll}
                onClick={() => {
                  dispatch({ type: RESET_FILTERS });
                  dispatch({ type: HIDE_DESKTOP_FILTERS });
                  // TODO hide filters
                }}
              >
                show all
              </button>
            </div>
          </div>
        </OnlyDesktop>
      </div>
    </div>
  );
}

ControlBar.propTypes = {
  linkToArticle: PropTypes.string.isRequired,
  sentenceParts: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  desktopFiltersVisible: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const select = createStructuredSelector({
  linkToArticle: createSelector(selectOptions, options => options.linkToArticle),
  sentenceParts: selectSentenceParts,
  count: selectFilteredOpinionsCount,
  desktopFiltersVisible: selectDesktopFiltersVisible,
});

export default connect(select)(ControlBar);
