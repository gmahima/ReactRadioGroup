import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from './context'
import RadioGroup from './RadioGroup'
function App() {
  return (
    <Provider>
    <div className="App">
      <RadioGroup></RadioGroup>
    </div>
    </Provider>
  );
}

export default App;
