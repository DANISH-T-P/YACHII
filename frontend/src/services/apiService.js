import api, { API_ENDPOINTS } from '../config/api';

// Newsletter service
export const newsletterService = {
  subscribe: async (email) => {
    try {
      const response = await api.post(API_ENDPOINTS.NEWSLETTER.SUBSCRIBE, { email });
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.error || error.response?.data?.message || 'Subscription failed' 
      };
    }
  }
};

// Contact service
export const contactService = {
  sendMessage: async (formData) => {
    try {
      const response = await api.post(API_ENDPOINTS.CONTACT.SEND, formData);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.error || error.response?.data?.message || 'Failed to send message' 
      };
    }
  }
};

// Utility function to handle API errors
export const handleApiError = (error) => {
  if (error.code === 'ECONNABORTED') {
    return 'Request timed out. Please try again.';
  }
  
  if (error.response?.status === 404) {
    return 'Service not found. Please check your connection.';
  }
  
  if (error.response?.status === 500) {
    return 'Server error. Please try again later.';
  }
  
  return error.response?.data?.error || error.response?.data?.message || 'An unexpected error occurred.';
};
