import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PraviteRouter from "./PraviteRouter.js";
import { Ring } from "react-awesome-spinners";
import ScrollTop from "components/layouts/scrollToTop/ScrollTop.js";
import HeaderMobi from "components/layouts/header/HeaderMobi.js";

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

const Admin = React.lazy(() => import("./components/pages/admin/Admin.js"));

const Header = React.lazy(() =>
  import("./components/layouts/header/Header.js")
);

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
          <Header />
          <HeaderMobi />
          <Switch>
            {/* DISPLAY */}
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />

            <Route exact path="/chungchi" component={Certificate} />

            <Route exact path="/dangkykhoahoc" component={RegisterCourse} />

            <Route exact path="/course" component={Course} />

            <Route exact path="/course/detail/:id" component={CourseDetail} />

            {/* ADMIN */}
            <PraviteRouter path="/admin" component={Admin} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>

        {scrollTops ? <ScrollTop /> : ""}
      </Suspense>
    </>
  );
}

export default App;
