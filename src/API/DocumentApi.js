import axiosClient from "./axiosClient";
const DocumentApi = {
  getAllDocument: async () => {
    const url = "/getAllDocument";
    return await axiosClient.get(`${url}`);
  },

  // admin

  addNewDocument: async (data) => {
    const url = "addNewDocument";
    return await axiosClient.post(url, data);
  },

  getDocumentById: async (id) => {
    const url = "getDocumentById";
    return await axiosClient.get(`${url}/${id}`);
  },

  updateDocumentById: async (data) => {
    const url = "updateDocumentById";
    return await axiosClient.put(`${url}`, data);
  },

  deleteDocumentById: async (id) => {
    const url = "deleteDocumentById";
    return await axiosClient.delete(`${url}/${id}`);
  },
};

export default DocumentApi;
