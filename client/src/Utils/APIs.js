import axios from "axios";

//methods for interacting with API Auth routes
export default {
   login: userData =>
      axios.post("/auth/login", userData),
   signUp: userData =>
      axios.post('/auth/signup', userData),
   dashboard: token =>
      axios.get('/api/dashboard', { headers: { Authorization: `bearer ${token}` } }),
   adult: (token, adultData) =>
      axios.post('/api/adult', adultData, { headers: { Authorization: `bearer ${token}` } }),
   // user: (token, userData) =>
   //    axios.get('/api/user', userData, { headers: { Authorization: `bearer ${token}` } }),

};
