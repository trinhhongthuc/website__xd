import { call, put, takeLatest } from "redux-saga/effects";
import certificateApi from "../../../API/certificateApi";
import types from "../../types";

function* watchGetCertificate({ payload }) {
  const dataServer = yield call(async () => {
    return await certificateApi.getCertificate(payload);
  });

  try {
    if (dataServer.success && dataServer.data.length > 0) {
      yield put({ type: types.CERTIFICATE_SUCCESS, payload: dataServer.data });
    } else if (dataServer.success && dataServer.data.length <= 0) {
      yield put({
        type: types.CERTIFICATE_SUCCESS_NOTIFY,
        payload: dataServer.data,
      });
    }
  } catch (error) {
    yield put({ type: types.CERTIFICATE_FAILURE });
  }
}

function* certificateSaga() {
  yield takeLatest(types.CERTIFICATE, watchGetCertificate);
}

export default certificateSaga;
