import React from 'react';
import './App.css';
import Navar from './components/navbar';
import ControlledCarousel from './components/cards';
import Tile from './components/temp';


function App() {
  return (
    <div className="App">
      <div>
      <Navar/>
</div>

<div style={{paddingLeft:'5%',paddingRight:'5%'}}>
  <ControlledCarousel/>
  <Tile/>
  </div>
  <div>
  
  </div>
      
      
    </div>
  );
}

export default App;
