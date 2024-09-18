import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CardGrid from './components/CardGrid';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner />
     <CardGrid/>
    </div>
  );
}

export default App;
