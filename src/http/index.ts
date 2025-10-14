import axios, { type InternalAxiosRequestConfig } from 'axios';

const $host = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
  headers: {
    'skip_zrok_interstitial': 'true'
  }
});

const $authHost = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
  headers: {
    'skip_zrok_interstitial': 'true'
  }
});

const authInterceptor = (config: InternalAxiosRequestConfig) => {
  if (typeof window !== 'undefined') {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export {
  $host,
  $authHost
};