import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8000/contact-us', formData);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        comments: ''
      });
    } catch (error) {
      alert('Please login');
      console.error('Failed to send message:', error);
    }
  };

  return (
    <div className=" justify-content-center align-items-center" style={{ height: '60vh', margin:'60px' }}>
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Contact Us</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="comments">Comments</label>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          className="form-control"
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Send</button>
    </form>
    </div>
  );
};

export default ContactForm;
