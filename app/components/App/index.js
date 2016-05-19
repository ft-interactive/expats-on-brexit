import React from 'react';
import styles from './styles.scss';

function App(props) {
  return (
    <div className={styles.app}>
      {props.children}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
