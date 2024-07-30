import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onSidebarToggle, isLoggedIn }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={onSidebarToggle}>
        <div className="circle red"></div>
        <div className="circle yellow"></div>
        <div className="circle green"></div>
      </div>
      <div className="navbar-right">
        {isLoggedIn ? (
          <div className="profile-icon">👤</div>
        ) : (
          <button onClick={handleLoginClick} className="login-button">Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;