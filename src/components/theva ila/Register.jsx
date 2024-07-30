import React from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();

  return (
    <div className="register">
      <form>
        <h2>Register</h2>
        <label>
          Username:
          <input type="text" name="username"/>
        </label>
        <label>
          Email:
          <input type="text" name="username"/>
        </label>
        <label>
          Password:
          <input type="password" name="password"/>
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" />
        </label>
        <button onClick={()=>{navigate("/login")}} type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
