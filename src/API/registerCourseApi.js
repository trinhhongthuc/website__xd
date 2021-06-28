import axiosClient from "./axiosClient";

const registerCourseApi = {
  addInfoRegister: (data) => {
    const url = "/addInfoRegister";
    return axiosClient.post(url, { payload: data });
  },

  getAllRegisterCourse: async () => {
    const url = "getAllRegisterCourse";
    return await axiosClient.get(url);
  },
};

export default registerCourseApi;
