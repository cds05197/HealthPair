
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import List from './component/List';
import Footer from './component/Footer';
import Header from './component/Header';
import Mento from './component/Mento';
import Config from './component/Config';
import Pro from './component/Pro';



function App() {
 
  
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <div className='Content'>
    <Routes>
      <Route path="/" element={<List/>} />
      <Route path="/mento" element={<Mento/>} />
      <Route path="/profile" element={<Pro/>} />
      <Route path="/config" element={<Config/>} />
    </Routes>
    </div>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}



export default App;
