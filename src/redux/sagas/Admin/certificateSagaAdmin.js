import { call, put, takeLatest } from "redux-saga/effects";
import types from "../../types";
import certificateAdminApi from "../../../API/Admin/certificateAdminApi";

function* watchGetCertificateAll() {
  const dataServer = yield call(async () => {
    return await certificateAdminApi.getAllCertificate();
  });

  try {
    if (dataServer.success) {
      yield put({
        type: types.CERTIFICATE__ADMIN_SUCCESS,
        payload: dataServer.data,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: types.CERTIFICATE__ADMIN_FAILURE });
  }
}

function* watchAddCertificate({ payload }) {
  const dataServer = yield call(async () => {
    return await certificateAdminApi.addCertificateAdmin(payload);
  });

  try {
    console.log(dataServer);
    if (dataServer.success) {
      yield put({
        type: types.CERTIFICATE__ADMIN_ADD_SUCCESS,
        payload: dataServer.data,
      });
    }
  } catch (error) {
    yield put({
      type: types.CERTIFICATE__ADMIN_ADD_FAILURE,
      payload: dataServer.data,
    });
  }
}

function* watchDeleteCertificate({ payload }) {
  const dataServer = yield call(async () => {
    return await certificateAdminApi.deleteCertificateAdmin(payload);
  });

  try {
    if (dataServer.success) {
      yield put({
        type: types.CERTIFICATE__ADMIN_DELETE_SUCCESS,
        payload: dataServer.data._id,
      });
    }
  } catch (error) {
    yield put({ type: types.CERTIFICATE__ADMIN_DELETE_FAILURE });
  }
}

function* certificateSagaAdmin() {
  yield takeLatest(types.CERTIFICATE__ADMIN, watchGetCertificateAll);
  yield takeLatest(types.CERTIFICATE__ADMIN_ADD, watchAddCertificate);

  yield takeLatest(types.CERTIFICATE__ADMIN_DELETE, watchDeleteCertificate);
}

export default certificateSagaAdmin;
