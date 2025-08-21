import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./ContactSection.css";

const ContactSection = () => (
  <section id="contact" className="contact section">
    <div className="container section-title" data-aos="fade-up">
      <h2>CONTACT</h2>
      {/* <p className="subtitle">
        We'd love to hear from you. Reach out to us at any of our locations below.
      </p> */}
    </div>

    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="contact-row">
        
        {/* Left Info Section */}
        <div className="contact-info">
          <div
            className="info-item"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <i className="bi bi-geo-alt icon"></i>
            <div>
              <h3>Registered Address</h3>
              <p>
                160 Robinson Road, #14-04 <br />
                Singapore Business Federation Center <br />
                Singapore (068914)
              </p>
            </div>
          </div>

          <div
            className="info-item"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <i className="bi bi-envelope icon"></i>
            <div>
              <h3>Email Us</h3>
              <p>
                <a href="mailto:info@yachii.com" className="email-link">
                  info@yachii.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
