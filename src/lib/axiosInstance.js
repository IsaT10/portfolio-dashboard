import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log({ error });
    return Promise.reject(error?.response?.data);
  }
);
