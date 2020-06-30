import React from 'react';
import '../App.css';
import Categories from './Categories'
import Cocktails from './Cocktails'
import Navbar from './Navbar'
function App() {
  return (
    <div className="App">
     
      <Navbar></Navbar>
      <Categories></Categories>
      <Cocktails></Cocktails>
    </div>
  );
}

export default App;
