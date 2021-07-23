import { combineReducers } from "redux";

import slideReducerAdmin from "./Admin/slideReducerAdmin";
import courseReducerAdmin from "./Admin/courseReducerAdmin";
import projectReducerAdmin from "./Admin/projectReducerAdmin";
import postReducerAdmin from "./Admin/postReducerAdmin";
import boxRunReducerAdmin from "./Admin/boxRunReducerAdmin";
import courseReducer from "./course/courseReducer";
import contactReducer from "./contact/contactReducer";
import registerCourseReducer from "./registerCourse/registerCourseReducer";
import certificateReducer from "./certificate/certificateReducer.js";
import certificateReducerAdmin from "./Admin/certificateReducerAdmin.js";
import AdminHomeReducer from "./Admin/AdminHomeReducer";
import loginReducer from "./login/loginReducer";
import DocumentReducerAdmin from "./Admin/DocumentReducerAdmin";
import RecruitReducerAdmin from "./Admin/RecruitReducerAdmin";
const rootReducer = combineReducers({
  slideReducerAdmin: slideReducerAdmin,
  courseReducerAdmin: courseReducerAdmin,
  projectReducerAdmin: projectReducerAdmin,
  postReducerAdmin: postReducerAdmin,
  boxRunReducerAdmin: boxRunReducerAdmin,
  courseReducer: courseReducer,
  contactReducer: contactReducer,
  registerCourseReducer: registerCourseReducer,
  certificateReducer: certificateReducer,
  certificateReducerAdmin: certificateReducerAdmin,
  AdminHomeReducer: AdminHomeReducer,
  loginReducer: loginReducer,
  DocumentReducerAdmin: DocumentReducerAdmin,
  RecruitReducerAdmin: RecruitReducerAdmin,
});

export default rootReducer;
