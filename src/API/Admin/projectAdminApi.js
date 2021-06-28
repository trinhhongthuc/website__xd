import axiosClient from "../axiosClient";

const projectAdminApi = {
  getAllDataProjects: () => {
    const url = "getAllDataProjects";
    return axiosClient.get(url);
  },

  addNewProject: (data) => {
    const url = "addProject";
    return axiosClient.post(url, {
      payload: data,
    });
  },

  deleteOneProject: (id) => {
    const url = "deleteProject";
    return axiosClient.get(`${url}/${id}`);
  },
  getDetailProjectById: (id) => {
    const url = "getDetailProjectById";
    return axiosClient.get(`${url}/${id}`);
  },

  getUpdateProjectById: (data) => {
    const url = "updateProject";
    return axiosClient.post(url, { payload: data });
  },
};

export default projectAdminApi;
