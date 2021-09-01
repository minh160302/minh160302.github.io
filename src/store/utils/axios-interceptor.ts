import axios from "axios";
import { SERVICE_CONFIG } from "./constants"

// config defaults for axios
axios.defaults.baseURL = SERVICE_CONFIG.SERVICE_API_URL
axios.defaults.headers.post['Content-Type'] = 'application/json';


const setUpAxiosInterceptors = (onErrorHandling) => {

  const onResponseSuccess = (response) => response
  const onResponseError = (error) => {
    if (error.response && error.response.data) {
      const status = error.status || error.response.status;

      if (status === 403 || status === 401 || status === 400) {
        onErrorHandling();
      }
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  };

  axios.interceptors.response.use(onResponseSuccess, onResponseError);
}

export default setUpAxiosInterceptors;