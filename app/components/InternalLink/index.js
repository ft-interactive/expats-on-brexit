import basePath from '../../basePath';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

function InternalLink({ route, children, dispatch, onClick, className }) {
  let href = route && (basePath + route);
  let isInternalRoute = Boolean(route);

  // TODO change this when the real form is done
  if (route === '/form') {
    href = 'https://docs.google.com/forms/d/1adMO1Tn5NaihAhirDIdnbaayXooQyTFBXDMXJ-KrV8c/viewform';
    isInternalRoute = false;
  }

  return (
    <a
      className={className}
      href={href}
      onClick={event => {
        if (onClick) {
          onClick(event);
          if (event.defaultPrevented) return;
        }

        if (isInternalRoute) {
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
