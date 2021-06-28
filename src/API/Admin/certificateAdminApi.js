import axiosClient from "../axiosClient";

const certificateAdminApi = {
  getAllCertificate: async () => {
    const url = "/getAllCertificate";
    return await axiosClient.get(url);
  },

  addCertificateAdmin: async (data) => {
    const url = "/addCertificateAdmin";
    return await axiosClient.post(url, { payload: data });
  },

  deleteCertificateAdmin: async (id) => {
    const url = "/deleteCertificateAdmin";
    return await axiosClient.get(`${url}/${id}`);
  },
};

export default certificateAdminApi;
