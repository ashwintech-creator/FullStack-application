import React from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navi = useNavigate();
  return (
    <div className="sidebar">
      <ul>
        <li><button onClick={navi("/")}>Home</button></li>
        <li><button>About</button></li>
        <li><button>Contact</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;
