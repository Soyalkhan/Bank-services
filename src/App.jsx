import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CardGrid from './components/CardGrid';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner />
     <CardGrid/>
     <Footer/>
    </div>
  );
}

export default App;
