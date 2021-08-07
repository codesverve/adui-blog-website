import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import router from '@/router';

const $http = axios.create({
  baseURL: 'http://localhost:8889/adui-blog'
  // baseURL: 'http://81.68.71.52:8889/adui-blog'
});

$http.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.method === 'get') {
    config.params = {...config.params, _t: new Date().getTime()};
  }
  return config;
}, error => {
  return Promise.reject(error);
});

$http.interceptors.response.use((response: AxiosResponse) => {
  return response;
}, error => {
  if (error.response.status === 401) {
    window.sessionStorage.removeItem('token');
    router.push({name: 'Login'});
  }
  return Promise.reject(error);
});

export default $http;
