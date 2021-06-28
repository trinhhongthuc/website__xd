import axiosClient from "./axiosClient";

const fetchBack = {
  getFetchBack: () => {
    const url = "getFetchBack";
    return axiosClient.get(url);
  },
};

export default fetchBack;
