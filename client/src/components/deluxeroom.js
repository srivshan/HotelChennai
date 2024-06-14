import React, { useState,useContext } from 'react';
import dlogo from '../images/deluxeroom.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext.js';

const DeluxeRoom = ({ handleBook }) => {
    const { user } = useContext(AuthContext);
    var datetime = new Date();
    var date = datetime.toISOString().slice(0,10);
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(0);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    
        const handleBookNow = async (e) => {
            e.preventDefault();
        try {
            await axios.post('http://localhost:8000/deluxe-room', { username:user.username, quantity,date });
            alert("Room Booked");
            navigate('/account');

            // Handle success if needed
        } catch (error) {
            console.error('Error:', error);
            // Handle error if needed
        }
    };
    

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
            <div className="card">
                <div className="card-body">
                    <img src={dlogo} className="card-img-top" height="150" width="150" alt="standard room"/>  
                    <h2 className="text-center"> Deluxe Room</h2>
                    <p>A spacious and luxurious room with modern amenities. Perfect for a relaxing stay.</p>
                    <ul>
                        <li>King-size bed</li>
                        <li>Ensuite bathroom</li>
                        <li>Mini-bar</li>
                        <li>High-speed Wi-Fi</li>
                        <li>Flat-screen TV</li>
                    </ul>
                    <p><strong>Price:</strong> $150 per night</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-info me-2" onClick={decrementQuantity}>-</button>
                        <span>{quantity}</span>
                        <button className="btn btn-info ms-2" onClick={incrementQuantity}>+</button>
                    </div>
                    <button className="btn btn-info mt-3 w-100" onClick={handleBookNow}>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeluxeRoom;
