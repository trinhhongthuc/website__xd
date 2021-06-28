import axiosClient from "./axiosClient";

const courseApi = {
  getCourse: (id) => {
    const url = "course";
    return axiosClient.get(`${url}/${id}`);
  },

  getCourseDetailByID: (id) => {
    const url = "getCourseDetailByID";
    return axiosClient.get(`${url}/${id}`);
  },

  getCourseRelated: (hashTag) => {
    const url = "getCourseRelated";
    return axiosClient.post(`${url}`, { payload: hashTag });
  },

  getCounter: () => {
    const url = "getCounter";
    return axiosClient.get(`${url}`);
  },

  getCourseHome: () => {
    const url = "getCourseHome";
    return axiosClient.get(`${url}`);
  },

  getCoursePaginations: (params) => {
    const url = "getCoursePagination";
    return axiosClient.get(`${url}`, { params });
  },
};

export default courseApi;
