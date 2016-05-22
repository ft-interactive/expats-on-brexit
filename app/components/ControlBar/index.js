/**
<<<<<<< HEAD
 * ControlBar - the sticky bar containing the entence-and-buttons summary and buttons.
=======
 * ControlBar - the sticky bar containing the sentence summary and buttons.
>>>>>>> master
 *
 * Both mobile and desktop. (But the 'write comment' button is hidden on mobile, and the 'filter' button behaves differently, taking you to a different page on mobile.)
 *
 * Sticky behaviour might be a bit different on mobile, pulling itself up.
 */

<<<<<<< HEAD
import classnames from 'classnames';
import Filters from '../Filters';
import InternalLink from '../InternalLink';
import OnlyDesktop from '../OnlyDesktop';
import OnlyMobile from '../OnlyMobile';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RESET_FILTERS, HIDE_DESKTOP_FILTERS, SHOW_DESKTOP_FILTERS } from '../../constants';
import { selectSentenceParts, selectFilteredOpinionsCount, selectDesktopFiltersVisible } from '../App/selectors';

function ControlBar({ sentenceParts, count, desktopFiltersVisible, dispatch }) {
  return (
    <div
      className={classnames('control-bar', {
        'control-bar--desktop-filters-visible': desktopFiltersVisible,
      })}
    >
      <div className="control-bar__inner">
        <div className="control-bar__sentence-and-buttons">
          <div className="control-bar__buttons">
            <OnlyMobile>
              <InternalLink route="/filter" className="control-bar__mobile-filter-button btn">Filter</InternalLink>
            </OnlyMobile>

            <OnlyDesktop>
              <button
                className="control-bar__desktop-filter-button"
                onClick={() => {
                  dispatch({ type: SHOW_DESKTOP_FILTERS });
                }}
              >Filter</button>
              {' '}
              <InternalLink route="/form" className="control-bar__desktop-write-comment-button">Write a comment</InternalLink>
            </OnlyDesktop>
          </div>

          <p className="control-bar__sentence">
            {sentenceParts.map(({ text, mark }, i) => (
              mark
                ? <mark key={i}>{text}</mark>
                : <span key={i}>{text}</span>
            ))}
          </p>
        </div>

        <OnlyDesktop>
          <div className={'control-bar__dropdown-filters-wrapper'}>
            <Filters horizontal />

            <div className={'control-bar__dropdown-filters-buttons'}>
              <button
                className={'control-bar__apply-filters-button'}
                onClick={() => {
                  dispatch({ type: HIDE_DESKTOP_FILTERS });

                  // TODO maybe also scroll to top, if filters have changed?
                }}
              >
                {`Show ${count} responses`}
              </button>

              <span>{' or '}</span>

              <button
                className={'control-bar__show-all-button'}
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
=======
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
>>>>>>> master
      </div>
    </div>
  );
}

ControlBar.propTypes = {
<<<<<<< HEAD
  sentenceParts: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  desktopFiltersVisible: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const select = createStructuredSelector({
  sentenceParts: selectSentenceParts,
  count: selectFilteredOpinionsCount,
  desktopFiltersVisible: selectDesktopFiltersVisible,
=======
  linkToArticle: PropTypes.string.isRequired,
  sentenceParts: PropTypes.array.isRequired,
};

const select = createStructuredSelector({
  linkToArticle: createSelector(selectOptions, options => options.linkToArticle),
  sentenceParts: selectSentenceParts,
>>>>>>> master
});

export default connect(select)(ControlBar);
