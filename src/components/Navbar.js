import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
      <a href="/Users/umanginigam/Desktop/emotion/mental-health-site/src/components/Home.js" className="navbar-brand-link">
        Emocare
        </a>
        </div>
      <ul className="nav-links">
      <li className="nav-item">
          <a href="/Users/umanginigam/Desktop/emotion/mental-health-site/src/components/Home.js" className="nav-link">Home</a>
        </li>
      
        <li className="nav-item">
          <a href="/Users/umanginigam/Desktop/emotion/mental-health-site/src/components/About.js" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="/Users/umanginigam/Desktop/emotion/mental-health-site/src/components/Resources.js" className="nav-link">Resources</a>
        </li>
        <li className="nav-item">
          <a href="/Users/umanginigam/Desktop/emotion/mental-health-site/src/components/Chatbot.js" className="nav-link">Chatbot</a>
        </li>
        <li className="nav-item">
          <a href="/Users/umanginigam/Desktop/emotion/mental-health-site/src/components/Reports.js"className="nav-link">Reports</a>
        </li>
        <li className="nav-item">
          <a href="/Users/umanginigam/Desktop/emotion/mental-health-site/src/components/DiagnosisTest.js"className="nav-link">DiagnosisTest</a>
        </li>

      </ul>
      <div className='button'>
        <a href="/Users/umanginigam/Desktop/emotion/mental-health-site/src/components/login.js" className="nav-button-link">
          <button>Login</button>
        </a>
        <a href="/Users/umanginigam/Desktop/emotion/mental-health-site/src/components/Signup.js" className="nav-button-link">
          <button>Sign In</button>
        </a>
        </div>
    </nav>
   
  );
};

export default Navbar;
