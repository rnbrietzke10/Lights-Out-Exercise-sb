import React from 'react';
import Board from './Board';
import './App.css';

/** Simple app that just shows the LightsOut game. */

function App() {
  const chanceLightStartsOn = Math.random();

  return (
    <div className="App">
      <Board chanceLightStartsOn={chanceLightStartsOn} />
    </div>
  );
}

export default App;
