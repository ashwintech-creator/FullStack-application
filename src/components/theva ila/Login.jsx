import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  var Boolean = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
    if(Boolean)navigate('/');
    else navigate("/register");
  };

  return (
    <div className="lo">
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          Username:
          <input type="text" className="username" />
        </label>
        <label>
          Password:
          <input type="password" className="password"  />
        </label>
        <button type="submit">Login</button>
        <button onClick={()=>{Boolean=false;}}type="submit">Register</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
