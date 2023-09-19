import React, { useState } from 'react';
import './Signupform.css';
import Screen2 from './Screen2';
import { Navigate, useNavigate } from 'react-router-dom';

function SignupForm() {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/verify'); // Navigate to the About page
  };


  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
  
    setFormData({ ...formData, [name]: newValue });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // You can submit the form data here
      console.log('Form data submitted:', formData);
    } else {
      console.log('Form data is not valid.');
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.email.trim()) {
      valid = false;
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      valid = false;
      newErrors.email = 'Invalid email address';
    } else {
      newErrors.email = '';
    }

    if (!formData.password.trim()) {
      valid = false;
      newErrors.password = 'Password is required';
    } else {
      newErrors.password = '';
    }

    if (formData.password !== formData.confirmPassword) {
      valid = false;
      newErrors.confirmPassword = 'Passwords do not match';
    } else {
      newErrors.confirmPassword = '';
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email Address</label>
          <input className='data'
            type="email"
            name="email"
            placeholder='enter your mail'
            value={formData.email}
            onChange={handleChange}
          />
          <div className="error">{errors.email}</div>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input className='data'
            type="password"
            name="password"
            placeholder='enter your password'
            value={formData.password}
            onChange={handleChange}
          />
          <div className="error">{errors.password}</div>
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input className='data'
            type="password"
            name="confirmPassword"
            placeholder='re-enter your password'
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <div className="error">{errors.confirmPassword}</div>
          {/* <label>
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
            />{' '}
            I agree to the terms and services
          </label> */}
          
        </div>
        <div className='termsandser'>
          <label>
            I agree to terms and services
          </label>
          </div>
        <button type="submit" onClick={navigateToAbout} className='submitbtn'>
          Sign Up
        </button>
        
      </form>
      <p>Already have a account? <a href='' style={{textDecoration : 'none', color: 'blue'}}>Log In</a></p>
    </div>
  );
}

export default SignupForm;


