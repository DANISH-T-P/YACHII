import React from "react";
import "./CareerSection.css";

const CareerSection = () => (
  <section id="career" className="career-section">
    <div className="container text-center section-title" data-aos="fade-up">
      <h2>Career</h2>
      <p className="text-muted">
        We are hiring passionate professionals to join our growing team
      </p>

      <div className="container">
        <div className="row pt-5">
          {/* Left Image */}
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <picture>
              <source srcSet="/images/about.webp" type="image/webp" />
              <img
                src="/images/about.jpg"
                alt="Join our team - Yachii Careers"
                className="img-fluid rounded-4 career-image"
                loading="lazy"
              />
            </picture>
          </div>

          {/* Right Details */}
          <div
            className="col-lg-6 d-flex flex-column career-details"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-start">
              Position: Full-Stack App Developer
            </h3>
            <h6 className="text-start sub-role">
              (Frontend: ReactNative/Flutter & Backend: NodeJs)
            </h6>

            <div className="border-0">
              <div className="card-body text-start">
                <ul className="list-unstyled mb-4">
                  <li><strong>Location:</strong> Bengaluru, India</li>
                  <li><strong>Type:</strong> Full-time</li>
                  <li><strong>Experience:</strong> 5+ years</li>
                  <li><strong>Salary:</strong> Industry Standard</li>
                  <li><strong>Joining:</strong> Immediate</li>
                </ul>

                <h5>How to Apply:</h5>
                <p>
                  Send your resume & GitHub (or portfolio) to{" "}
                  <a href="mailto:info@yachii.com">info@yachii.com</a>
                </p>
                <p>
                  Include a short story about a time you built something
                  real-time (chat, games, live updates).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CareerSection;
