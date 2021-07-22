import axios from "axios";
import queryString from "query-string";
import jwt_decode from "jwt-decode";
import LoginApi from "./LoginApi";
import { Redirect } from "react-router-dom";
const URL = "http://localhost:5000";
const axiosClient = axios.create({
  baseURL: URL,
  headers: { "Content-Type": "application/json" },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  async function (config) {
    if (sessionStorage.getItem("token")) {
      const time = jwt_decode(sessionStorage.getItem("token"));

      if (time.exp * 1000 < new Date().getTime()) {
        sessionStorage.clear();
        <Redirect to="/login" />;
      }
    }
    config.headers.authorization = `Bearer ${sessionStorage.getItem("token")}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  async (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      console.log(error);
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
