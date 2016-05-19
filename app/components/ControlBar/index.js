/**
 * ControlBar - the sticky bar containing the sentence summary and buttons.
 *
 * Both mobile and desktop. (But the 'write comment' button is hidden on mobile, and the 'filter' button behaves differently, taking you to a different page on mobile.)
 *
 * Sticky behaviour might be a bit different on mobile, pulling itself up.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './styles.scss';

function ControlBar() {
  return (
    <div className={styles.controlBar}>
      <div className={styles.pinkBar}>
        <a href="https://www.ft.com/">Back to article</a>
      </div>

      <div className={styles.whiteBar}>
        ControlBar
      </div>
    </div>
  );
}

ControlBar.propTypes = {};

export default connect()(ControlBar);