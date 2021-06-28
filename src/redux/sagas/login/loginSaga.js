import LoginApi from "API/LoginApi";
import { call, put, takeLatest } from "redux-saga/effects";
import types from "redux/types";

function* watchLogin({ payload }) {
  try {
    const dataServer = yield call(async () => {
      return await LoginApi.loginApi(payload);
    });

    if (dataServer.success) {
      yield put({ type: types.LOGIN_SUCCESS, payload: dataServer.data });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.LOGIN_FAILURE,
      payload: error.response.data.message,
    });
  }
}

function* watchChangePass({ payload }) {
  try {
    const data = yield call(async () => {
      return await LoginApi.changPassword(payload);
    });
    if (data.success) {
      yield put({ type: types.CHANGE_PASSWORD_SUCCESS, payload: data });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.CHANGE_PASSWORD_FAILURE,
      payload: error.response.data.message,
    });
  }
}

function* watchRefreshToken() {
  const refreshToken = yield call(async () => {
    return await LoginApi.refreshToken();
  });

  try {
    yield put({
      type: types.REFRESH_TOKEN_SUCCESS,
      payload: refreshToken.data,
    });
  } catch (error) {
    console.log(error);
    yield put({ type: types.REFRESH_TOKEN_FAILURE });
  }
}

function* loginSaga() {
  yield takeLatest(types.LOGIN, watchLogin);
  yield takeLatest(types.CHANGE_PASSWORD, watchChangePass);
  yield takeLatest(types.REFRESH_TOKEN, watchRefreshToken);
}

export default loginSaga;
