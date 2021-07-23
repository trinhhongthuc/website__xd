import axiosClient from "./axiosClient";

const RecruitApi = {
  // home
  getAllRecruit: async () => {
    const url = "getAllRecruit";
    return await axiosClient.get(url);
  },

  // admin

  getAllRecruitAdmin: async () => {
    const url = "getAllRecruitAdmin";
    return await axiosClient.get(url);
  },

  addNewRecruit: async (data) => {
    const url = "addNewRecruit";
    return await axiosClient.post(url, data);
  },

  deleteRecruit: async (id) => {
    const url = "deleteRecruit";
    return await axiosClient.delete(`${url}/${id}`);
  },

  getRecruitById: async (id) => {
    const url = "getRecruitById";
    return await axiosClient.get(`${url}/${id}`);
  },

  updateRecruit: async (data) => {
    const url = "updateRecruit";
    return await axiosClient.put(`${url}`, data);
  },
};

export default RecruitApi;
