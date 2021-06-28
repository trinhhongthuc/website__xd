import boxRunAdminApi from "API/Admin/boxRunAdminApi.js";
import { call, put, takeLatest } from "redux-saga/effects";
import types from "redux/types";

// GET ALL BOX RUN ///////
function* watchGetAllBoxRun() {
  const dataServer = yield call(async () => {
    return await boxRunAdminApi.getAllBoxRunApi();
  });

  try {
    if (dataServer.success) {
      yield put({
        type: types.GET_ALL_BOX_RUN_ADMIN_SAGA_SUCCESS,
        payload: dataServer.data,
      });
    }
  } catch (error) {
    yield put({ type: types.GET_ALL_BOX_RUN_ADMIN_SAGA_FAILURE });
  }
}

// ADD BOX RUN //////////////////////////////////

function* watchAddBoxRun({ payload }) {
  const dataServer = yield call(async () => {
    return await boxRunAdminApi.addBoxRunApi(payload);
  });

  try {
    if (dataServer.success) {
      yield put({ type: types.ADD_BOX_RUN_ADMIN_SAGA_SUCCESS });
    }
  } catch (error) {
    yield put({ type: types.ADD_BOX_RUN_ADMIN_SAGA_FAILURE });
  }
}

// DELETE BOX RUN /////

function* watchDeleteBoxRun({ payload }) {
  const dataServer = yield call(async () => {
    return await boxRunAdminApi.deleteBoxRunApi(payload);
  });

  try {
    if (dataServer.success) {
      yield put({
        type: types.DELETE_BOX_RUN_ADMIN_SAGA_SUCCESS,
        payload: payload,
      });
    }
  } catch (error) {
    yield put({ type: types.DELETE_BOX_RUN_ADMIN_SAGA_FAILURE });
  }
}

// UPDATE BOX RUN

function* watchUpdateBoxRun({ payload }) {
  const dataServer = yield call(async () => {
    return await boxRunAdminApi.updateBoxRun(payload);
  });

  try {
    if (dataServer.success) {
      yield put({ type: types.UPDATE_BOX_RUN_ADMIN_SAGA_SUCCESS });
    }
  } catch (error) {
    yield put({ type: types.UPDATE_BOX_RUN_ADMIN_SAGA_FAILURE });
  }
}

function* boxRunSagaAdmin() {
  yield takeLatest(types.GET_ALL_BOX_RUN_ADMIN_SAGA, watchGetAllBoxRun);
  yield takeLatest(types.ADD_BOX_RUN_ADMIN_SAGA, watchAddBoxRun);
  yield takeLatest(types.DELETE_BOX_RUN_ADMIN_SAGA, watchDeleteBoxRun);
  yield takeLatest(types.UPDATE_BOX_RUN_ADMIN_SAGA, watchUpdateBoxRun);
}

export default boxRunSagaAdmin;
