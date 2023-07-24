import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

client.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Add a response interceptor
client.interceptors.response.use(
  async function (response) {
    return response.data;
  },
  async function (error) {
    return Promise.reject(error);
  }
);

// eslint-disable-next-line import/no-default-export
export default client;
