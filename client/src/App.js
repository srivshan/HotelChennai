// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Imageslider from './components/imageslider';
import EventsPage from './components/meetings.js';
import Time from './components/time.js';
import Login from './components/login/login.js';
import Signup from './components/Signup';
import './App.css';
import MyAccount from './components/MyAccount.js';
import ContactForm from './components/contact.js';
import BookingHistory from './components/bookinghistory.js';
import Room1 from './components/standardroom.js';
import Room2 from './components/deluxeroom.js';
import Menu from './components/menu.js';
import AboutUs from './components/AboutUs.js';
import OffersPage from './components/offers.js';
import GalleryPage from './components/Gallery.js';

function App() {
    return (
        
        <Router>
            <div>
                <Navbar />
                <Imageslider/>
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/home" element={<Time/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/account" element={<MyAccount />} />
                    <Route path="/contact-us" element={<ContactForm/>}/>
                    <Route path="booking-history" element={<BookingHistory/>}/>
                    <Route path="/standard-room" element={<Room1/>} />
                    <Route path="/deluxe-room" element={<Room2 />} />
                    <Route path="/meetings" element={<EventsPage/>}/>
                    <Route path="/dining" element={<Menu/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                    <Route path="/offers" element={<OffersPage/>}/>
                    <Route path="/gallery" element={<GalleryPage/>}/>
                </Routes>
            </div>
        </Router>
       
    );
}

export default App;


