import React, { PropTypes } from 'react';
import styles from './styles.css';

export default function OnlyDesktop({ children }) {
  return (
    <div className={styles.onlyDesktop}>
      {children}
    </div>
  );
}

OnlyDesktop.propTypes = {
  children: PropTypes.node,
};
