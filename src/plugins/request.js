'use strict';

import axios from 'axios';

const config = {
  baseURL: process.env.baseURL || '',
  timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
};

const selfAxios = axios.create(config);

// request拦截器
selfAxios.interceptors.request.use(
  (info) => {
    return info;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// response拦截器
selfAxios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default selfAxios;
