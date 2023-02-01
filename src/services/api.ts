import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { showAlert } from "../util";
import env from "../config/config";

const http: AxiosInstance = axios.create({
  baseURL: env.SERVER_API,
});

http.interceptors.response.use(
  async (response: AxiosResponse): Promise<any> => {
    if (response.status >= 200 && response.status < 300) {
      // return response.data;
      return response.data;
    }
  },
  (error: AxiosError) => {
    const {
      response,
      request,
    }: { response?: AxiosResponse; request?: XMLHttpRequest } = error;
    if (response) {
      if (response.status >= 400 && response.status < 500) {
        if (response.status === 401) {
          window.location.href = "/login";
        }
        showAlert(response.data?.message, "error");
        return null;
      }
    } else if (request) {
      showAlert("Request failed. Please try again.", "error");
      return null;
    }
    return Promise.reject(error);
  }
);

export default http;
