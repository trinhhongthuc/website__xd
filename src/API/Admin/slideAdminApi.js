import axiosClient from "../axiosClient";

const slideAdminApi = {
  getDataSlideAdmin: () => {
    const url = "/slide";
    return axiosClient.get(url);
  },

  deleteDataSlideAdmin: (id) => {
    const url = "/deleteSlide";
    return axiosClient.get(`${url}/${id}`);
  },

  addDataSlideAdmin: (data) => {
    const url = "/addSlide";
    return axiosClient.post(`${url}`, {
      payload: data,
    });
  },
};

export default slideAdminApi;
// export const getDataSlideAdmin = async () => {
//   const { data } = await axios.get(`${url}/slide`);
//   return data;
// };

// export const deleteDataSlideAdmin = async (id) => {
//   const { data } = await axios.get(`${url}/deleteSlide/${id}`);
//   return data;
// };

// export const addDataSlideAdmin = async (data) => {
//   const { dataServer } = await axios.post(`${url}/addSlide`, {
//     payload: data,
//     headers: { "Content-Type": "application/json" },
//   });
//   return dataServer;
// };
