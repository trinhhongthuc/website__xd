import RecruitApi from "API/RecruitApi";
import { call, put, takeLatest } from "redux-saga/effects";
import types from "redux/types";

function* watchRecruit() {
  try {
    const data = yield call(async () => {
      return await RecruitApi.getAllRecruitAdmin();
    });

    console.log(data);

    if (data && data.success) {
      yield put({ type: types.GET_ALL_RECRUIT_SUCCESS, payload: data.data });
    } else {
      yield put({ type: types.GET_ALL_RECRUIT_FAILURE, payload: data.message });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_ALL_RECRUIT_FAILURE,
      payload: error.response.message,
    });
  }
}

function* watchRecruitDelete(data) {
  try {
    console.log(data);
    const result = yield call(async () => {
      return await RecruitApi.deleteRecruit(data.payload);
    });

    if (result && result.success) {
      yield put({ type: types.DELETE_RECRUIT_SUCCESS, payload: data.payload });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.DELETE_RECRUIT_SUCCESS,
      payload: error.response.message,
    });
  }
}

function* RecruitSagaAdmin() {
  yield takeLatest(types.GET_ALL_RECRUIT, watchRecruit);
  yield takeLatest(types.DELETE_RECRUIT, watchRecruitDelete);
}

export default RecruitSagaAdmin;
