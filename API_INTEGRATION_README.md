# API Integration for Yachii Website

This document describes the complete API integration setup for the newsletter subscription and contact form functionality.

## 🚀 Quick Start

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
# Database Configuration
DB_NAME=yachii_db
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432

# Server Configuration
PORT=3000

# Email Configuration (for contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
RECEIVER_EMAIL=info@yachii.com
```

### 2. Frontend Setup

```bash
cd fronteend
npm install
```

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:3000
```

### 3. Start the Application

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd fronteend
npm run dev
```

## 📋 API Endpoints

### Newsletter Subscription
- **URL**: `POST /api/newsletter/subscribe`
- **Body**: `{ "email": "user@example.com" }`
- **Success Response**: `{ "message": "Successfully subscribed!" }`
- **Error Response**: `{ "error": "Already subscribed!" }`

### Contact Form
- **URL**: `POST /api/contact/send`
- **Body**: 
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Inquiry",
    "message": "Hello, I have a question..."
  }
  ```
- **Success Response**: `{ "message": "Message sent and saved successfully!" }`
- **Error Response**: `{ "error": "All fields are required" }`

## 🔧 Features Implemented

### ✅ Newsletter Subscription
- Email validation (format and uniqueness)
- Duplicate email prevention
- Success/error feedback with user-friendly messages
- Loading states during submission
- Automatic form reset on success

### ✅ Contact Form
- Complete form validation
- Email notifications to admin
- Database storage of messages
- Success/error feedback
- Loading states
- Form reset on successful submission

### ✅ Error Handling
- Network timeout handling (10 seconds)
- Validation error messages
- Server error handling
- User-friendly error messages
- Console logging for debugging

### ✅ Security Features
- Input sanitization (trim, lowercase emails)
- Email format validation
- CORS configuration
- Environment variable protection

## 🧪 Testing

### Run API Tests
```bash
cd backend
npm run test:api
```

This will test:
- Newsletter subscription
- Contact form submission
- Invalid email handling
- Missing field validation

### Manual Testing
1. Start both servers
2. Open browser console
3. Test newsletter form on the website
4. Test contact form on the website
5. Check console for API request/response logs

## 📁 File Structure

```
backend/
├── controllers/
│   ├── newsletter.controller.js    # Newsletter subscription logic
│   └── contact.controller.js       # Contact form logic
├── models/
│   ├── newsletter.model.js         # Newsletter database model
│   └── contact.model.js            # Contact message model
├── routes/
│   ├── newsletter.routes.js        # Newsletter API routes
│   └── contact.routes.js           # Contact API routes
├── test-api.js                     # API testing script
└── server.js                       # Main server file

fronteend/
├── src/
│   ├── config/
│   │   └── api.js                  # API configuration
│   ├── services/
│   │   └── apiService.js           # API service layer
│   └── components/
│       ├── SubscribeForm/
│       │   └── SubscribeForm.jsx   # Newsletter form component
│       └── ContactForm/
│           └── ContactForm.jsx     # Contact form component
└── API_SETUP.md                    # Setup instructions
```

## 🔍 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure backend is running on the correct port
   - Check that CORS is properly configured in server.js

2. **Database Connection Issues**
   - Verify PostgreSQL is running
   - Check database credentials in .env file
   - Ensure database exists

3. **Email Not Sending**
   - Verify SMTP credentials in .env file
   - Check if using app password for Gmail
   - Ensure SMTP port is correct (587 for TLS, 465 for SSL)

4. **Frontend Not Connecting**
   - Check VITE_API_URL in frontend .env file
   - Ensure backend server is running
   - Check browser console for errors

### Debug Mode

Enable debug logging by setting:
```env
VITE_DEV_MODE=true
```

This will show detailed API request/response logs in the browser console.

## 🚀 Production Deployment

### Environment Variables
- Use production database credentials
- Configure production SMTP settings
- Set appropriate CORS origins
- Use HTTPS URLs for production

### Security Considerations
- Use environment variables for all sensitive data
- Implement rate limiting for API endpoints
- Add input validation and sanitization
- Use HTTPS in production
- Consider adding API authentication

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review browser console logs
3. Check server logs
4. Run the test script to verify API functionality

---

**Note**: This integration provides a solid foundation for form handling and can be extended with additional features like user authentication, file uploads, or more complex validation rules.
