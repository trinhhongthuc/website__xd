import { call, put, takeLatest } from "redux-saga/effects";
import types from "../../types";
import contactApi from "../../../API/contactApi.js";
function* watchContactForm({ payload }) {
  const dataServer = yield call(async () => {
    return await contactApi.postContact(payload);
  });

  try {
    if (dataServer.success) {
      yield put({ type: types.CONTACT_FROM_SUCCESS, payload: dataServer.data });
    }
  } catch (error) {
    yield put({ type: types.CONTACT_FROM_FAILURE });
  }
}

function* contactSaga() {
  yield takeLatest(types.CONTACT_FROM, watchContactForm);
}

export default contactSaga;
