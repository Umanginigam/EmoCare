import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import DiagnosisTest from './components/DiagnosisTest';
import Reports from './components/Reports';
import Chatbot from './components/Chatbot';
import Resources from './components/Resources';
import Footer from './components/Footer';
import Login from './components/login';
import Signup from './components/Signup';
import './index.css';

// import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Users/umanginigam/Desktop/emotion/mental-health-site/src/components/Home.js" element={<Home />} />
        <Route path="/Users/umanginigam/Desktop/emotion/mental-health-site/src/components/About.js" element={<About />} />
        <Route path="/Users/umanginigam/Desktop/emotion/mental-health-site/src/components/Chatbot.js" element={<Chatbot />} />
        <Route path="/Users/umanginigam/Desktop/emotion/mental-health-site/src/components/DiagnosisTest.js" element={<DiagnosisTest />} />
        <Route path="/Users/umanginigam/Desktop/emotion/mental-health-site/src/components/Reports.js" element={<Reports />} />
        <Route path="/Users/umanginigam/Desktop/emotion/mental-health-site/src/components/Resources.js" element={<Resources />} />
        <Route path="/Users/umanginigam/Desktop/emotion/mental-health-site/src/components/login.js" element={<Login />} />
        <Route path="/Users/umanginigam/Desktop/emotion/mental-health-site/src/components/Signup.js" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
