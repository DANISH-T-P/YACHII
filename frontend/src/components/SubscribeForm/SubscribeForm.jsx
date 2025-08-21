import { useState, useEffect } from "react";
import { newsletterService } from "../../services/apiService";
import "./SubscribeForm.css";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    const result = await newsletterService.subscribe(email);
    
    if (result.success) {
      setMessage({ type: "success", text: result.data.message });
      setEmail("");
    } else {
      setMessage({ type: "error", text: result.error });
    }
    
    setLoading(false);
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <section className="subscribe-section" id="subscribe">
      <div className="subscribe-container">
        <h2 className="subscribe-title">Stay Updated 🚀</h2>
        <p className="subscribe-subtitle">Subscribe to our newsletter for the latest updates.</p>

        <form onSubmit={handleSubmit} className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="subscribe-input"
          />

          <button
            type="submit"
            className="subscribe-button"
            disabled={loading}
          >
            {loading ? <span className="loader"></span> : "Subscribe"}
          </button>
        </form>

        {message && (
          <div
            className={`subscribe-alert ${
              message.type === "success"
                ? "subscribe-alert-success"
                : "subscribe-alert-error"
            }`}
          >
            {message.text}
          </div>
        )}
      </div>
    </section>
  );
}
