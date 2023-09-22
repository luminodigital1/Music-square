import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/SignupForm.css";
import Logo from "../HomeScreen/Logo";
function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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
    <div className="container-fluid ">
      <div className="row justify-content-center">
        <div className="col-md-10">
        <Logo></Logo>

          <button
            className="btn"
            style={{
              backgroundColor: "white",
              borderColor: "#D2D4C8",
              color: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 20px",
              width: "100%",
              marginBottom: 10,
              fontWeight: "bold",
            }}
          >
            <i className="fab fa-google" style={{ marginRight: "10px" }}></i>
            Continue with Google
          </button>
          <button
            className="btn"
            style={{
              backgroundColor: "#1127E3",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 20px",
              width: "100%",
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            <i className="fas fa-wallet" style={{ marginRight: "10px" }}></i>
            Connect with Wallet
          </button>

          <div class="divider-container">
            <div class="divider-line"></div>
            <div class="divider-text">OR</div>
            <div class="divider-line"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
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
                className="form-check-input"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                style={{ backgroundColor: "#FFFF00" }} // Set the checkbox background color
              />
              <label className="form-check-label" htmlFor="agreeTerms">
                I agree with terms and conditions
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              style={{
                backgroundColor: "#FFFF00",
                color: "black",
                width: "100%",
                border:'none',
                fontWeight:'bold'
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
