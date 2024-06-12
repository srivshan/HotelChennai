import React, { useState,useContext } from 'react';
import slogo from '../images/standard room.jpg'
import axios from 'axios';
import { AuthContext } from './AuthContext.js';
import { useNavigate } from 'react-router-dom';

const StandardRoom = ({ handleBook }) => {
    const [quantity, setQuantity] = useState(0);
    const { user } = useContext(AuthContext);
    var datetime = new Date();
    var date = datetime.toISOString().slice(0,10);
    const navigate = useNavigate();



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
        await axios.post('http://localhost:8000/standard-room', { username:user.username, quantity, date });
        alert("Room booked");
        navigate('/account')
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
            <img src={slogo} className="card-img-top" height="250" width="250" alt="standard room"/>  
            <h2 className="text-center">Standard Room</h2>
            <p>A cozy and comfortable room ideal for a short stay. Offers all essential amenities.</p>
            <ul>
                <li>Queen-size bed</li>
                <li>Shared bathroom</li>
                <li>Complimentary breakfast</li>
                <li>Free parking</li>
            </ul>
            <p><strong>Price:</strong> $100 per night</p>
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

export default StandardRoom;
