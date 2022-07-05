import './App.css';
import React from 'react';
import Clock from './clock/clock.js'
import Selector from './selector/selector.js';
function App() {
  return (
    <div className="App">
      <div className="shyball">
      </div>
      <div className="clock">
        <Clock />
      </div>
      <div className="selector">
        <Selector />
      </div>
    </div>
  );
}

export default App;
