import React from 'react';
import offer1 from '../images/offer1.png'
import offer2 from '../images/offer2.jpg'
import offer3 from '../images/offer2.jpg'

const OffersPage = () => {
    const offers = [
        {
            id: 1,
            title: 'Special Offer 1 ',
            description: '30 %  offer on your first room booking - Offer only applicable for new users',
            image: offer1
        },
        {
            id: 2,
            title: 'Special Offer 2',
            description: '10 % offer on you first Deluxe room booking - Offer only applicable for users who book deluxe room for the first time',
            image: offer2
        },
        {
            id: 3,
            title: 'Special Offer 3',
            description: '10 % offer on you first Standard room booking - Offer only applicable for users who book standard room for the first time',
            image: offer3
        }
    ];

    return (
        <div className="container mt-5 px-4 py-4">
            <h1 className="text-center mb-4">Special Offers</h1>
            <div className="row">
                {offers.map((offer) => (
                    <div className="col-md-4 mb-4" key={offer.id}>
                        <div className="card">
                            <img src={offer.image} className="card-img-top" alt={offer.title} />
                            <div className="card-body">
                                <h5 className="card-title">{offer.title}</h5>
                                <p className="card-text"><b>{offer.description}</b></p>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OffersPage;
