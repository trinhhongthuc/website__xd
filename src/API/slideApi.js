import axiosClient from "./axiosClient";

const slideApi = {
  getBanner: () => {
    const url = "banner";
    return axiosClient.get(url);
  },
};

export default slideApi;
