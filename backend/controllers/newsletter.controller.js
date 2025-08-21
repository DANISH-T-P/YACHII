const { Newsletter } = require('../models');

exports.subscribe = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Please provide a valid email address" });
  }

  try {
    const [subscriber, created] = await Newsletter.findOrCreate({
      where: { email: email.toLowerCase().trim() }
    });

    if (!created) {
      return res.status(409).json({ message: "Already subscribed!" });
    }

    res.status(201).json({ message: "Successfully subscribed!" });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ error: "Failed to subscribe. Please try again later." });
  }
};
