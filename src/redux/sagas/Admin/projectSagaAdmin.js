import { call, put, takeLatest } from "redux-saga/effects";
import types from "../../types";
import projectAdminApi from "../../../API/Admin/projectAdminApi";

function* watchGetAllProject() {
  const dataServer = yield call(async () => {
    return await projectAdminApi.getAllDataProjects();
  });

  try {
    if (dataServer.success) {
      yield put({
        type: types.GET_ALL_PROJECT_ADMIN_SAGA_SUCCESS,
        payload: dataServer.data,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: types.GET_ALL_PROJECT_ADMIN_SAGA_FAILURE });
  }
}

function* watchAddProject({ payload }) {
  const dataServer = yield call(async () => {
    return await projectAdminApi.addNewProject(payload);
  });

  try {
    if (dataServer.success) {
      yield put({
        type: types.ADD_PROJECT_ADMIN_SAGA_SUCCESS,
        payload: dataServer.data,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: types.ADD_PROJECT_ADMIN_SAGA_FAILURE });
  }
}

//delete One Project

function* watchDeleteProject({ payload }) {
  const dataServer = yield call(async () => {
    return await projectAdminApi.deleteOneProject(payload);
  });

  try {
    if (dataServer.success) {
      yield put({
        type: types.DELETE_PROJECT_ADMIN_SAGA_SUCCESS,
        payload: payload,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: types.DELETE_PROJECT_ADMIN_SAGA_FAILURE });
  }
}

// detail project

function* watchDetailProject({ payload }) {
  const dataServer = yield call(async () => {
    return await projectAdminApi.getDetailProjectById(payload);
  });

  try {
    if (dataServer.success) {
      yield put({
        type: types.DETAIL_PROJECT_ADMIN_SAGA_SUCCESS,
        payload: dataServer.data,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: types.DETAIL_PROJECT_ADMIN_SAGA_FAILURE });
  }
}

// update project

function* watchUpdateProject(payload) {
  console.log(payload);
  const dataServer = yield call(async () => {
    return await projectAdminApi.getUpdateProjectById(payload);
  });

  try {
    if (dataServer.success) {
      yield put({
        type: types.UPDATE_PROJECT_ADMIN_SAGA_SUCCESS,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: types.UPDATE_PROJECT_ADMIN_SAGA_FAILURE });
  }
}

function* projectReducerAdmin() {
  yield takeLatest(types.GET_ALL_PROJECT_ADMIN_SAGA, watchGetAllProject);
  yield takeLatest(types.ADD_PROJECT_ADMIN_SAGA, watchAddProject);
  yield takeLatest(types.DELETE_PROJECT_ADMIN_SAGA, watchDeleteProject);
  yield takeLatest(types.DETAIL_PROJECT_ADMIN_SAGA, watchDetailProject);
  yield takeLatest(types.UPDATE_PROJECT_ADMIN_SAGA, watchUpdateProject);
}

export default projectReducerAdmin;
