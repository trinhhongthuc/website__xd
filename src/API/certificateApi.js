import axiosClient from "./axiosClient";

const certificateApi = {
  getCertificate: async (params) => {
    const url = "getCertificate";
    return await axiosClient.get(url, { params });
  },

  getCertificateById: async (id) => {
    const url = "getCertificateById";
    return await axiosClient.get(`${url}/${id}`);
  },

  getAllCertificate: async (id) => {
    const url = "getAllCertificateByLimit";
    return await axiosClient.get(`${url}/${id}`);
  },
};

export default certificateApi;
