import ControlBar from '../ControlBar';
import InternalLink from '../InternalLink';
import OFooter from '../OFooter';
import OnlyMobile from '../OnlyMobile';
import OpinionsList from '../OpinionsList';
import React, { Component, PropTypes } from 'react';
// import ReactDOM from 'react-dom';
import SiteHeader from '../SiteHeader';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFilteredOpinions } from '../App/selectors';
import { StickyContainer, Sticky } from 'react-sticky';


export class ExplorePage extends Component {
  // constructor() {
  //   super();
  //   this.onPageScroll = this.onPageScroll.bind(this);
  //   this.findInternalNodes = this.findInternalNodes.bind(this);
  // }

  // componentDidMount() {
  //   // set up page scroll listening!
  //   this.findInternalNodes();
  //   addEventListener('scroll', this.onPageScroll);
  // }

  // componentDidUpdate() {
  //   this.findInternalNodes();
  // }

  // componentWillUnmount() {
  //   delete this.controlBar;
  //   delete this.siteHeader;
  //   removeEventListener('scroll', this.onPageScroll);
  // }

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
    const { filteredOpinions } = this.props;

    return (
      <div className="explore-page page">
        <SiteHeader />

        <main>
          <StickyContainer className="sticky-container">
            <div className="explore-page__intro">
              <p>Hundreds of British expat readers discuss how they think the EU referendum will affect them.</p>
              <p>Play with the filters below to unearth different points of view.</p>
            </div>

            <Sticky
              className="explore-page__sticky-control-bar-wrapper"
              stickyClassName="explore-page__sticky-control-bar-wrapper--stuck"
              topOffset={-50}
            >
              <ControlBar />
            </Sticky>

            <div className="explore-page__opinions-list-wrapper">
              <p className="explore-page__eligibility-note">
                ‘<span>CAN’T VOTE</span>’
                {' '}
                marks respondents who have lived abroad for more than 15 years.
              </p>
              <OpinionsList opinions={filteredOpinions} />
            </div>

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
}

ExplorePage.propTypes = {
  filteredOpinions: PropTypes.array.isRequired,
};

const select = createStructuredSelector({
  filteredOpinions: selectFilteredOpinions,
});

export default connect(select)(ExplorePage);
