import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { AuthContext } from './AuthContext.js';
import './Myacc.css';

const MyAccount = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <p>You need to log in to see this page.</p>;
    }

    return (
        <div className="my-account-container">
            <div className="my-account-box">
                <h1>My Account</h1>
                <p>Welcome, {user.username}</p>
                <p>Email: {user.email}</p>
                
                <Link to="/booking-history">Booking History</Link> 
            </div>
        </div>
    );
};

export default MyAccount;
