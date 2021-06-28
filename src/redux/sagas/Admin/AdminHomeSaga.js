import AdminHomeApi from "API/Admin/AdminHome";
import { call, put, takeLatest } from "redux-saga/effects";
import types from "redux/types";

function* watchDeleteRegisterCourse({ payload }) {
  const data = yield call(async () => {
    return await AdminHomeApi.deleteRegisterCourse(payload);
  });

  try {
    if (data.success) {
      yield put({
        type: types.REGISTER_COURSE_DELETE_SUCCESS,
        payload: payload,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: types.REGISTER_COURSE_DELETE_FAILURE });
  }
}

function* watchGetAllRegisterCourse() {
  const data = yield call(async () => {
    return await AdminHomeApi.getAllRegisterCourse();
  });

  try {
    if (data.success) {
      yield put({
        type: types.GET_ALL_REGISTER_COURSE_SUCCESS,
        payload: data.data,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: types.GET_ALL_REGISTER_COURSE_FAILURE });
  }
}

function* AdminHomeSaga() {
  yield takeLatest(types.REGISTER_COURSE_DELETE, watchDeleteRegisterCourse);
  yield takeLatest(types.GET_ALL_REGISTER_COURSE, watchGetAllRegisterCourse);
}

export default AdminHomeSaga;
