import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Ring } from "react-awesome-spinners";
import ScrollTop from "components/layouts/scrollToTop/ScrollTop.js";
import PublicRouter from "router/PublicRouter.js";
import PrivateRouter from "router/PrivateRouter.js";
import AdminHome from "components/pages/admin/AdminHome.js";
import Slide from "components/pages/admin/slide/Slide.js";
import SlideAdd from "components/pages/admin/slide/SlideAdd.js";
import CourseAdmin from "components/pages/admin/course/Course.js";
import CourseAdd from "components/pages/admin/course/CourseAdd.js";
import CourseDetailAdmin from "components/pages/admin/course/CourseDetail.js";
import CourseUpdate from "components/pages/admin/course/CourseUpdate.js";
import Project from "components/pages/admin/project/Project.js";
import ProjectAdd from "components/pages/admin/project/ProjectAdd.js";
import ProjectDetail from "components/pages/admin/project/ProjectDetail.js";
import ProjectUpdate from "components/pages/admin/project/ProjectUpdate.js";
import Post from "components/pages/admin/post/Post.js";
import PostAdd from "components/pages/admin/post/PostAdd.js";
import PostDetail from "components/pages/admin/post/PostDetail.js";
import PostUpdate from "components/pages/admin/post/PostUpdate.js";
import BoxRun from "components/pages/admin/boxrun/BoxRun.js";
import BoxRunAdd from "components/pages/admin/boxrun/BoxRunAdd.js";
import BoxRunUpdate from "components/pages/admin/boxrun/BoxRunUpdate.js";
import CertificateAdd from "components/pages/admin/certificate/CertificateAdd.js";
import CertificateAdmin from "components/pages/admin/certificate/Certificate.js";
import Document from "components/pages/document/Document.jsx";
import DocumentAdmin from "components/pages/admin/documentAdmin/DocumentAdmin.js";
import DocumentAdminAdd from "components/pages/admin/documentAdmin/DocumentAdminAdd.js";
import DocumentAdminUpdate from "components/pages/admin/documentAdmin/DocumentAdminUpdate.js";
import DocumentAdminDetail from "components/pages/admin/documentAdmin/DocumentAdminDetail.js";
import Recruit from "components/pages/recruit/Recruit.js";

const Home = React.lazy(() => import("./components/pages/home/Home.js"));

const Certificate = React.lazy(() =>
  import("./components/pages/certificate/Certificate.js")
);
const RegisterCourse = React.lazy(() =>
  import("./components/pages/registerCourse/RegisterCourse.js")
);

const Course = React.lazy(() => import("./components/pages/course/Courses.js"));

const CourseDetail = React.lazy(() =>
  import("./components/pages/course/CourseDetail.js")
);

// const Admin = React.lazy(() => import("./components/pages/admin/Admin.js"));

const Login = React.lazy(() =>
  import("./components/pages/admin/login/Login.js")
);

function App() {
  const [scrollTops, setScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    if (scroll > 80) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  });

  const style = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <Suspense
        fallback={
          <div style={style}>
            <Ring />
          </div>
        }
      >
        <Router>
          <Switch>
            <PublicRouter exact path="/" component={Home} />
            <PublicRouter exact path="/home" component={Home} />
            <PublicRouter exact path="/chungchi" component={Certificate} />
            <PublicRouter
              exact
              path="/dangkykhoahoc"
              component={RegisterCourse}
            />
            <PublicRouter exact path="/course" component={Course} />
            <PublicRouter
              exact
              path="/course/detail/:id"
              component={CourseDetail}
            />

            <PublicRouter exact path="/tailieu" component={Document} />
            <PublicRouter exact path="/tuyendung" component={Recruit} />

            {/* router Login */}
            <Route exact path="/login" component={Login} />
            {/* Router admin */}
            <PrivateRouter exact path="/admin" component={AdminHome} />
            <PrivateRouter exact path="/admin" component={AdminHome} />
            <PrivateRouter exact path="/admin/slide" component={Slide} />
            <PrivateRouter exact path="/admin/slide/add" component={SlideAdd} />
            <PrivateRouter exact path="/admin/course" component={CourseAdmin} />

            <PrivateRouter
              exact
              path="/admin/course/add"
              component={CourseAdd}
            />
            <PrivateRouter
              exact
              path="/admin/course/detail/:id"
              component={CourseDetailAdmin}
            />
            <PrivateRouter
              exact
              path="/admin/course/update/:id"
              component={CourseUpdate}
            />
            <PrivateRouter exact path="/admin/project" component={Project} />
            <PrivateRouter
              exact
              path="/admin/project/add"
              component={ProjectAdd}
            />

            <PrivateRouter
              exact
              path="/admin/project/detail/:id"
              component={ProjectDetail}
            />
            <PrivateRouter
              exact
              path="/admin/project/update/:id"
              component={ProjectUpdate}
            />
            <PrivateRouter exact path="/admin/post/" component={Post} />
            <PrivateRouter exact path="/admin/post/add" component={PostAdd} />

            <PrivateRouter
              exact
              path="/admin/post/detail"
              component={PostDetail}
            />
            <PrivateRouter
              exact
              path="/admin/post/detail/:id"
              component={PostDetail}
            />
            <PrivateRouter
              exact
              path="/admin/post/update"
              component={PostUpdate}
            />
            <PrivateRouter
              exact
              path="/admin/post/update/:id"
              component={PostUpdate}
            />
            <PrivateRouter exact path="/admin/boxrun" component={BoxRun} />

            <PrivateRouter
              exact
              path="/admin/boxrun/add"
              component={BoxRunAdd}
            />
            <PrivateRouter
              exact
              path="/admin/boxrun/update"
              component={BoxRunUpdate}
            />
            <PrivateRouter
              exact
              path="/admin/boxrun/update/:id"
              component={BoxRunUpdate}
            />

            <PrivateRouter
              exact
              path="/admin/certificate"
              component={CertificateAdmin}
            />
            <PrivateRouter
              exact
              path="/admin/certificate/add"
              component={CertificateAdd}
            />

            <PrivateRouter
              exact
              path="/admin/tailieu"
              component={DocumentAdmin}
            />

            <PrivateRouter
              exact
              path="/admin/tailieu/add"
              component={DocumentAdminAdd}
            />

            <PrivateRouter
              exact
              path="/admin/tailieu/update/:id"
              component={DocumentAdminUpdate}
            />
            <PrivateRouter
              exact
              path="/admin/tailieu/detail/:id"
              component={DocumentAdminDetail}
            />
          </Switch>
        </Router>

        {scrollTops ? <ScrollTop /> : ""}
      </Suspense>
    </>
  );
}

export default App;
