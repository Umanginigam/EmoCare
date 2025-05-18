import React from 'react';
import './Resources.css';

const ResourcesPage = () => {
  const helplineNumbers = [
    { service: '988', description: 'Dial this number to connect with a trained crisis counselor 24/7' },
    { service: '911', description: 'Call this number for emergency services' },
    { service: '211', description: 'A non-emergency number for finding community resources' },
    { service: '1800-120-820050', description: 'MPower Minds' }
  ];

  const blogs = [
    {
      title: '10 Tips for Better Mental Health',
      description: 'Discover ways to improve your mental well-being.',
      link: 'https://www.bcmhsus.ca/about-us/news-features/10-tips-boost-your-mental-health',
    },
    {
      title: 'Breathing Exercises for Stress Relief',
      description: 'Learn simple breathing techniques to relax.',
      link: 'https://youtu.be/LiUnFJ8P4gM?si=Sz4cJpc5TPCt7rs_',
    },
    {
      title: 'How to Support Someone with Anxiety',
      description: 'Practical advice for helping loved ones.',
      link: 'https://youtu.be/_m1LjcNg-QI?si=PmDrZLCcdCwnmSn6',
    },
  ];

  return (
    <div className="resources-container">
      <header className="header">
        <h1>🧠 Mental Health Resources</h1>
        <p>Your guide to improving mental wellness and seeking support.</p>
      </header>

      <section className="helpline-section">
        <h2>📞 Helpline Numbers</h2>
        <ul>
          {helplineNumbers.map((helpline, index) => (
            <li key={index}>
              <strong>{helpline.description}:</strong> {helpline.service}
            </li>
          ))}
        </ul>
      </section>

      <section className="breathing-videos-section">
        <h2>🌬️ Breathing Exercises</h2>
        <p>Relax and practice breathing with these helpful exercises:</p>
        <div className="video-placeholder">
        <iframe
      width="800"
      height="450"
      src="https://www.youtube.com/embed/y9pPvIbO3mw"
      title="Breathing Exercise Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
        </div>
      </section>

      <section className="blogs-section">
        <h2>📚 Mental Health Blogs</h2>
        <div className="blogs-grid">
          {blogs.map((blog, index) => (
            <a
              href={blog.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
            >
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;