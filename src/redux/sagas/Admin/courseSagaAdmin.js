import { call, put, takeLatest } from "redux-saga/effects";
import types from "../../types.js";

import courseAdminApi from "../../../API/Admin/courseAdminApi.js";

/// get all course
function* watchGetCourse() {
  const dataServer = yield call(async () => {
    return await courseAdminApi.getDataCourseAdmin();
  });
  try {
    if (dataServer.success) {
      yield put({
        type: types.COURSE_ADMIN_SAGA_SUCCESS,
        payload: dataServer.data,
      });
    }
  } catch (error) {
    console.error(error);
    yield put({ type: types.COURSE_ADMIN_SAGA_FAILURE });
  }
}

//////add course

function* watchAddCourse(data) {
  try {
    const dataServer = yield call(async () => {
      return await courseAdminApi.addDataCourseAdmin(data.payload);
    });
    if (dataServer.success) {
      yield put({
        type: types.COURSE_ADMIN_ADD_SAGA_SUCCESS,
        payload: dataServer.dataServer,
      });
    }
  } catch (error) {
    console.error(error);
    yield put({ type: types.COURSE_ADMIN_ADD_SAGA_FAILURE });
  }
}

// delete course

function* watchDeleteCourse(data) {
  const dataServer = yield call(async () => {
    return await courseAdminApi.deleteDataCourseAdmin(data.payload);
  });
  try {
    if (dataServer.success) {
      yield put({
        type: "COURSE_ADMIN_DELETE_SAGA_SUCCESS",
        payload: data.payload,
      });
    }
  } catch (error) {
    yield put({ type: types.COURSE_ADMIN_DELETE_SAGA_FAILURE });
  }
}

function* watchUpdateCourse({ payload }) {
  const dataServer = yield call(async () => {
    return await courseAdminApi.updateCourse(payload);
  });
  try {
    if (dataServer.success) {
      yield put({ type: types.COURSE_ADMIN_UPDATE_SAGA_SUCCESS });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: types.COURSE_ADMIN_UPDATE_SAGA_FAILURE });
  }
}

function* courseSagaAdmin() {
  yield takeLatest(types.COURSE_ADMIN_SAGA, watchGetCourse);
  yield takeLatest(types.COURSE_ADMIN_ADD_SAGA, watchAddCourse);
  yield takeLatest(types.COURSE_ADMIN_DELETE_SAGA, watchDeleteCourse);
  yield takeLatest(types.COURSE_ADMIN_UPDATE_SAGA, watchUpdateCourse);
}

export default courseSagaAdmin;
