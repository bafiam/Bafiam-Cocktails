import React from 'react';
import '../App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />
        <Routes />

      </div>
    </Router>
  );
}

export default App;
