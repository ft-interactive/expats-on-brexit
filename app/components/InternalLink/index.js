import basePath from '../../basePath';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

function InternalLink({ route, children, dispatch, className }) {
  return (
    <a
      className={className}
      href={basePath + route}
      onClick={event => {
        event.preventDefault();
        dispatch(push(route));
      }}
    >{children}</a>
  );
}

InternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  route: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default connect()(InternalLink);
