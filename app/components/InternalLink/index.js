import React, { PropTypes } from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

function InternalLink({ route, children, dispatch }) {
  return (
    <a
      className={styles.internalLink}
      href={route}
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
};

export default connect()(InternalLink);
