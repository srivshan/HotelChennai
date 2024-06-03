import React from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import slide4 from "../images/slide4.jpg";
import slide5 from "../images/slide5.jpg";


function Imageslider() {
    useEffect(() => {
        // Initialize the Bootstrap Carousel
        new window.bootstrap.Carousel(document.getElementById('carouselExampleSlidesOnly'), {
            interval: 4000, // Set the interval in milliseconds (e.g., 2000ms or 2 seconds)
            // You can customize other options here
        });
    }, []);
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" style={{ height: '100vh' }}>
                    <img src={slide1} className="d-block w-100 h-auto" style={{ objectFit: 'cover' }} alt="slide1" />
                </div>
                <div className="carousel-item" style={{ height: '100vh' }}>
                    <img src={slide2} className="d-block w-100 h-auto" style={{ objectFit: 'cover' }} alt="slide2" />
                </div>
                <div className="carousel-item" style={{ height: '100vh' }}>
                    <img src={slide3} className="d-block w-100 h-auto" style={{ objectFit: 'cover' }} alt="slide3" />
                </div>
                <div className="carousel-item" style={{ height: '100vh' }}>
                    <img src={slide4} className="d-block w-100 h-auto" style={{ objectFit: 'cover' }} alt="slide4" />
                </div>
                <div className="carousel-item" style={{ height: '100vh' }}>
                    <img src={slide5} className="d-block w-100 h-auto" style={{ objectFit: 'cover' }} alt="slide5" />
                </div>
            </div>
        </div>
    );
} 



export default Imageslider;
