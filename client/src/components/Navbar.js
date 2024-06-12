// src/components/Navbar.js
import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.jpg';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext.js';


const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleBookNow = () => {
        if (user) {
            navigate('/standard-room');
        } else {
            alert("Please Login before Booking");
            navigate('/login');
        }
    };

    return (
        <>
            <header>
                <nav className="d-flex justify-content-center">
                    <div className="navbar navbar-expand-lg navbar-light bg-transparent">
                        <Link to="/" className="navbar-brand">
                            <img src={logo} width="60" height="60" alt="logo" />
                        </Link>
                        <div className="justify-content-center" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/home" className="nav-link p-3"><b>HOME</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/meetings" className="nav-link p-3"><b>MEETINGS & EVENTS</b></Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link to="/contact-us" className="nav-link p-3"><b>CONTACT US</b></Link>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="d-flex align-items-center custom-button-spacing">
                            {user ? (
                                <>
                                    <Link to="/account">
                                        <button type="" className="btn btn-primary p-2 mr-2">My Account</button>
                                    </Link>
                                    <button type="button" className="btn btn-secondary p-2" onClick={logout}>Logout</button>
                                    <button className="btn btn-primary p-2" onClick={handleBookNow}>BOOK NOW</button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login">
                                        <button className="btn btn-primary p-2 mr-2">Login/Sign Up</button>
                                    </Link>
                                    <button type="button" className="btn btn-primary p-2" onClick={handleBookNow}>BOOK NOW</button>
                                </>
                            )}
                        </div>

                    </div>
                </nav>

                <nav className="d-flex justify-content-center">
                    <div className="container-fluid navbar navbar-expand-lg navbar-light bg-black">
                        <ul className="navbar-nav mx-auto align-items-center" id="submenu">
                            <li className="nav-item">
                                <Link to="/about-us" className="nav-link ">THE HOTEL, CHENNAI</Link>
                                
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/room" className="nav-link p-3 dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <b>ROOMS</b>
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="container-d">
                                    <li><Link to="/deluxe-room" className="dropdown-item">Deluxe Room</Link></li>
                                    <li><Link to="/standard-room" className="dropdown-item">Standard Room</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/dining" className="nav-link ">DINING</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/offers" className="nav-link ">OFFERS</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/gallery" className="nav-link ">GALLERY</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/videos" className="nav-link ">VIDEOS</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/facilities" className="nav-link ">FACILITIES</Link>
                            </li>
                           
                            
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
