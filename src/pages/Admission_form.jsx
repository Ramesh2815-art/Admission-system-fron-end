import React, { useState } from 'react';
import './admission.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function AdmissionForm() {
  const navigate=useNavigate();
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password:'',
    mark10:'',
    mark12:'',
    phoneNumber: '',
    course: '',

  });

  // State to track form submission status
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9090/api/students', formData);
      setSubmitted(true);
      console.log('Form Submitted Successfully:', response.data);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  let home=()=>{
    navigate('/');
     
  }
  let login=()=>{
    navigate('/login')
  }

  return (
    <>
    <div className="container">
      <h1>Admission Form</h1>

      {submitted ? (
        <div>
          <h2>Thank you for your submission!</h2>
          <p>We have received your details and will contact you soon.</p>  
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="pass">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="mark10">10<sup>th</sup>Percentage:</label>
            <input
              type="number"
              id="mark10"
              name="mark10"
              value={formData.mark10}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="mark12">12<sup>th</sup>Percentage:</label>
            <input
              type="number"
              id="mark12"
              name="mark12"
              value={formData.mark12}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="course">Course:</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="" id='option'>Select a course</option>
              <option value="BSC COMPUTER SCIENCE">BSC COMPUTER SCIENCE </option>
              <option value="BSC CHEMISTRY">BSC CHEMISTRY</option>
              <option value="BSC MATHS">BSC MATHS</option>
              <option value="BSC COMPUTER APPLICATION">BSC COMPUTER APPLICATION</option>
            </select>
          </div>

          <div className='btn'>
            <button type="submit">Submit</button>
          </div>
        </form>
        )}
      </div>
      <div className="logindetails">
        <p>If you already register please login</p>
        <button className='home' onClick={home}>Home</button>
        <button className='login' onClick={login}> Log in</button>
      </div>
    </>
  );
}

export default AdmissionForm;
