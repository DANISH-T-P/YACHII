# API Integration Setup Guide

## Environment Variables

Create a `.env` file in the frontend directory with the following variables:

```env
# API Configuration
VITE_API_URL=http://localhost:3000

# Development Settings
VITE_DEV_MODE=true
```

## Backend Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
# Database Configuration
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
DB_PORT=5432

# Server Configuration
PORT=3000

# Email Configuration (for contact form)
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_email
SMTP_PASS=your_smtp_password
RECEIVER_EMAIL=your_receiver_email
```

## API Endpoints

### Newsletter Subscription
- **URL**: `POST /api/newsletter/subscribe`
- **Body**: `{ "email": "user@example.com" }`
- **Response**: `{ "message": "Successfully subscribed!" }`

### Contact Form
- **URL**: `POST /api/contact/send`
- **Body**: `{ "name": "John Doe", "email": "john@example.com", "subject": "Inquiry", "message": "Hello" }`
- **Response**: `{ "message": "Message sent and saved successfully!" }`

## Features

### Newsletter Subscription
- ✅ Email validation
- ✅ Duplicate email prevention
- ✅ Success/error feedback
- ✅ Loading states

### Contact Form
- ✅ Form validation
- ✅ Email notifications
- ✅ Database storage
- ✅ Success/error feedback
- ✅ Loading states

## Error Handling

The API integration includes comprehensive error handling:
- Network timeouts
- Validation errors
- Server errors
- User-friendly error messages

## Testing the Integration

1. Start the backend server: `npm run dev` (in backend directory)
2. Start the frontend: `npm run dev` (in frontend directory)
3. Test the newsletter subscription form
4. Test the contact form
5. Check the browser console for API request/response logs
