import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GalleryPage.css'; // Import your custom CSS

// Import your images
import image1 from '../images/gal1.jpg';
import image2 from '../images/gal2.jpg';
import image3 from '../images/gal3.jpg';
import image4 from '../images/gal4.jpg';
import image5 from '../images/gal5.jpg';
import image6 from '../images/gal6.jpg';
import image7 from '../images/gal7.jpg';
import image8 from '../images/gal8.jpg';
import image9 from '../images/gal9.jpeg';


const GalleryPage = () => {
    const images = [
        { id: 1, src: image1, alt: 'Image 1' },
        { id: 2, src: image2, alt: 'Image 2' },
        { id: 3, src: image3, alt: 'Image 3' },
        { id: 4, src: image4, alt: 'Image 4' },
        { id: 5, src: image5, alt: 'Image 5' },
        { id: 6, src: image6, alt: 'Image 6' },
        { id: 7, src: image7, alt: 'Image 6' },
        { id: 8, src: image8, alt: 'Image 6' },
        { id: 9, src: image9, alt: 'Image 6' },
    ];

    return (
        <div className='galcont'>
        <div className="container "  style={{ height: '82vh' }}>
            <h1 className="text-center mb-4">Image Gallery</h1>
            <div className="row">
                {images.map((image) => (
                    <div className="col-md-4 mb-4" key={image.id}>
                        <div className="card">
                            <img src={image.src} className="card-img-top" alt={image.alt} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default GalleryPage;
