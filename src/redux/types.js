const types = {
  ////////Slide

  SLIDE_ADMIN_SAGA: "SLIDE_ADMIN_SAGA",
  SLIDE_ADMIN_SAGA_SUCCESS: "SLIDE_ADMIN_SAGA_SUCCESS",
  SLIDE_ADMIN_SAGA_FAILURE: "SLIDE_ADMIN_SAGA_FAILURE",

  /// slide delete

  SLIDE_ADMIN_DELETE_SAGA: "SLIDE_ADMIN_DELETE_SAGA",
  SLIDE_ADMIN_DELETE_SAGA_SUCCESS: "SLIDE_ADMIN_DELETE_SAGA_SUCCESS",
  SLIDE_ADMIN_DELETE_SAGA_FAILURE: "SLIDE_ADMIN_DELETE_SAGA_FAILURE",

  //add slide
  SLIDE_ADMIN_ADD_SAGA: "SLIDE_ADMIN_ADD_SAGA",
  SLIDE_ADMIN_ADD_SAGA_SUCCESS: "SLIDE_ADMIN_ADD_SAGA_SUCCESS",
  SLIDE_ADMIN_ADD_SAGA_FAILURE: "SLIDE_ADMIN_ADD_SAGA_FAILURE",

  // course get data

  COURSE_ADMIN_SAGA: "COURSE_ADMIN_SAGA",
  COURSE_ADMIN_SAGA_SUCCESS: "COURSE_ADMIN_SAGA_SUCCESS",
  COURSE_ADMIN_SAGA_FAILURE: "COURSE_ADMIN_SAGA_FAILURE",

  // course add data

  COURSE_ADMIN_ADD_SAGA: "COURSE_ADMIN_ADD_SAGA",
  COURSE_ADMIN_ADD_SAGA_SUCCESS: "COURSE_ADMIN_ADD_SAGA_SUCCESS",
  COURSE_ADMIN_ADD_SAGA_FAILURE: "COURSE_ADMIN_ADD_SAGA_FAILURE",

  // course delete data

  COURSE_ADMIN_DELETE_SAGA: "COURSE_ADMIN_DELETE_SAGA",
  COURSE_ADMIN_DELETE_SAGA_SUCCESS: "COURSE_ADMIN_DELETE_SAGA_SUCCESS",
  COURSE_ADMIN_DELETE_SAGA_FAILURE: "COURSE_ADMIN_DELETE_SAGA_FAILURE",

  // course update data

  COURSE_ADMIN_UPDATE_SAGA: "COURSE_ADMIN_UPDATE_SAGA",
  COURSE_ADMIN_UPDATE_SAGA_SUCCESS: "COURSE_ADMIN_UPDATE_SAGA_SUCCESS",
  COURSE_ADMIN_UPDATE_SAGA_FAILURE: "COURSE_ADMIN_UPDATE_SAGA_FAILURE",

  // get all project

  GET_ALL_PROJECT_ADMIN_SAGA: "GET_ALL_PROJECT_ADMIN_SAGA",
  GET_ALL_PROJECT_ADMIN_SAGA_SUCCESS: "GET_ALL_PROJECT_ADMIN_SAGA_SUCCESS",
  GET_ALL_PROJECT_ADMIN_SAGA_FAILURE: "GET_ALL_PROJECT_ADMIN_SAGA_FAILURE",

  // add project data

  ADD_PROJECT_ADMIN_SAGA: "ADD_PROJECT_ADMIN_SAGA",
  ADD_PROJECT_ADMIN_SAGA_SUCCESS: "ADD_PROJECT_ADMIN_SAGA_SUCCESS",
  ADD_PROJECT_ADMIN_SAGA_FAILURE: "ADD_PROJECT_ADMIN_SAGA_FAILURE",

  // delete project data

  DELETE_PROJECT_ADMIN_SAGA: "DELETE_PROJECT_ADMIN_SAGA",
  DELETE_PROJECT_ADMIN_SAGA_SUCCESS: "DELETE_PROJECT_ADMIN_SAGA_SUCCESS",
  DELETE_PROJECT_ADMIN_SAGA_FAILURE: "DELETE_PROJECT_ADMIN_SAGA_FAILURE",

  // detail project data

  DETAIL_PROJECT_ADMIN_SAGA: "DETAIL_PROJECT_ADMIN_SAGA",
  DETAIL_PROJECT_ADMIN_SAGA_SUCCESS: "DETAIL_PROJECT_ADMIN_SAGA_SUCCESS",
  DETAIL_PROJECT_ADMIN_SAGA_FAILURE: "DETAIL_PROJECT_ADMIN_SAGA_FAILURE",

  // update project data

  UPDATE_PROJECT_ADMIN_SAGA: "UPDATE_PROJECT_ADMIN_SAGA",
  UPDATE_PROJECT_ADMIN_SAGA_SUCCESS: "UPDATE_PROJECT_ADMIN_SAGA_SUCCESS",
  UPDATE_PROJECT_ADMIN_SAGA_FAILURE: "UPDATE_PROJECT_ADMIN_SAGA_FAILURE",

  /////////// POST ////////////////////

  // GET ALL POST //////////
  GET_ALL_POST_ADMIN_SAGA: "GET_ALL_POST_ADMIN_SAGA",
  GET_ALL_POST_ADMIN_SAGA_SUCCESS: "GET_ALL_POST_ADMIN_SAGA_SUCCESS",
  GET_ALL_POST_ADMIN_SAGA_FAILURE: "GET_ALL_POST_ADMIN_SAGA_FAILURE",

  // ADD POST //////////
  ADD_POST_ADMIN_SAGA: "ADD_POST_ADMIN_SAGA",
  ADD_POST_ADMIN_SAGA_SUCCESS: "ADD_POST_ADMIN_SAGA_SUCCESS",
  ADD_POST_ADMIN_SAGA_FAILURE: "ADD_POST_ADMIN_SAGA_FAILURE",

  // UPDATE POST //////////
  UPDATE_POST_ADMIN_SAGA: "UPDATE_POST_ADMIN_SAGA",
  UPDATE_POST_ADMIN_SAGA_SUCCESS: "UPDATE_POST_ADMIN_SAGA_SUCCESS",
  UPDATE_POST_ADMIN_SAGA_FAILURE: "UPDATE_POST_ADMIN_SAGA_FAILURE",

  // DELETE POST //////////
  DELETE_POST_ADMIN_SAGA: "DELETE_POST_ADMIN_SAGA",
  DELETE_POST_ADMIN_SAGA_SUCCESS: "DELETE_POST_ADMIN_SAGA_SUCCESS",
  DELETE_POST_ADMIN_SAGA_FAILURE: "DELETE_POST_ADMIN_SAGA_FAILURE",

  // GET ALL BOX RUN //////////
  GET_ALL_BOX_RUN_ADMIN_SAGA: "GET_ALL_BOX_RUN_ADMIN_SAGA",
  GET_ALL_BOX_RUN_ADMIN_SAGA_SUCCESS: "GET_ALL_BOX_RUN_ADMIN_SAGA_SUCCESS",
  GET_ALL_BOX_RUN_ADMIN_SAGA_FAILURE: "GET_ALL_BOX_RUN_ADMIN_SAGA_FAILURE",

  // ADD BOX RUN //////////
  ADD_BOX_RUN_ADMIN_SAGA: "ADD_BOX_RUN_ADMIN_SAGA",
  ADD_BOX_RUN_ADMIN_SAGA_SUCCESS: "ADD_BOX_RUN_ADMIN_SAGA_SUCCESS",
  ADD_BOX_RUN_ADMIN_SAGA_FAILURE: "ADD_BOX_RUN_ADMIN_SAGA_FAILURE",

  // DELET BOX RUN //////////
  DELETE_BOX_RUN_ADMIN_SAGA: "DELETE_BOX_RUN_ADMIN_SAGA",
  DELETE_BOX_RUN_ADMIN_SAGA_SUCCESS: "DELETE_BOX_RUN_ADMIN_SAGA_SUCCESS",
  DELETE_BOX_RUN_ADMIN_SAGA_FAILURE: "DELETE_BOX_RUN_ADMIN_SAGA_FAILURE",

  // UPDATE BOX RUN //////////
  UPDATE_BOX_RUN_ADMIN_SAGA: "UPDATE_BOX_RUN_ADMIN_SAGA",
  UPDATE_BOX_RUN_ADMIN_SAGA_SUCCESS: "UPDATE_BOX_RUN_ADMIN_SAGA_SUCCESS",
  UPDATE_BOX_RUN_ADMIN_SAGA_FAILURE: "UPDATE_BOX_RUN_ADMIN_SAGA_FAILURE",

  ///GET DATA PAGINATION
  GET_DATA_PAGINATION: "GET_DATA_PAGINATION",
  GET_DATA_PAGINATION_SUCCESS: "GET_DATA_PAGINATION_SUCCESS",
  GET_DATA_PAGINATION_FAILURE: "GET_DATA_PAGINATION_FAILURE",

  ///CONTACT FORM
  CONTACT_FROM: "CONTACT_FROM",
  CONTACT_FROM_SUCCESS: "CONTACT_FROM_SUCCESS",
  CONTACT_FROM_FAILURE: "CONTACT_FROM_FAILURE",

  // REGISTER COURSE

  REGISTER_COURSE: "REGISTER_COURSE",
  REGISTER_COURSE_SUCCESS: "REGISTER_COURSE_SUCCESS",
  REGISTER_COURSE_FAILURE: "REGISTER_COURSE_FAILURE",

  // CERTIFICATE COURSE

  CERTIFICATE: "CERTIFICATE",
  CERTIFICATE_SUCCESS: "CERTIFICATE_SUCCESS",
  CERTIFICATE_FAILURE: "CERTIFICATE_FAILURE",
  CERTIFICATE_SUCCESS_NOTIFY: "CERTIFICATE_SUCCESS_NOTIFY",
  // CERTIFICATE ADMIN

  CERTIFICATE__ADMIN: "CERTIFICATE__ADMIN",
  CERTIFICATE__ADMIN_SUCCESS: "CERTIFICATE__ADMIN_SUCCESS",
  CERTIFICATE__ADMIN_FAILURE: "CERTIFICATE__ADMIN_FAILURE",

  // CERTIFICATE ADMIN ADD

  CERTIFICATE__ADMIN_ADD: "CERTIFICATE__ADMIN_ADD",
  CERTIFICATE__ADMIN_ADD_SUCCESS: "CERTIFICATE__ADMIN_ADD_SUCCESS",
  CERTIFICATE__ADMIN_ADD_FAILURE: "CERTIFICATE__ADMIN_ADD_FAILURE",

  // CERTIFICATE ADMIN DELETE

  CERTIFICATE__ADMIN_DELETE: "CERTIFICATE__ADMIN_DELETE",
  CERTIFICATE__ADMIN_DELETE_SUCCESS: "CERTIFICATE__ADMIN_DELETE_SUCCESS",
  CERTIFICATE__ADMIN_DELETE_FAILURE: "CERTIFICATE__ADMIN_DELETE_FAILURE",

  // CERTIFICATE ADMIN DELETE

  REGISTER_COURSE_DELETE: "REGISTER_COURSE_DELETE",
  REGISTER_COURSE_DELETE_SUCCESS: "REGISTER_COURSE_DELETE_SUCCESS",
  REGISTER_COURSE_DELETE_FAILURE: "REGISTER_COURSE_DELETE_FAILURE",

  // CERTIFICATE ADMIN GET ALL

  GET_ALL_REGISTER_COURSE: "GET_ALL_REGISTER_COURSE",
  GET_ALL_REGISTER_COURSE_SUCCESS: "GET_ALL_REGISTER_COURSE_SUCCESS",
  GET_ALL_REGISTER_COURSE_FAILURE: "GET_ALL_REGISTER_COURSE_FAILURE",

  // LOGIN

  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",

  // LOGIN

  CHANGE_PASSWORD: "CHANGE_PASSWORD",
  CHANGE_PASSWORD_SUCCESS: "CHANGE_PASSWORD_SUCCESS",
  CHANGE_PASSWORD_FAILURE: "CHANGE_PASSWORD_FAILURE",

  // REFRESH TOKEN

  REFRESH_TOKEN: "REFRESH_TOKEN",
  REFRESH_TOKEN_SUCCESS: "REFRESH_TOKEN_SUCCESS",
  REFRESH_TOKEN_FAILURE: "REFRESH_TOKEN_FAILURE",
};

export default types;
