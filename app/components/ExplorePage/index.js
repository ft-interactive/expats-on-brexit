import ControlBar from '../ControlBar';
import InternalLink from '../InternalLink';
import OFooter from '../OFooter';
import ShareLinks from '../ShareLinks';
import Filters from '../Filters';
import OpinionsList from '../OpinionsList';
import React, { Component, PropTypes } from 'react';
// import ReactDOM from 'react-dom';
import SiteHeader from '../SiteHeader';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { createStructuredSelector } from 'reselect';
import {
  selectVisibleOpinions, selectIsMoreOpinionsAvailable, selectAreDropdownFiltersActive,
  selectCurrentFilters,
  // selectAnyFiltersChanged,
} from '../App/selectors';
import { StickyContainer, Sticky } from 'react-sticky';
import { SHOW_MORE_OPINIONS, DEACTIVATE_DROPDOWN_FILTERS, SET_FILTER } from '../../constants';
import classnames from 'classnames';

let mountedOnce;

export class ExplorePage extends Component {
  // constructor() {
  //   super();
  //   this.onPageScroll = this.onPageScroll.bind(this);
  //   this.findInternalNodes = this.findInternalNodes.bind(this);
  // }
  // 
  componentWillMount() {
    const { dispatch } = this.props;
    // HACK
    if (!mountedOnce) {
      mountedOnce = true;
    }
  }

  // componentDidMount() {
  //   // set up page scroll listening!
  //   this.findInternalNodes();
  //   addEventListener('scroll', this.onPageScroll);
  // }

  // componentDidUpdate() {
  //   this.findInternalNodes();
  // }

  componentWillUnmount() {
    // delete this.controlBar;
    // delete this.siteHeader;
    // removeEventListener('scroll', this.onPageScroll);
    
    // don't keep dropdown open when leaving this page
    this.props.dispatch({ type: DEACTIVATE_DROPDOWN_FILTERS });
  }

  // onPageScroll() {
  //   // if we're over the threshold, add class to the control bar
  //   const controlBarTop = this.controlBar.getBoundingClientRect().top;
  //   const siteHeaderHeight = this.siteHeader.getBoundingClientRect().height;

  //   if (this.pastControlBarStickThreshold) {
  //     if (controlBarTop > siteHeaderHeight) {
  //       this.pastControlBarStickThreshold = false;
  //       document.documentElement.classList.remove('past-control-bar-stick-threshold');
  //     }
  //   } else if (controlBarTop < siteHeaderHeight) {
  //     this.pastControlBarStickThreshold = true;
  //     document.documentElement.classList.add('past-control-bar-stick-threshold');
  //   }
  // }

  // findInternalNodes() {
  //   // update our internal reference to the control bar DOM node
  //   const el = ReactDOM.findDOMNode(this);

  //   this.controlBar = el.querySelector('.control-bar');
  //   this.siteHeader = el.querySelector('.site-header');
  // }

  render() {
    const {
      visibleOpinions, isMoreOpinionsAvailable, dispatch, areDropdownFiltersActive,
      // anyFiltersChanged,
      currentFilters,
    } = this.props;

    // update the hash to reflect filters selection (using replaceState)
    (() => {
      // update the hash
      const newLocation = `${location.pathname}#${queryString.stringify(currentFilters)}`;
      console.log('newLocation', newLocation);
      window.history.replaceState({}, '', newLocation);
    })();

    return (
      <div className="explore-page page">
        <SiteHeader />

        <main>
          <StickyContainer className="sticky-container">
            <div className="explore-page__intro">
              <p>Hundreds of British expats discuss how they think the EU referendum will affect them.</p>
              <p>Play with the filters below to unearth different points of view.</p>
            </div>

            <section className="explore-page__permanent-filters-wrapper">
              <Filters horizontal />
            </section>

            <Sticky
              className="explore-page__sticky-control-bar-wrapper"
              stickyClassName="explore-page__sticky-control-bar-wrapper--stuck"
              topOffset={-50}
              onStickyStateChange={isStuck => {
                if (!isStuck) dispatch({ type: DEACTIVATE_DROPDOWN_FILTERS });
              }}
            >
              <ControlBar />
            </Sticky>

            <div className="explore-page__opinions-list-wrapper">
              <OpinionsList opinions={visibleOpinions} />
            </div>

            {isMoreOpinionsAvailable ? (
              <div className="explore-page__show-more">
                <button
                  className="link"
                  style={{ fontSize: '21px' }}
                  onClick={() => {
                    dispatch({ type: SHOW_MORE_OPINIONS });
                  }}
                >Load more responses</button>
              </div>
            ) : null}

            <div className="explore-page__add-your-view">
              <p>Are&nbsp;you&nbsp;also&nbsp;a&nbsp;British&nbsp;expat? We&nbsp;want&nbsp;to&nbsp;hear&nbsp;from&nbsp;you.</p>

              <p>
                <InternalLink
                  className="btn btn--dark btn--raised"
                  route="/form"
                >
                  Add your view
                </InternalLink>
              </p>
            </div>

            <p className="explore-page__eligibility-note">
              ‘<span>CAN’T VOTE</span>’
              {' '}
              marks respondents who have lived abroad for more than 15 years.
            </p>
          </StickyContainer>
        </main>

        <ShareLinks
          url="https://ig.ft.com/sites/expats-on-brexit/"
          text="What do British expats think of Brexit?"
        />

        <OFooter />

        <div
          className={classnames('explore-page__overlay', { 'explore-page__overlay--active': areDropdownFiltersActive })}
          onClick={() => {
            dispatch({ type: DEACTIVATE_DROPDOWN_FILTERS });
          }}
        />
      </div>
    );
  }
}

ExplorePage.propTypes = {
  visibleOpinions: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  isMoreOpinionsAvailable: PropTypes.bool.isRequired,
  areDropdownFiltersActive: PropTypes.bool.isRequired,
  currentFilters: PropTypes.object.isRequired,
  // anyFiltersChanged: PropTypes.bool.isRequired,
};

const select = createStructuredSelector({
  visibleOpinions: selectVisibleOpinions,
  isMoreOpinionsAvailable: selectIsMoreOpinionsAvailable,
  areDropdownFiltersActive: selectAreDropdownFiltersActive,
  currentFilters: selectCurrentFilters,
  // anyFiltersChanged: selectAnyFiltersChanged,
});

export default connect(select)(ExplorePage);
