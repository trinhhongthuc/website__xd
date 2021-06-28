import axiosClient from "../axiosClient";

const postAdminApi = {
  getAllPostApi: () => {
    const url = "getAllPost";
    return axiosClient.get(url);
  },
  addPostApi: (data) => {
    const url = "addPost";
    return axiosClient.post(url, { payload: data });
  },

  getPostByIdApi: (id) => {
    const url = "getPostByIdApi";
    return axiosClient.get(`${url}/${id}`);
  },

  updatePostApi: (data) => {
    const url = "updatePostApi";
    return axiosClient.post(`${url}`, { payload: data });
  },
  deletePostApi: (id) => {
    const url = "deletePostApi";
    return axiosClient.get(`${url}/${id}`);
  },
};

export default postAdminApi;
