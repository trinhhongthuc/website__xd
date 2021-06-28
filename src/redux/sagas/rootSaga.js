import { all } from "redux-saga/effects";
import slideSagaAdmin from "./Admin/slideSagaAdmin";
import courseSagaAdmin from "./Admin/courseSagaAdmin";
import projectSagaAdmin from "./Admin/projectSagaAdmin";
import postSagaAdmin from "./Admin/postSagaAdmin";
import boxRunSagaAdmin from "./Admin/boxRunSagaAdmin";
import courseSaga from "./courseSaga/courseSaga";
import contactSaga from "./contactSaga/contactSaga";
import registerCourseSaga from "./registerCourse/registerCourseSaga";
import certificateSaga from "./certificateSaga/certificateSaga.js";
import certificateSagaAdmin from "./Admin/certificateSagaAdmin";
import AdminHomeSaga from "./Admin/AdminHomeSaga";
import loginSaga from "./login/loginSaga";

function* rootSaga() {
  yield all([
    slideSagaAdmin(),
    courseSagaAdmin(),
    projectSagaAdmin(),
    postSagaAdmin(),
    boxRunSagaAdmin(),
    courseSaga(),
    contactSaga(),
    registerCourseSaga(),
    certificateSaga(),
    certificateSagaAdmin(),
    AdminHomeSaga(),
    loginSaga(),
  ]);
}

export default rootSaga;
