import axiosClient from "./axiosClient";

const LoginApi = {
  loginApi: async (data) => {
    const url = "loginAdmin";
    return await axiosClient.post(url, { payload: data });
  },

  changPassword: async (data) => {
    const url = "changPassword";
    return await axiosClient.put(url, { payload: data });
  },

  refreshToken: async (refreshToken) => {
    console.log("object");
    const url = "refreshToken";
    return await axiosClient.get(url, {
      headers: {
        refreshToken: "Bearer " + sessionStorage.getItem("refreshToken"),
      },
    });
  },
};

export default LoginApi;
