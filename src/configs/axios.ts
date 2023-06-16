import Axios, { AxiosHeaders } from "axios";

import { API_ENDPOINT, localStorage } from "@/configs";
import { authorization } from "@/constants";

export const axios = Axios.create({
  baseURL: `${API_ENDPOINT}api`,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(authorization);
    if (token) {
      (config.headers as AxiosHeaders).set(authorization, `Bearer ${token}`);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
