import express from "express";
import {
  getSlide,
  addSlide,
  deleteSlide,
  getBanner,
} from "../controller/slide/slide.js";
import {
  addCourse,
  deleteCourse,
  getCourse,
  getCourseDetailByIdHome,
  getCourseHome,
  getCourseHome2,
  getCoursePagination,
  getCourseRelate,
  getDataOneCourse,
  getOneCourse,
  updateCourse,
} from "../controller/course/course.js";
import {
  addProject,
  deleteProject,
  getAllProject,
  getProjectById,
  getProjectHome,
  updateProject,
} from "../controller/project/project.js";
import {
  addPost,
  deletePost,
  getAllPost,
  getFetchBack,
  getPostById,
  updatePost,
} from "../controller/post/post.js";
import {
  getBoxRunById,
  addBoxRun,
  deleteBoxRun,
  getAllBoxRun,
  updateBoxRun,
  getBoxRunHome,
} from "../controller/boxrun/boxrun.js";
import { getContact } from "../controller/contact/contact.js";
import {
  addRegisterCourse,
  deleteRegisterCourse,
  getAllRegisterCourse,
} from "../controller/registerCourse/registerCourse.js";
import {
  addCertificate,
  addCertificateAdmin,
  deleteCertificate,
  getAllCertificate,
  getAllCertificateByLimit,
  getCertificate,
  getCertificateById,
} from "../controller/certificate/certificate.js";
import {
  changePass,
  loginAdmin,
  refreshToken,
  registerAdmin,
} from "../controller/user/user.js";
import auth from "../auth/auth.js";

const router = express.Router();
/// slides
router.get("/slide", auth, getSlide);

router.post("/addSlide", auth, addSlide);

router.delete("/deleteSlide/:id", deleteSlide);

///Course /////////////////
router.get("/course", auth, getCourse);

router.post("/addCourse", auth, addCourse);

router.delete("/deleteCourse/:id", auth, deleteCourse);

router.put("/updateCourse", auth, updateCourse);

router.get("/getOneDataCourse/:id", auth, getOneCourse);

router.get("/getOneCourse/:id", auth, getDataOneCourse);

router.put("/courseUpdate");

////end course
///// project//////////////////////////////////////////

//get all project data
router.get("/getAllDataProjects", auth, getAllProject);

router.post("/addProject", auth, addProject);

router.delete("/deleteProject/:id", auth, deleteProject);

router.get("/getDetailProjectById/:id", auth, getProjectById);

router.put("/updateProject", auth, updateProject);

//////////////// END PROJECT /////////

//// START POST //////

router.get("/getAllPost", auth, getAllPost);

router.post("/addPost", auth, addPost);

router.get("/getPostByIdApi/:id", auth, getPostById);

router.put("/updatePostApi", auth, updatePost);

router.delete("/deletePostApi/:id", auth, deletePost);

/////////BOX RUN/////////

router.get("/getAllBoxRunApi", auth, getAllBoxRun);

router.post("/addBoxRunApi", auth, addBoxRun);

router.delete("/deleteBoxRunApi/:id", auth, deleteBoxRun);

router.get("/getBoxRunById/:id", auth, getBoxRunById);

router.put("/updateBoxRun", auth, updateBoxRun);

//////// GET API HOME

//BANNER

router.get("/banner", getBanner);

//COURSE

router.get("/course/:id", getCourseHome);

//GET COURSE BY ID DETAIL

router.get("/getCourseDetailByID/:id", getCourseDetailByIdHome);

// GET COURSE HASH TAG

router.post("/getCourseRelated", getCourseRelate);

// GET COUNTER

router.get("/getCounter", getBoxRunHome);

// GET DATA PROJECT

router.get("/getProject", getProjectHome);

//GET DATA FETCH BACK

router.get("/getFetchBack", getFetchBack);

router.get("/getCourseHome", getCourseHome2);

// GET  COURSE PAGINATION

router.get("/getCoursePagination", getCoursePagination);

//  CERTIFICATE

router.get("/getCertificate", getCertificate);

// POST CONTACT

router.post("/postContact", getContact);

// ADD REGISTER COURSE

router.post("/addInfoRegister", addRegisterCourse);

router.post("/addCertificates", addCertificate);

router.get("/getCertificateById/:id", getCertificateById);

router.get("/getAllCertificate", getAllCertificate);

router.post("/addCertificateAdmin", auth, addCertificateAdmin);

router.delete(`/deleteCertificateAdmin/:id`, auth, deleteCertificate);

router.get("/getAllRegisterCourse", auth, getAllRegisterCourse);

router.delete("/deleteRegisterCourse/:id", auth, deleteRegisterCourse);

// LOGIN ADMIN

router.post("/loginAdmin", loginAdmin);

router.post("/registerLoginAdmin", registerAdmin);

router.put("/changPassword", auth, changePass);

router.get("/refreshToken", refreshToken);

//////// Home

router.get("/getAllCertificateByLimit/:id", getAllCertificateByLimit);
export default router;
