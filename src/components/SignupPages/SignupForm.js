import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../components/SignupPages/SignupForm.css";
import { Navigate, useNavigate } from 'react-router-dom';

function SignupForm() {
  const navigate = useNavigate();

  const navigateToVerification = () => {
    navigate('/verify'); // Navigate to the About page
  };

  const [formData, setFormData] = useState({
    email: "abc@gmail.com",
    password: "123",
    confirmPassword: "123",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your signup logic here, e.g., send the data to an API
    console.log(formData);
  };

  return (
      <div className="row justify-content-center sup" >
        <div className="col-md-12">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input style={{outline: 'none'}}
                type="email"
                className="form-control"
                placeholder="Enter your mail"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Re-enter your password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                checked
                className="form-check-input"
                id="agreeTerms"
                name="agreeTerms"
                // checked={formData.agreeTerms}
                onChange={handleChange}
                style={{ backgroundColor: "#ffe500" }} // Set the checkbox background color
              />
              <label className="form-check-label" htmlFor="agreeTerms">
                I agree with terms and conditions
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={navigateToVerification}
              style={{
                backgroundColor: '#ffe500',
                /* margin-left: 250px; */
                width: 400,
                height: 40,
                // padding: 10,
                border: 'none',
                color: 'black',
                borderRadius: 4,
                marginTop: 10,
                marginLeft: 2,
              }}
            >
              Sign Up
            </button>
          </form>
          <div className="d-flex justify-content-center align-items-center">
          <p style={{marginTop: 20}}>Already have an account?</p>
          <a href="">Log In</a>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default SignupForm;
