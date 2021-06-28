import { call, put, takeLatest } from "redux-saga/effects";
import registerCourseApi from "../../../API/registerCourseApi";
import types from "../../types";

function* watchRegisterCourse({ payload }) {
  const dataServer = yield call(async () => {
    return await registerCourseApi.addInfoRegister(payload);
  });

  try {
    if (dataServer.success) {
      yield put({
        type: types.REGISTER_COURSE_SUCCESS,
        payload: dataServer.data,
      });
    }
  } catch (error) {
    yield put({
      type: types.REGISTER_COURSE_FAILURE,
    });
  }
}

function* registerCourseSaga() {
  yield takeLatest(types.REGISTER_COURSE, watchRegisterCourse);
}

export default registerCourseSaga;
