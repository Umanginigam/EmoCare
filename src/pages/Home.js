import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  
  // Array of features to showcase
  const features = [
    {
      title: "AI-Powered Chatbot",
      description: "Talk to our intelligent assistant that detects emotions and provides personalized support.",
      icon: "💬"
    },
    {
      title: "Mood Tracking",
      description: "Track your emotional patterns over time with interactive visualizations.",
      icon: "📊"
    },
    {
      title: "Guided Exercises",
      description: "Access meditation, breathing, and mindfulness exercises tailored to your needs.",
      icon: "🧘"
    },
    {
      title: "Community Support",
      description: "Connect with others on similar journeys in a safe, moderated environment.",
      icon: "👥"
    }
  ];

  // Simulate staggered animation on load
  useEffect(() => {
    setIsLoaded(true);
    
    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="home">
      {/* Animated background elements */}
      <div className="background-animations">
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>
        <div className="floating-shape shape4"></div>
        <div className="floating-shape shape5"></div>
      </div>
      
      {/* Hero section */}
      <div className={`hero-section ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-content">
          <h1>Welcome to <span className="highlight">EmoCare</span></h1>
          <p className="hero-subtitle">
            Your companion for better mental health and emotional well-being
          </p>
          
          <div className="cta-buttons">
            <button className="cta-primary">Start Your Journey</button>
            <button className="cta-secondary">Learn More</button>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="blob-background"></div>
          <div className="illustration"></div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="wave-separator">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f3f4f6" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Features section */}
      <div className="features-section">
        <h2>How EmoCare Helps You</h2>
        
        <div className="features-container">
          <div className="features-list">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`feature-card ${activeFeature === index ? 'active' : ''}`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="feature-showcase">
            <div className="feature-preview">
              {/* This would be replaced with actual feature preview/demo */}
              <div className="preview-placeholder">
                <div className="preview-content">
                  <div className="preview-icon">{features[activeFeature].icon}</div>
                  <h4>{features[activeFeature].title}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials section */}
      <div className="testimonials-section">
        <h2>Stories from Our Community</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="quote">"</div>
            <p>EmoCare helped me understand my anxiety patterns and develop healthy coping mechanisms. The emotion detection is surprisingly accurate!</p>
            <div className="testimonial-author">
              <div className="author-avatar"></div>
              <div className="author-info">
                <h4>Sarah J.</h4>
                <p>Using EmoCare for 6 months</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="quote">"</div>
            <p>The guided meditations and chatbot have been incredibly helpful during my difficult times. I feel like I always have support available.</p>
            <div className="testimonial-author">
              <div className="author-avatar"></div>
              <div className="author-info">
                <h4>Michael T.</h4>
                <p>Using EmoCare for 1 year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Getting started section */}
      <div className="getting-started-section">
        <div className="getting-started-content">
          <h2>Begin Your Wellness Journey Today</h2>
          <p>Take the first step toward better mental health with personalized support and resources.</p>
          <button className="cta-primary">Get Started Now</button>
        </div>
        
        <div className="stats-container">
          <div className="stat-item">
            <h3>500K+</h3>
            <p>Active Users</p>
          </div>
          <div className="stat-item">
            <h3>92%</h3>
            <p>Report Improvement</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;