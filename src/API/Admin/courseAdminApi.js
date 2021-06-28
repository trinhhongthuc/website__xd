import axiosClient from "../axiosClient";

const courseAdminApi = {
  getDataCourseAdmin: () => {
    const url = `course`;
    return axiosClient.get(`/${url}`);
  },

  deleteDataCourseAdmin: (id) => {
    const url = `/deleteCourse`;
    return axiosClient.get(`${url}/${id}`);
  },

  addDataCourseAdmin: (data) => {
    const url = `/addCourse`;
    return axiosClient.post(`${url}`, {
      payload: data,
    });
  },

  updateDataCourseAdmin: (data) => {
    const url = `/updateCourse`;
    return axiosClient.post(`${url}`, {
      payload: data,
    });
  },

  getOneDataCourseAdmin: (id) => {
    const url = `/getOneDataCourse`;
    return axiosClient.get(`${url}/${id}`);
  },

  getOneDataDetailCourseAdmin: (id) => {
    const url = `/getOneCourse`;
    return axiosClient.get(`${url}/${id}`);
  },

  getOneDataUpdateCourseAdmin: (data) => {
    const url = `/getOneCourseUpdate`;
    return axiosClient.post(`${url}`, { payload: data });
  },

  updateCourse: (data) => {
    const url = `/updateCourse`;
    return axiosClient.post(`${url}`, { payload: data });
  },
};

export default courseAdminApi;
