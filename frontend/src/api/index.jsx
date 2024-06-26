import axios from "axios";
const devBaseUrl = "http://localhost:5000";
const productionUrl = "https://task-manager-alpha-gilt-53.vercel.app";
const api = axios.create({
  baseURL: `${devBaseUrl}/api`,
});
export default api;
