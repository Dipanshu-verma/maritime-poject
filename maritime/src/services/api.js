import axios from '../utils/axiosConfig';

// Auth API calls
export const registerUser = async (userData) => {
  return await axios.post('/auth/register', userData);
};

export const loginUser = async (userData) => {
  return await axios.post('/auth/login', userData);
};

export const getUserProfile = async () => {
  return await axios.get('/auth/profile');
};

// Ships API calls
export const searchShip = async (name) => {
  return await axios.get(`/ships/search?name=${name}`);
};

export default axios;