import React, { PropTypes } from 'react';
import classify from 'classnames';

export default function TickBox({ icon, ticked, onToggle, children }) {
  return (
    <div
      className={classify(
        'tick-box',
      )}
      onClick={onToggle}
    >
      <span className={`tick-box__icon tick-box__icon--${icon}`} />

      <span className="tick-box__label">{children}</span>

      <span
        className={classify(
          'tick-box__indicator',
          ticked ? 'tick-box__indicator--ticked' : 'tick-box__indicator--unticked'
        )}
      />
    </div>
  );
}

TickBox.propTypes = {
  icon: PropTypes.string.isRequired,
  ticked: PropTypes.bool.isRequired,
  onToggle: PropTypes.func,
  children: PropTypes.node,
};
