import axiosClient from "../axiosClient";

const boxRunAdminApi = {
  getAllBoxRunApi: () => {
    const url = "getAllBoxRunApi";
    return axiosClient.get(url);
  },

  addBoxRunApi: (data) => {
    const url = "addBoxRunApi";
    return axiosClient.post(url, { payload: data });
  },

  deleteBoxRunApi: (id) => {
    const url = "deleteBoxRunApi";
    return axiosClient.get(`${url}/${id}`);
  },

  getBoxRunById: (id) => {
    const url = "getBoxRunById";
    return axiosClient.get(`${url}/${id}`);
  },

  updateBoxRun: (data) => {
    const url = "updateBoxRun";
    return axiosClient.post(url, { payload: data });
  },
};

export default boxRunAdminApi;
