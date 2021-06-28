import React from "react";
import { Route, Switch } from "react-router-dom";

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
      <NavTop />
      <NavLeft />
      <HiddenHeader />
      <Switch>
        <Route exact path="/admin" component={AdminHome} />
        <Route exact path="/admin/slide" component={Slide} />
        <Route exact path="/admin/slide/add" component={SlideAdd} />
        <Route exact path="/admin/course" component={Course} />
        <Route exact path="/admin/course/add" component={CourseAdd} />
        <Route exact path="/admin/course/detail/:id" component={CourseDetail} />
        <Route exact path="/admin/course/update/:id" component={CourseUpdate} />
        <Route exact path="/admin/project" component={Project} />
        <Route exact path="/admin/project/add" component={ProjectAdd} />
        <Route
          exact
          path="/admin/project/detail/:id"
          component={ProjectDetail}
        />
        <Route
          exact
          path="/admin/project/update/:id"
          component={ProjectUpdate}
        />
        <Route exact path="/admin/post/" component={Post} />
        <Route exact path="/admin/post/add" component={PostAdd} />

        <Route exact path="/admin/post/detail" component={PostDetail} />
        <Route exact path="/admin/post/detail/:id" component={PostDetail} />
        <Route exact path="/admin/post/update" component={PostUpdate} />
        <Route exact path="/admin/post/update/:id" component={PostUpdate} />
        <Route exact path="/admin/boxrun" component={BoxRun} />
        <Route exact path="/admin/boxrun/add" component={BoxRunAdd} />
        <Route exact path="/admin/boxrun/update" component={BoxRunUpdate} />
        <Route exact path="/admin/boxrun/update/:id" component={BoxRunUpdate} />

        <Route exact path="/admin/certificate" component={Certificate} />
        <Route exact path="/admin/certificate/add" component={CertificateAdd} />
      </Switch>
      {/* </Suspense> */}
    </>
  );
};

export default Admin;
