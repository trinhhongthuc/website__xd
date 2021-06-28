import axios from "axios";
import queryString from "query-string";
import jwt_decode from "jwt-decode";
import LoginApi from "./LoginApi";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Content-Type": "application/json" },
  paramsSerializer: (params) => queryString.stringify(params),
});

const refreshToken = async () => {
  try {
    return await LoginApi.refreshToken();
  } catch (error) {
    window.location.redirect = "/login";
  }
};

const fetchToken = async () => {
  const url = "http://localhost:5000";
  try {
    return await axios.get(`${url}/refreshToken`, {
      headers: {
        refreshToken: "Bearer " + localStorage.getItem("refreshToken"),
      },
    });
  } catch (error) {
    console.log(error);
  }
};

let refreshTokenRequest = null;

axiosClient.interceptors.request.use(
  async function (config) {
    if (localStorage.getItem("token")) {
      const time = jwt_decode(localStorage.getItem("token"));

      if (time.exp * 1000 < new Date().getTime()) {
        refreshTokenRequest = refreshTokenRequest
          ? refreshTokenRequest
          : fetchToken();
        const token = await refreshTokenRequest;

        localStorage.setItem("token", token.data.data.token);
        localStorage.setItem("refreshToken", token.data.data.refreshToken);

        refreshTokenRequest = null;
      }

      config.headers.authorization = `Bearer ` + localStorage.getItem("token");
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// axiosClient.interceptors.request.use(
//   async (req) => {
//     // let refreshTokenRequest = null;

//     // if (decodeToken.exp * 1000 < new Date().getTime()) {
//     //   refreshTokenRequest = refreshTokenRequest
//     //     ? refreshTokenRequest
//     //     : refreshToken();

//     //   const newToken = await refreshTokenRequest;

//     //   refreshTokenRequest = null;

//     //   const token = newToken;
//     //   console.log("requestApi: Fetch data with new token: ", token);
//     // }
//     // if (decodeToken.exp * 1000 < new Date().getTime()) {
//     // const refreshTokens = async () => {
//     //   if (localStorage.getItem("token")) {
//     //     refreshToken();
//     //   }
//     // };

//     // refreshTokens();
//     // }
//     // req.headers.authorization = "Bearer " + localStorage.getItem("token");

//     if (localStorage.getItem("token")) {
//       req.headers.authorization = "Bearer " + localStorage.getItem("token");
//     }

//     return req;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

// axiosClient.interceptors.request.use(
//   async (config) => {
//     const value = await fetchToken();
//     const keys = JSON.parse(value);
//     config.headers = {
//       Authorization: `Bearer ${value.data.token}`,
//       Accept: "application/json",
//       "Content-Type": "application/x-www-form-urlencoded",
//     };
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

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
      // will loop if refreshToken returns 401
      return refreshToken();
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
