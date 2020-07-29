import React from 'react';
import './App.css';

//component imports
import AppBar from './components/AppBar/AppBar';
import AppBody from './components/AppBody/AppBody';

function App() {
  return (
      <div>
        <AppBar header="puneethnnaik.com" />
        <AppBody />
      </div>
  );
}

export default App;
