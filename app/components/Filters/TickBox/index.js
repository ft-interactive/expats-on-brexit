import React, { PropTypes } from 'react';
import styles from '../styles.scss';
import classify from 'classnames';

export default function TickBox({ ticked, onToggle, children }) {
  return (
    <div
      className={classify(
        styles.tickBox,
        // ticked ? styles.tickBoxTicked : styles.tickBoxUnticked
      )}
      onClick={onToggle}
    >
      <span className={styles.tickBoxIcon} />

      <span className={styles.tickBoxLabel}>{children}</span>

      <span
        className={classify(
          styles.indicator,
          ticked ? styles.indicatorTicked : styles.indicatorUnticked
        )}
      />
    </div>
  );
}

TickBox.propTypes = {
  ticked: PropTypes.bool.isRequired,
  onToggle: PropTypes.func,
  children: PropTypes.node,
};
