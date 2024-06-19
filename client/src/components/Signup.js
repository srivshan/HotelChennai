import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/signup', {
                username,
                email,
                password
            });
            alert(response.data);
            navigate('/login');
        } catch (error) {
            console.error('Error signing up:', error);
            alert('Error signing up');
        }
        console.log(username);
        console.log(email);
        console.log(password);
        
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '75vh',
      
    };

    const boxStyle = {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        boxSizing: 'border-box',
    };

    const formControlStyle = {
        marginBottom: '1rem',
    };

    const buttonStyle = {
        width: '100%',
    };

    return (
        <div style={containerStyle}>
            <div style={boxStyle}>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3" style={formControlStyle}>
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3" style={formControlStyle}>
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3" style={formControlStyle}>
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={buttonStyle}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
