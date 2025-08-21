const axios = require('axios');

const API_BASE_URL = 'http://localhost:3000';

// Test data
const testEmail = 'test@example.com';
const testContactData = {
  name: 'Test User',
  email: 'test@example.com',
  subject: 'Test Message',
  message: 'This is a test message from the API test script.'
};

async function testNewsletterSubscription() {
  console.log('Testing Newsletter Subscription...');
  
  try {
    const response = await axios.post(`${API_BASE_URL}/api/newsletter/subscribe`, {
      email: testEmail
    });
    console.log('✅ Newsletter subscription successful:', response.data);
  } catch (error) {
    console.log('❌ Newsletter subscription failed:', error.response?.data || error.message);
  }
}

async function testContactForm() {
  console.log('\nTesting Contact Form...');
  
  try {
    const response = await axios.post(`${API_BASE_URL}/api/contact/send`, testContactData);
    console.log('✅ Contact form submission successful:', response.data);
  } catch (error) {
    console.log('❌ Contact form submission failed:', error.response?.data || error.message);
  }
}

async function testInvalidEmail() {
  console.log('\nTesting Invalid Email...');
  
  try {
    const response = await axios.post(`${API_BASE_URL}/api/newsletter/subscribe`, {
      email: 'invalid-email'
    });
    console.log('❌ Should have failed with invalid email:', response.data);
  } catch (error) {
    console.log('✅ Correctly rejected invalid email:', error.response?.data);
  }
}

async function testMissingFields() {
  console.log('\nTesting Missing Fields...');
  
  try {
    const response = await axios.post(`${API_BASE_URL}/api/contact/send`, {
      name: 'Test User'
      // Missing email, subject, message
    });
    console.log('❌ Should have failed with missing fields:', response.data);
  } catch (error) {
    console.log('✅ Correctly rejected missing fields:', error.response?.data);
  }
}

async function runTests() {
  console.log('🚀 Starting API Tests...\n');
  
  await testNewsletterSubscription();
  await testContactForm();
  await testInvalidEmail();
  await testMissingFields();
  
  console.log('\n✨ API Tests completed!');
}

// Run tests if this file is executed directly
if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = { runTests };
