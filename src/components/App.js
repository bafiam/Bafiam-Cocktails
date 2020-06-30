import React from 'react';
import '../App.css';
import Navbar from './Navbar'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
function App() {
  return (
    <Router>
    <div className="App">
     
      <Navbar></Navbar>
      <Routes />
      
    </div>
    </Router>
  );
}

export default App;
