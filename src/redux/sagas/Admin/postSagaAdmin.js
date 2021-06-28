import { call, put, takeLatest } from "redux-saga/effects";
import postAdminApi from "../../../API/Admin/postAdminApi";

import types from "../../types";

// GET ALL POST //////
function* watchGetAllPost() {
  const dataServer = yield call(async () => {
    return await postAdminApi.getAllPostApi();
  });

  try {
    if (dataServer.success) {
      yield put({
        type: types.GET_ALL_POST_ADMIN_SAGA_SUCCESS,
        payload: dataServer.data,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: types.GET_ALL_POST_ADMIN_SAGA_FAILURE });
  }
}

// ADD POST ////////

function* watchAddPost({ payload }) {
  const dataServer = yield call(async () => {
    return await postAdminApi.addPostApi(payload);
  });

  console.log(dataServer);

  try {
    if (dataServer.success) {
    }
    yield put({
      type: types.ADD_POST_ADMIN_SAGA_SUCCESS,
      payload: dataServer.data,
    });
  } catch (error) {
    console.log(error);

    yield put({ type: types.ADD_POST_ADMIN_SAGA_FAILURE });
  }
}

//UPDATE POST //////

function* watchUpdatePost({ payload }) {
  const dataServer = yield call(async () => {
    return await postAdminApi.updatePostApi(payload);
  });

  try {
    if (dataServer.success) {
      yield put({ type: types.UPDATE_POST_ADMIN_SAGA_SUCCESS });
    }
  } catch (error) {
    yield put({ type: types.UPDATE_POST_ADMIN_SAGA_FAILURE });
  }
}
// DELETE POST //////////////////////////////////

function* watchDeletePost({ payload }) {
  const dataServer = yield call(async () => {
    return await postAdminApi.deletePostApi(payload);
  });
  try {
    if (dataServer.success) {
      yield put({
        type: types.DELETE_POST_ADMIN_SAGA_SUCCESS,
        payload: payload,
      });
    }
  } catch (error) {
    yield put({ type: types.DELETE_POST_ADMIN_SAGA_FAILURE });
  }
}

function* postSagaAdmin() {
  yield takeLatest(types.GET_ALL_POST_ADMIN_SAGA, watchGetAllPost);
  yield takeLatest(types.ADD_POST_ADMIN_SAGA, watchAddPost);
  yield takeLatest(types.UPDATE_POST_ADMIN_SAGA, watchUpdatePost);
  yield takeLatest(types.DELETE_POST_ADMIN_SAGA, watchDeletePost);
}

export default postSagaAdmin;
