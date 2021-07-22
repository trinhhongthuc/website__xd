import axiosClient from "./axiosClient";

const Recruit = {
  getAllRecruit: async () => {
    const url = "getAllRecruit";
    return await axiosClient.get(url);
  },
};

export default Recruit;
