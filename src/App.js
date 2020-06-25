import React from 'react';
import Nav from './components/Nav';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="rain">
        <Header />
        <Nav />
        {/* <Routes /> */}
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
