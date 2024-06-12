import React from 'react';
import image1 from '../images/aboutus.jpg'
import './aboutus.css'; // Import CSS file for additional styling

const AboutUs = () => {
    // Generate some placeholder text using Lorem Ipsum
    const loremText = 'Culpa labore et proident tempor sint velit. Fugiat occaecat quis laborum laboris voluptate id culpa irure magna anim fugiat eu eiusmod proident. Reprehenderit ex adipisicing exercitation quis laborum. Sint duis ullamco dolore cupidatat dolore occaecat velit velit ex deserunt enim in ipsum. Esse nisi in et laborum eu minim dolor cupidatat minim dolor labore adipisicing. Aliquip elit dolore sint dolor voluptate fugiat commodo velit dolor ex in esse veniam. Aliqua nostrud exercitation mollit laboris reprehenderit voluptate est veniam.Dolore ipsum non in est velit anim. In nostrud nostrud est culpa. Qui nostrud eu amet labore sint. Esse Lorem sint consectetur laborum consequat consectetur veniam pariatur magna velit. Velit esse do adipisicing anim et. Et cillum proident eiusmod laboris excepteur tempor.Aute nulla officia aute non aute laboris tempor culpa amet quis exercitation occaecat sit. Duis sunt amet do est. Voluptate consectetur id incididunt eu laboris amet reprehenderit cillum id labore elit culpa mollit nostrud.Ullamco eiusmod non pariatur occaecat laborum ea irure. Proident eu non culpa velit cupidatat pariatur commodo minim voluptate Lorem enim sunt laborum sunt. Eiusmod cillum voluptate fugiat elit tempor magna cillum sunt eu magna qui labore aute est. Dolore mollit laboris fugiat ut qui tempor ex minim culpa. Fugiat proident nisi consectetur excepteur laborum ea ad sunt do aliqua sunt aliqua consectetur.Culpa cillum consequat Lorem culpa quis est cupidatat minim pariatur. Cillum aute magna duis pariatur anim ea duis. Aliquip adipisicing officia nisi non ipsum cupidatat officia esse est nisi nostrud aliquip.'


    return (
        <div className='evcont'>
        <div className="events-page-container">
            <div className="events-page-content">
                <header className="page-header">
                    <h1>About Us</h1>
                </header>
                <section className="page-content">
                    <div className="text-section">
                        <img src={image1} alt="hi"/>
                        <p id="text">{loremText}</p>
                    </div>
                </section>
            </div>
            </div>
        </div>
    );
};

export default AboutUs;
