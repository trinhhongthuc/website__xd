import axiosClient from "./axiosClient";

const projectApi = {
  getProject: () => {
    const url = "getProject";
    return axiosClient.get(url);
  },
};

export default projectApi;
