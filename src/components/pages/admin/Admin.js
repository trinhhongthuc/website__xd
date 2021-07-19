import { Route, Switch } from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";

const AdminHome = React.lazy(() => import("./AdminHome"));

const CertificateAdd = React.lazy(() => import("./certificate/CertificateAdd"));

const Certificate = React.lazy(() => import("./certificate/Certificate"));

const HiddenHeader = React.lazy(() => import("./hiddenHeader.js"));

const BoxRunUpdate = React.lazy(() => import("./boxrun/BoxRunUpdate"));

const BoxRunAdd = React.lazy(() => import("./boxrun/BoxRunAdd"));

const BoxRun = React.lazy(() => import("./boxrun/BoxRun"));

const PostUpdate = React.lazy(() => import("./post/PostUpdate"));

const PostDetail = React.lazy(() => import("./post/PostDetail"));

const PostAdd = React.lazy(() => import("./post/PostAdd"));

const Post = React.lazy(() => import("./post/Post"));

const ProjectUpdate = React.lazy(() => import("./project/ProjectUpdate"));

const ProjectDetail = React.lazy(() => import("./project/ProjectDetail"));

const ProjectAdd = React.lazy(() => import("./project/ProjectAdd"));

const Project = React.lazy(() => import("./project/Project"));

const SlideAdd = React.lazy(() => import("./slide/SlideAdd"));

const Slide = React.lazy(() => import("./slide/Slide"));

const NavTop = React.lazy(() => import("./NavTop"));

const NavLeft = React.lazy(() => import("./NavLeft"));

const CourseUpdate = React.lazy(() => import("./course/CourseUpdate"));

const CourseDetail = React.lazy(() => import("./course/CourseDetail"));

const CourseAdd = React.lazy(() => import("./course/CourseAdd"));
const Course = React.lazy(() => import("./course/Course"));

const Admin = () => {
  return (
    <>
      {/* <Suspense fallback={<h2>Loading...</h2>}> */}

      {/* <HiddenHeader /> */}
      <Switch></Switch>
      {/* </Suspense> */}
    </>
  );
};

export default Admin;
