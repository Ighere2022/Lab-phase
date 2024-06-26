import axios from "axios";
const devBaseUrl = "http://localhost:5000";
const productionUrl = "https://lab-phase.onrender.com";
const api = axios.create({
  baseURL: `${devBaseUrl}/api`,
});
export default api;
