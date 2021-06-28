import { call, put, takeLatest } from "redux-saga/effects";
import types from "../../types.js";
import slideAdminApi from "../../../API/Admin/slideAdminApi.js";

function* watchSlide() {
  try {
    const dataServer = yield call(async () => {
      return await slideAdminApi.getDataSlideAdmin();
    });

    yield put({
      type: types.SLIDE_ADMIN_SAGA_SUCCESS,
      payload: dataServer.data,
    });
  } catch (error) {
    yield put({ type: types.SLIDE_ADMIN_SAGA_FAILURE });
  }
}

function* watchDeleteSlide(data) {
  try {
    const dataServer = yield call(async () => {
      return await slideAdminApi.deleteDataSlideAdmin(data.payload);
    });

    if (dataServer.success) {
      yield put({
        type: types.SLIDE_ADMIN_DELETE_SAGA_SUCCESS,
        payload: data.payload,
      });
    }
  } catch (error) {
    console.error(error);
    yield put({ type: types.SLIDE_ADMIN_DELETE_SAGA_FAILURE });
  }
}

function* watchAddSlide(data) {
  try {
    const dataServer = yield call(async () => {
      return await slideAdminApi.addDataSlideAdmin(data.payload);
    });

    yield put({
      type: types.SLIDE_ADMIN_ADD_SAGA_SUCCESS,
      payload: dataServer,
    });
  } catch (error) {
    console.error(error);
    yield put({ type: types.SLIDE_ADMIN_ADD_SAGA_FAILURE });
  }
}

function* slideSagaAdmin() {
  yield takeLatest(types.SLIDE_ADMIN_SAGA, watchSlide);
  yield takeLatest(types.SLIDE_ADMIN_DELETE_SAGA, watchDeleteSlide);
  yield takeLatest(types.SLIDE_ADMIN_ADD_SAGA, watchAddSlide);
}

export default slideSagaAdmin;
