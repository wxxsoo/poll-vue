// import store from '@/store/index.js';
import { notification } from 'ant-design-vue';

export function setInterceptors(instance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function(config) {
      return config;
    },
    function(error) {
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function(response) {
      if (
        response.config.method === 'post' ||
        response.config.method === 'put' ||
        response.config.method === 'delete'
      ) {
        notification.success({
          message: response.data.message,
          duration: 2,
        });
      }

      return response;
    },
    function(error) {
      console.log(error.response);
      notification.error({
        message: error.response.data.message,
        duration: 2,
      });
      return Promise.reject(error);
    },
  );

  return instance;
}
