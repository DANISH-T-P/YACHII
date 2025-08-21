import React from "react";
import "./Career.css";

const Career = () => {
  return (
    <section id="career" className="career-section">
      <div className="career-header">
        <h1>CAREER</h1>
        <p>We are hiring passionate developers!</p>
      </div>

      <div className="career-card">
        <h2>Full-Stack App Developer</h2>
        <h4>(React Native & Node.js)</h4>

        <ul className="career-details">
          <li><strong>Location:</strong> Bengaluru, India</li>
          <li><strong>Type:</strong> Full-time</li>
          <li><strong>Experience:</strong> 5+ years</li>
          <li><strong>Salary:</strong> Industry Standard</li>
          <li><strong>Joining:</strong> Immediate</li>
        </ul>

        <div className="career-apply">
          <h5>How to Apply:</h5>
          <ol>
            <li>
              Send your resume & GitHub (or portfolio) to{" "}
              <a href="mailto:info@yachii.com">info@yachii.com</a>
            </li>
            <li>
              Include a short story about a time you built something real-time
              (chat, games, live updates)
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Career;
