// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Imageslider from './components/imageslider';
import {Home} from './navlinks';
import Login from './components/login/login.js';
import Signup from './components/Signup';
import './App.css';
import MyAccount from './components/MyAccount.js';

import Room1 from './components/standardroom.js';
import Room2 from './components/deluxeroom.js';

function App() {
    return (
        
        <Router>
            <div>
                <Navbar />
                <Imageslider/>
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/account" element={<MyAccount />} />

                    <Route path="/standard-room" element={<Room1/>} />
                    <Route path="/deluxe-room" element={<Room2 />} />
                </Routes>
            </div>
        </Router>
       
    );
}

export default App;


