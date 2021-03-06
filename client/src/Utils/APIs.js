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
   user: (token) =>
      axios.get('/api/user',  { headers: { Authorization: `bearer ${token}` } }),
   userById: (token, id) =>
      axios.get(`/api/user/${id}`,  { headers: { Authorization: `bearer ${token}` } }),
   // teacher: token =>
   //    axios.get('/api/teacher', { headers: { Authorization: `bearer ${token}` } })

};
