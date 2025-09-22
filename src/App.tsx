import React from 'react';
// import { useState } from 'react';
import './App.css';
import Header from './layouts/header';
import HomePage from './pages/home';
import Footer from './layouts/footer';



function App() {
  return (
    <div className="App">
      <Header/>
        <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
