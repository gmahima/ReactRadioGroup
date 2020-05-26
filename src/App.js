import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from './context'
import RadioGroup from './RadioGroup'
import Checklist from './Checklist'
function App() {
  return (
    <Provider>
    <div className="App">
      <RadioGroup></RadioGroup>
      <Checklist></Checklist>
    </div>
    </Provider>
  );
}

export default App;
