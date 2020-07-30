import React from 'react';
import './App.css';

//component imports
import AppBar from './components/AppBar/AppBar';
import AppBody from './components/AppBody/AppBody';
import ContactMeHorizontalBar from './components/ContactMeHorizontalBar/ContactMeHorizontalBar';
import ContactMeSideBar from './components/ContactMeSideBar/ContactMeSideBar';

function App() {
  return (
      <div>
        <AppBar header="puneethnnaik.com" />
        <AppBody />
        <ContactMeHorizontalBar />
        <ContactMeSideBar />
      </div>
  );
}

export default App;
