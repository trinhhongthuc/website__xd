import axiosClient from "./axiosClient";

const contactApi = {
  postContact: (data) => {
    const url = "/postContact";
    return axiosClient.post(url, { payload: data });
  },
};

export default contactApi;
