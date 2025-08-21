const { ContactMessage } = require('../models'); 
const nodemailer = require('nodemailer');
require('dotenv').config();

exports.sendMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address' });
  }

  // Sanitize inputs
  const sanitizedData = {
    name: name.trim(),
    email: email.toLowerCase().trim(),
    subject: subject.trim(),
    message: message.trim()
  };

  try {
    await ContactMessage.create(sanitizedData);

    // Only send email if SMTP is configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: Number(process.env.SMTP_PORT) === 465, 
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
      
      const mailOptions = {
        from: `"Website Contact" <${process.env.SMTP_USER}>`,
        to: process.env.RECEIVER_EMAIL,
        subject: `Contact Form: ${subject}`,
        text: `
New Contact Message:

Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${message}
        `
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.log('Email configuration not found. Message saved to database only.');
    }
    res.status(200).json({ message: 'Message sent and saved successfully!' });

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Check if it's an email error or database error
    if (error.code === 'EAUTH' || error.code === 'ECONNECTION') {
      res.status(500).json({ error: 'Email service temporarily unavailable. Please try again later.' });
    } else {
      res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
  }
};
