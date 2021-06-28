import { call, put, takeLatest } from "redux-saga/effects";
import courseApi from "../../../API/courseApi";
import types from "../../types";

function* watchGetDataCourse({ payload }) {
  const dataServer = yield call(async () => {
    return await courseApi.getCoursePaginations(payload);
  });

  try {
    if (dataServer.success) {
      yield put({
        type: types.GET_DATA_PAGINATION_SUCCESS,
        payload: dataServer,
      });
    }
  } catch (error) {
    yield put({ type: types.GET_DATA_PAGINATION_FAILURE });
  }
}

function* courseSaga() {
  yield takeLatest(types.GET_DATA_PAGINATION, watchGetDataCourse);
}

export default courseSaga;
