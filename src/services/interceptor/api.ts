import axios, { AxiosRequestConfig } from "axios";
import config from "../../environment/dev";

const AxiosInstance = axios.create({
  baseURL: config.BASE_URL
});

AxiosInstance.interceptors.request.use((req: AxiosRequestConfig) => {
  let { url } = req;

  if (url)
    req.url = url.concat(`&lang=${config.LANGUAGE}&APPID=${config.API_KEY}`);

  return req;
});

AxiosInstance.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response.status === 401) {
      const requestConfig = error.config;
      return axios(requestConfig);
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;
