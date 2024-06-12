import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext.js';

const BookingHistory = () => {
    const { user } = useContext(AuthContext);
    const [bookingHistory, setBookingHistory] = useState([]);

    useEffect(() => {
        // Function to fetch booking history when component mounts
        const fetchBookingHistory = async () => {
            try {
                const response = await axios.post('http://localhost:8000/booking-history', {username:user.username});
                setBookingHistory(response.data.bookingHistory);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (user) {
            fetchBookingHistory(); // Call the function to fetch booking history only if user is logged in
        }
    }, [user]); // Run this effect whenever the user changes

    return (
        
        <div className="container my-5 pb-4 bg-light-subtle justify-content-center ">
            <h1 className="mb-4">Booking History</h1>
            <ul className="list-group">
                {bookingHistory.map((booking, index) => (
                    <li key={index} className="list-group-item">
                        {booking.standard_room_booked_time ? (
                            <>
                                Standard Room - Booked Date: {booking.standard_room_booked_time}
                            </>
                        ) : null}
                        {booking.deluxe_room_booked_time ? (
                            <>
                                Deluxe Room - Booked Date: {booking.deluxe_room_booked_time}
                            </>
                        ) : null}
                    </li>
                ))}
            </ul>
        </div>
    
    );

};    

export default BookingHistory;
