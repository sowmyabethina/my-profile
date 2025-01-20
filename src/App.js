import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Sowmya Sri Durga Bethina</h1>
        <h3>Full Stack Developer</h3>
      </header>

      <section className="contact">
        <h2>Contact</h2>
        <ul>
          <li>Email: sowmya.bethina@sasi.ac.in</li>
          <li>Phone: 6281487618</li>
          <li>Address: NTR Park Street, Velpuru</li>
          <li>GitHub: <a href="https://github.com/sowmyabethina" target="_blank" rel="noopener noreferrer">sowmyabethina</a></li>
        </ul>
      </section>

      <section className="summary">
        <h2>Summary</h2>
        <p>
          I am a motivated Full Stack Developer with experience building websites using the MERN stack. I work with React and Node.js and MongoDB to make websites look good and run smoothly. I am always excited to learn new things and improve my coding skills. I am ready to take on new challenges.
        </p>
      </section>

      <section className="internships">
        <h2>Internships</h2>
        <div>
          <h4>Web Developer</h4>
          <p>Technokricks (Aug 2022 - Aug 2024)</p>
          <p>
            Worked on designing user-friendly websites and interactive features using HTML, CSS, and JavaScript.
          </p>
        </div>
        <div>
          <h4>Cloud Computing</h4>
          <p>AWS (Apr 2024 - May 2024)</p>
          <p>
            Hands-on experience with virtual machines, managing cloud storage, and working on data servers.
          </p>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>MERN Stack Development</li>
          <li>HTML, CSS, JavaScript</li>
          <li>Cloud Platforms: AWS, Microsoft Azure</li>
        </ul>
      </section>

      <section className="portfolio">
        <h2>Portfolio</h2>
        <ul>
          <li>Codechef: <a href="#">codechef/sowmya_bethina</a></li>
          <li>HackerRank: <a href="#">@sowmya_bethina</a></li>
          <li>LinkedIn: <a href="#">Sowmya Bethina</a></li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>Task Management App</li>
          <li>E-commerce Application</li>
        </ul>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div>
          <h4>B.Tech</h4>
          <p>CGPA: 8.8 (2024)</p>
        </div>
        <div>
          <h4>Diploma in Electronics</h4>
          <p>CGPA: 94% (2022)</p>
        </div>
      </section>
    </div>
  );
}

export default App;
