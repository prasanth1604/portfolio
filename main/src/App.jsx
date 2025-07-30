// App.jsx
import React from 'react';
import './App.css';
import tcs from './assets/tcs.png';
import conti from './assets/conti.png';

const App = () => {
  return (
    <div className="app">
      {/* Navigation */}
      <nav>
        <div className="container">
          <a href="#intro" className="logo">
            <span className="logo-icon"></span>Portfolio
          </a>
          <div className="nav-links">
            <a href="#intro">Home</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Intro Section */}
      <section id="intro">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="greeting">Hello, I'm</p>
              <h1 className="name">Prasanth Padavala</h1>
              <h2 className="title">Software Developer</h2>
              <p className="description">
                I build exceptional digital experiences with modern technologies.
                Specializing in both frontend and backend development, I create
                performant, scalable web applications with clean, maintainable code.
              </p>
              <div className="cta-buttons">
                <a href="#contact" className="btn btn-primary">Hire Me</a>
                <a href="#projects" className="btn btn-secondary">My Work</a>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src="https://placehold.co/600x600" 
                alt="Professional developer working at a modern workstation with multiple monitors showing code" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-container">
            <div className="timeline-item">
              <h3 className="education-degree">Master of Technology (M.Tech)</h3>
              <p className="education-institution">Tech University</p>
              <p className="education-year">2020 - 2022</p>
            </div>
            <div className="timeline-item">
              <h3 className="education-degree">Bachelor of Technology (B.Tech)</h3>
              <p className="education-institution">State University</p>
              <p className="education-year">2016 - 2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className='logo'>
                <img src={tcs} alt="TCS Logo" className="company-logo" />
              </div>
              <span className="timeline-period">2021 - Present</span>
              <h3 className="timeline-title">Senior Software Engineer</h3>
              <p className="timeline-company">TechCorp Solutions</p>
              <p className="timeline-description">
                Lead developer responsible for architecting and implementing full-stack applications.
                Worked with cross-functional teams to deliver high-quality software solutions.
              </p>
              <div className="technologies">
                <span className="technology">React</span>
                <span className="technology">Node.js</span>
                <span className="technology">AWS</span>
                <span className="technology">GraphQL</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className='logo'>
                <img src={conti} alt="Conti Logo" className="conti-logo" />
              </div>
              <span className="timeline-period">2018 - 2021</span>
              <h3 className="timeline-title">Software Developer</h3>
              <p className="timeline-company">WebDev Studios</p>
              <p className="timeline-description">
                Developed and maintained web applications with React and Django.
                Improved performance and user experience across multiple client projects.
              </p>
              <div className="technologies">
                <span className="technology">React</span>
                <span className="technology">Django</span>
                <span className="technology">PostgreSQL</span>
                <span className="technology">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3 className="skill-category-title">
                <span className="skill-icon">💻</span> Frontend
              </h3>
              <div className="skill-list">
                <span className="skill-item">React</span>
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">HTML5</span>
                <span className="skill-item">CSS3</span>
                <span className="skill-item">Redux</span>
                <span className="skill-item">Tailwind CSS</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">
                <span className="skill-icon">🛠️</span> Backend
              </h3>
              <div className="skill-list">
                <span className="skill-item">Node.js</span>
                <span className="skill-item">Python</span>
                <span className="skill-item">Express</span>
                <span className="skill-item">Django</span>
                <span className="skill-item">GraphQL</span>
                <span className="skill-item">REST APIs</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">
                <span className="skill-icon">🗃️</span> Database
              </h3>
              <div className="skill-list">
                <span className="skill-item">MongoDB</span>
                <span className="skill-item">PostgreSQL</span>
                <span className="skill-item">MySQL</span>
                <span className="skill-item">Firebase</span>
                <span className="skill-item">Redis</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">
                <span className="skill-icon">☁️</span> DevOps & Others
              </h3>
              <div className="skill-list">
                <span className="skill-item">Docker</span>
                <span className="skill-item">AWS</span>
                <span className="skill-item">Git</span>
                <span className="skill-item">CI/CD</span>
                <span className="skill-item">Linux</span>
                <span className="skill-item">Agile</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-container">
            <div className="project-card">
              <div className="project-image">
              </div>
              <div className="project-content">
                <h3 className="project-title">E-Commerce Platform</h3>
                <p className="project-description">
                  A full-featured e-commerce platform with product management,
                  cart functionality, and secure checkout. Built with MERN stack.
                </p>
                <a href="#" className="project-link">View Project</a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
              </div>
              <div className="project-content">
                <h3 className="project-title">Social Media App</h3>
                <p className="project-description">
                  A social networking application with real-time updates,
                  user profiles, and content sharing. Powered by React and Firebase.
                </p>
                <a href="#" className="project-link">View Project</a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
              </div>
              <div className="project-content">
                <h3 className="project-title">Task Manager</h3>
                <p className="project-description">
                  Productivity application with task management,
                  scheduling, and team collaboration features.
                </p>
                <a href="#" className="project-link">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume">
        <div className="container">
          <div className="resume-container">
            <h2 className="section-title">Resume</h2>
            <p>Download my complete resume to learn more about my qualifications and experience</p>
            <div className="resume-download">
              <a href="#" className="btn-download">Download Resume</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-method">
                <div className="contact-icon">
                  ✉️
                </div>
                <div className="contact-details">
                  <p className="contact-type">Email</p>
                  <p className="contact-value">contact@example.com</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">
                  📱
                </div>
                <div className="contact-details">
                  <p className="contact-type">Phone</p>
                  <p className="contact-value">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">
                  🏢
                </div>
                <div className="contact-details">
                  <p className="contact-type">Location</p>
                  <p className="contact-value">San Francisco, CA</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="social-links">
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Instagram</a>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Alex Johnson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
