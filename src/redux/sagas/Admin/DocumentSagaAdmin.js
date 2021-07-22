import DocumentApi from "API/DocumentApi";
import { call, put, takeLatest } from "redux-saga/effects";
import types from "redux/types";

function* watchGetAllDocument() {
  try {
    const data = yield call(async () => {
      return await DocumentApi.getAllDocument();
    });
    if (data && data.success) {
      yield put({ type: types.GET_ALL_DOCUMENT_SUCCESS, payload: data.data });
    }
  } catch (error) {
    yield put({
      type: types.GET_ALL_DOCUMENT_FAILURE,
      payload: error.response.data.message,
    });
  }
}

function* watchDeleteDocument(data) {
  try {
    const dataClients = yield call(async () => {
      return DocumentApi.deleteDocumentById(data.id);
    });
    console.log(dataClients);

    if (dataClients && dataClients.success) {
      yield put({
        type: types.DELETE_DOCUMENT_SUCCESS,
        payload: data.id,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.DELETE_DOCUMENT_FAILURE,
      message: error.response.message,
    });
  }
}

function* DocumentSagaAdmin() {
  yield takeLatest(types.GET_ALL_DOCUMENT, watchGetAllDocument);
  yield takeLatest(types.DELETE_DOCUMENT, watchDeleteDocument);
}

export default DocumentSagaAdmin;
