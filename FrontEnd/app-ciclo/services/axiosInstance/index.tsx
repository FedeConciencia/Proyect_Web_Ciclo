/* eslint-disable camelcase */
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Indicamos cual es el base url de la API
axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers.set("Accept", "application/json");
    config.headers.set("Content-Type", "application/json");

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosInstance;
