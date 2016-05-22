import React from 'react';

function App(props) {
  return (
    <div className="app">
      {props.children}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
