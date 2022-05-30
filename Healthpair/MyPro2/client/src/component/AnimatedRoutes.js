import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 
'react-router-dom';
import List from './List';
import Mento from './Mento';
import Config from './Config';
import Community from './Community';
import Profile from './Profile';
import Profile2 from './Profile2';
import Login from './Login';
import {AnimatePresence} from 'framer-motion'
import Modal from './Modal';


function AnimatedRoutes() {
    const location = useLocation();

    return(
        <>
        <AnimatePresence>
     <Routes location={location} key={location.pathname}>
      <Route path="/Login" element={<Login/>} />
      <Route path="/" element={<List/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/Profile2" element={<Profile2/>} />
      <Route path="/mento" element={<Mento/>} />
      <Route path="/Community" element={<Community/>} />
      <Route path="/config" element={<Config/>} />
      <Route path="/modal" element={<Modal/>} />
     </Routes>
     </AnimatePresence>

        </>
    );
}

export default AnimatedRoutes;