import React from "react";
import "./LoginPage.css"; 
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashBoard');
  };

  return (
    <div className="login-page-container">
    <div className="illustration">
      <img
        className="illustration-img"
        src="/images/banner.gif"
        alt="Illustration"
      />
    </div>

    <div className="login-section">
      <div className="login-box">
      <img
        className="logo"
        src="/images/logo-black.png"
        alt="logo"
      />
        <p>Please log in to continue your session.</p>
        <form className="login-form">
          <input
            className="input-field"
            type="email"
            placeholder="Enter your email address"
          />
          <input
            className="input-field"
            type="password"
            placeholder="Enter your password"
          />
          <div className="options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="/forgot-password">Forgot Your Password?</a>
          </div>
          <button type="button" onClick={handleLogin} className="login-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  </div>
  
  );
};

export default LoginPage;
