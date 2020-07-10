import axios from 'axios';
import { setInterceptors } from './config/interceptors';

// instance & interceptor
function create(url, options) {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  setInterceptors(instance);
  return instance;
}

export const poll = create(process.env.VUE_APP_POLL_API);
