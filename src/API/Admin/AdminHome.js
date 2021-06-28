import axiosClient from "../axiosClient";

const AdminHomeApi = {
  deleteRegisterCourse: async (id) => {
    const url = `deleteRegisterCourse`;
    return await axiosClient.get(`${url}/${id}`);
  },

  getAllRegisterCourse: async () => {
    const url = `getAllRegisterCourse`;
    return await axiosClient.get(`${url}`);
  },
};

export default AdminHomeApi;
