
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 
'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';


import Footer from './component/Footer';
import Header from './component/Header';
import AnimatedRoutes from './component/AnimatedRoutes';



function App() {

  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <div className='Content'>
    
    <AnimatedRoutes/>
 
    </div>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}



export default App;
