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
                                    <Link to="/Meetings" className="nav-link p-3"><b>MEETINGS & EVENTS</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/offers" className="nav-link p-3"><b>OFFERS</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link p-3"><b>CONTACT US</b></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex">
                            {user ? (
                                <>
                                    <Link to="/account">
                                        <button className="btn btn-primary p-2">My Account</button>
                                    </Link>
                                    <button className="btn btn-secondary p-2 ml-2" onClick={logout}>Logout</button>
                                    <button className="btn btn-primary p-2 ml-2" onClick={handleBookNow}>BOOK NOW</button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login">
                                        <button className="btn btn-primary p-2">Login/Sign Up</button>
                                    </Link>
                                    <button className="btn btn-primary p-2 ml-2" onClick={handleBookNow}>BOOK NOW</button>
                                </>
                            )}
                        </div>
                    </div>
                </nav>

                <nav className="d-flex justify-content-center">
                    <div className="container-fluid navbar navbar-expand-lg navbar-light bg-black">
                        <ul className="navbar-nav mx-auto align-items-center" id="submenu">
                            <li className="nav-item">
                                <a className="nav-link" href="/#">THE HOTEL, CHENNAI</a>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/room" className="nav-link p-3 dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <b>ROOMS</b>
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id = "container-d">
                                    <li><Link to="/deluxe-room" className="dropdown-item">Deluxe Room</Link></li>
                                    <li><Link to="/standard-room" className="dropdown-item">Standard Room</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">DINING</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">MEETINGS & EVENTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">OFFERS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">GALLERY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">VIDEOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">FACILITIES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">LOCATION</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
