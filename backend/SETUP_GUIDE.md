# Quick Backend Setup Guide

## 🚨 Current Issue
The backend was failing because:
1. No `.env` file exists
2. PostgreSQL database is not running
3. Database connection configuration missing

## ✅ Solution Applied
I've updated the backend to use **SQLite** instead of PostgreSQL for easier development setup.

## 📋 Steps to Run Backend

### 1. Create Environment File
Copy the example file to create your `.env` file:

```bash
# On Windows PowerShell:
copy env.example .env

# Or manually create a file named .env with this content:
```

**Content for `.env` file:**
```env
# Server Configuration
PORT=3000

# Email Configuration (Optional - for contact form emails)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
RECEIVER_EMAIL=info@yachii.com

# Development Mode
NODE_ENV=development
```

### 2. Run the Backend
```bash
npm run dev
```

## 🎯 What's Changed

### Database
- ✅ **SQLite** instead of PostgreSQL (no installation needed)
- ✅ Database file will be created automatically as `database.sqlite`
- ✅ No database server required

### Email (Optional)
- ✅ Contact form will work without email configuration
- ✅ Messages will be saved to database only if email is not configured
- ✅ Add email settings to `.env` if you want email notifications

## 🧪 Test the Backend

After starting the server, test the API:

```bash
npm run test:api
```

## 📁 Files Modified
- `config/db.js` - Changed to SQLite
- `controllers/contact.controller.js` - Made email optional
- `env.example` - Created environment template

## 🚀 Next Steps
1. Create the `.env` file
2. Run `npm run dev`
3. Test the API endpoints
4. Start the frontend to test the full integration

The backend should now start without any database connection errors!
