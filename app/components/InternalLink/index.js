import basePath from '../../basePath';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

function InternalLink({ route, children, dispatch, onClick, className }) {
  return (
    <a
      className={className}
      href={route && (basePath + route)}
      onClick={event => {
        if (onClick) {
          onClick(event);
          if (event.defaultPrevented) return;
        }

        if (route) {
          event.preventDefault();
          dispatch(push(route));
        }
      }}
    >{children}</a>
  );
}

InternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  route: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default connect()(InternalLink);
