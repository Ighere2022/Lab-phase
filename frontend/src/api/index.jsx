import axios from "axios";
const baseUrl = "http://localhost:5000";
const api = axios.create({
  baseURL: `${baseUrl}/api`,
});
export default api;
