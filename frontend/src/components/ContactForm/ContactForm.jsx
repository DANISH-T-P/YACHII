import React, { useState, useEffect } from "react";
import { contactService } from "../../services/apiService";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSent(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSent(false);

    const result = await contactService.sendMessage(formData);
    
    if (result.success) {
      setSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  };

  useEffect(() => {
    if (error || sent) {
      const timer = setTimeout(() => {
        setError("");
        setSent(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, sent]);

  const isFormIncomplete = !formData.name || !formData.email || !formData.subject || !formData.message;

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name-field">Your Name</label>
          <input
            type="text"
            name="name"
            id="name-field"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email-field">Your Email</label>
          <input
            type="email"
            name="email"
            id="email-field"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
        </div>
      </div>

      <div className="form-group full-width">
        <label htmlFor="subject-field">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject-field"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Enter subject"
          required
        />
      </div>

      <div className="form-group full-width">
        <label htmlFor="message-field">Message</label>
        <textarea
          name="message"
          id="message-field"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message..."
          required
        ></textarea>
      </div>

      <div className="form-actions">
        {loading && <div className="alert alert-info">Sending...</div>}
        {error && <div className="error-message">{error}</div>}
        {sent && <div className="success-message">Your message has been sent. Thank you!</div>}
        <button type="submit" disabled={loading || isFormIncomplete}>
          Send Message
        </button>
      </div>
    </form>
  );
}
