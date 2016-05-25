import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

const App = ({
  children,
}) => (
  <div className="app">
    {children}
  </div>
);

App.displayName = 'App';

App.propTypes = {
  children: PropTypes.node,
};

export default connect(/*createStructuredSelector({

})*/)(App);
