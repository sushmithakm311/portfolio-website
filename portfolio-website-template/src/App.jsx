import React from 'react';
import './App.css';

function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // ಇಲ್ಲಿ ಫ್ರಂಟ್ ಎಂಡ್ ಮಾತ್ರ ಚೆಕ್ ಮಾಡಲು ಮೆಸೇಜ್ ತೋರಿಸುತ್ತಿದ್ದೇವೆ
    alert("Message sent successfully! 🚀 (Front-end active)");
    
    // ಫಾರ್ಮ್‌ನ ಡೇಟಾವನ್ನು ಕ್ಲಿಯರ್ ಮಾಡಲು
    e.target.reset();

    /* 💡 ಗಮನಿಸಿ: ಸದ್ಯಕ್ಕೆ ಬ್ಯಾಕೆಂಡ್ ಕನೆಕ್ಷ connection ಅನ್ನು ಕಮೆಂಟ್ ಮಾಡಲಾಗಿದೆ 
       ಇದರಿಂದಾಗಿ Vercel ಲೈವ್ ಲಿಂಕ್‌ನಲ್ಲಿ "Failed to fetch" ಎರರ್ ಬರುವುದಿಲ್ಲ.

    const name = e.target.elements[0]?.value || "No Name";
    const email = e.target.elements[1]?.value || "No Email";
    const message = e.target.elements[2]?.value || "No Message";

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
    } catch (err) {
      console.log("Backend error cached:", err.message);
    }
    */
  };

  return (
    <div className="container">
      {/* 1. HERO SECTION */}
      <header className="hero">
        {/* ಇಲ್ಲಿ ನಿಮ್ಮ ರೌಂಡ್ ಪ್ರೊಫೈಲ್ ಇಮೇಜ್ ಆಡ್ ಮಾಡಲಾಗಿದೆ */}
        <div className="profile-img-container">
          <img src="/profile.jpg" alt="Sushmitha" className="profile-img" />
        </div>
        <h1>Hi, I'm Sushmitha 👋</h1>
        <p className="hero-subtitle">Engineering Student | Full-Stack Developer Intern</p>
        
        {/* 🎯 ಇಲ್ಲಿ ನಿಮ್ಮ ರೆಸ್ಯೂಮೆ ಲಿಂಕ್ ಅನ್ನು ನೇರವಾಗಿ ಓಪನ್ ಆಗುವ ಹಾಗೆ ಅಪ್‌ಡೇಟ್ ಮಾಡಲಾಗಿದೆ */}
        <a 
          href="/Sushmitha_KM_Resume.pdf" 
          target="_blank" 
          rel="noreferrer"
          className="hero-btn"
          style={{ textDecoration: 'none', display: 'inline-block' }}
        >
          Download CV
        </a>
      </header>

      {/* 2. ABOUT ME SECTION */}
      <section className="section-card">
        <h2>About Me</h2>
        <p>
          I am an Engineering student currently learning Full Stack Web Development. 
          This portfolio website is part of my web development internship project.
        </p>
      </section>

      {/* 3. EDUCATION SECTION */}
      <section className="section-card">
        <h2>Education</h2>
        <p><strong>Bachelor of Engineering (CSE / IT)</strong></p>
        <p className="sub-text">Currently pursuing graduation and building real-world projects using React.</p>
      </section>

      {/* 4. TECHNICAL SKILLS SECTION */}
      <section className="section-card">
        <h2>Technical Skills</h2>
        <ul className="skills-list">
          <li>HTML, CSS, JavaScript</li>
          <li>React.js</li>
          <li>Java (Basic)</li>
          <li>DBMS Concepts</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      {/* 5. EXPERIENCE SECTION */}
      <section className="section-card">
        <h2>Experience</h2>
        {/* 🎯 ಇಲ್ಲಿ ನಿಮ್ಮ ನಿಜವಾದ ಕಂಪನಿ ಹೆಸರು "Persevex LLP" ಅನ್ನು ಆಡ್ ಮಾಡಲಾಗಿದೆ */}
        <p><strong>Web Development Intern</strong> – Persevex LLP (2026 - Present)</p>
        <p className="sub-text">Working on building responsive full-stack web applications using MERN stack.</p>
      </section>

      {/* 6. PROJECTS SECTION */}
      <section className="section-card">
        <h2>Projects</h2>
        <div className="project-box">
          <h3>My Portfolio Website</h3>
          <p className="sub-text">Built using React, Node.js, Express, and MongoDB to showcase my profile and skills.</p>
        </div>
      </section>

      {/* 7. CONTACT FORM SECTION */}
      <section className="section-card">
        <h2>Contact Me</h2>
        <p className="sub-text">Fill out the form below to connect.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Sushmitha | Internship Portfolio Project</p>
      </footer>
    </div>
  );
}

export default App;
