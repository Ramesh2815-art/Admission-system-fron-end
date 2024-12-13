import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [status, setStatus] = useState('');
    let navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Send login request
            const response = await axios.post('http://localhost:9090/api/login', { email, password })


            // If login is successful, set the student's status
            const studentData = response.data;
            if (studentData) {
                setStatus(studentData.status); // Set status from response
                // You can redirect to a dashboard or show additional info
               
            }
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="login-form-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2 className="login-form-title">Login</h2>
                <div className="login-form-group">
                    <label className="login-form-label" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="login-form-input"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="login-form-group">
                    <label className="login-form-label" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="login-form-input"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="login-form-button">Login</button>
                <br />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {status && <p className={status=="Admitted"?"admitted":status=="Rejected"?"rejected":"pending"}>Status: {status}</p>}
            </form>
        </div>
    );
};

export default Login;
