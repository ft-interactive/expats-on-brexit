import React, { PropTypes } from 'react';
import styles from './styles.css';

export default function OnlyMobile({ children }) {
  return (
    <div className={styles.onlyMobile}>
      {children}
    </div>
  );
}

OnlyMobile.propTypes = {
  children: PropTypes.node,
};
