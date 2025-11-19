// Base URL for your backend API
export const API_BASE_URL = "http://localhost:5000";

// API Endpoints
export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    SIGNUP: `${API_BASE_URL}/api/auth/signup`,
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    VERIFY_EMAIL: `${API_BASE_URL}/api/auth/verify-email`,
    FORGOT_PASSWORD: `${API_BASE_URL}/api/auth/forgot-password`,
    VERIFY_RESET_CODE: `${API_BASE_URL}/api/auth/verify-reset-code`,
    RESET_PASSWORD: `${API_BASE_URL}/api/auth/reset-password`,
  },
  
  // Add more endpoint categories as your project grows
  // USER: {
  //   GET_PROFILE: `${API_BASE_URL}/api/user/profile`,
  // },
};

// Optional: Helper function for API calls
export const apiCall = async (url, options = {}) => {
  try {
    const token = localStorage.getItem("adminToken");
    
    const defaultOptions = {
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    };

    const response = await fetch(url, {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};