import axios from 'axios';

// Create an Axios instance with base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust the base URL as needed
  timeout: 10000, // Optional: Set a timeout (10 seconds)
  headers: { 'Content-Type': 'application/json' }
});

// Function to fetch menu items
export const fetchMenuItems = async () => {
  try {
    const response = await api.get('/menu-items'); // Endpoint relative to base URL
    return response.data;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    throw error; // Re-throw to handle in components
  }
};
