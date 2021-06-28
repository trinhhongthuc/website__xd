import types from "../types";

///////slide
export const getDataSlideAdmin = () => {
  return {
    type: types.SLIDE_ADMIN_SAGA,
  };
};

export const getDeleteDataSlideAdmin = (id) => {
  return {
    type: types.SLIDE_ADMIN_DELETE_SAGA,
    payload: id,
  };
};

export const addDataSlideAdmin = (data) => {
  return {
    type: types.SLIDE_ADMIN_ADD_SAGA,
    payload: data,
  };
};

///////course

export const getDataCourseAdmin = () => {
  return {
    type: types.COURSE_ADMIN_SAGA,
  };
};

export const getDeleteDataCourseAdmin = (id) => {
  return {
    type: types.COURSE_ADMIN_DELETE_SAGA,
    payload: id,
  };
};

export const addDataCourseAdmin = (data) => {
  return {
    type: types.COURSE_ADMIN_ADD_SAGA,
    payload: data,
  };
};

export const updateDataCourseAdmin = (data) => {
  return {
    type: types.COURSE_ADMIN_UPDATE_SAGA,
    payload: data,
  };
};

/// project data
// get all project data
export const getAllProjects = () => {
  return {
    type: types.GET_ALL_PROJECT_ADMIN_SAGA,
  };
};

//add data project

export const addProject = (data) => {
  return {
    type: types.ADD_PROJECT_ADMIN_SAGA,
    payload: data,
  };
};

// delete project
export const deleteOneProject = (id) => {
  return {
    type: types.DELETE_PROJECT_ADMIN_SAGA,
    payload: id,
  };
};

/// project detail

export const projectDetails = (id) => {
  return {
    type: types.DETAIL_PROJECT_ADMIN_SAGA,
    payload: id,
  };
};

/// update project

export const projectUpdate = (data) => {
  return {
    type: types.UPDATE_PROJECT_ADMIN_SAGA,
    payload: data,
  };
};

////end project//////////////////

/////Post ////////////////

//get all post

export const getAllPost = () => {
  return {
    type: types.GET_ALL_POST_ADMIN_SAGA,
  };
};

//ADD POST

export const addPost = (data) => {
  return {
    type: types.ADD_POST_ADMIN_SAGA,
    payload: data,
  };
};

//UPDATE POST

export const updatePost = (data) => {
  return {
    type: types.UPDATE_POST_ADMIN_SAGA,
    payload: data,
  };
};

//DELETE POST

export const deletePost = (id) => {
  return {
    type: types.DELETE_POST_ADMIN_SAGA,
    payload: id,
  };
};

/// BOX RUN GET ALL////////////////

export const getAllBoxRuns = () => {
  return {
    type: types.GET_ALL_BOX_RUN_ADMIN_SAGA,
  };
};

/// BOX RUN ADD////////////////

export const addBoxRuns = (data) => {
  return {
    type: types.ADD_BOX_RUN_ADMIN_SAGA,
    payload: data,
  };
};

/// BOX RUN DELETE////////////////

export const deleteBoxRuns = (id) => {
  return {
    type: types.DELETE_BOX_RUN_ADMIN_SAGA,
    payload: id,
  };
};

// UPDATE BOX RUN

export const updateBoxRun = (data) => {
  return {
    type: types.UPDATE_BOX_RUN_ADMIN_SAGA,
    payload: data,
  };
};

// ACTION PAGINATIONS

export const pagination = (data) => {
  return {
    type: types.GET_DATA_PAGINATION,
    payload: data,
  };
};

// CONTACT FORM

export const contactForm = (data) => {
  return {
    type: types.CONTACT_FROM,
    payload: data,
  };
};

// REGISTER COURSE

export const registerCourse = (data) => {
  return {
    type: types.REGISTER_COURSE,
    payload: data,
  };
};

// GET CERTIFICATE

export const getCertificate = (data) => {
  return {
    type: types.CERTIFICATE,
    payload: data,
  };
};

// CERTIFICATE ADMIN

export const getAllCertificate = () => {
  return {
    type: types.CERTIFICATE__ADMIN,
  };
};
// ADD CERTIFICATE
export const addCertificateAdmin = (data) => {
  return {
    type: types.CERTIFICATE__ADMIN_ADD,
    payload: data,
  };
};

//DELETE CERTIFICATE
export const deleteCertificateAdmin = (id) => {
  return {
    type: types.CERTIFICATE__ADMIN_DELETE,
    payload: id,
  };
};

/// DELETE REGISTER COURSE

export const deleteRegisterCourse = (id) => {
  return { type: types.REGISTER_COURSE_DELETE, payload: id };
};

export const getAllRegisterCourse = () => {
  return { type: types.GET_ALL_REGISTER_COURSE };
};

/// LOGIN

export const loginAdmin = (data) => {
  return { type: types.LOGIN, payload: data };
};

// CHANGE PASSWORD
export const changePassword = (data) => {
  return {
    type: types.CHANGE_PASSWORD,
    payload: data,
  };
};

export const getTokenRefresh = () => {
  return {
    type: types.REFRESH_TOKEN,
  };
};
