import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/layouts/header/Header.js";
import Certificate from "./components/pages/certificate/Certificate.js";
import Courses from "./components/pages/course/Courses.js";
import CourseDetail from "./components/pages/courseDetail/CourseDetail.js";
import Dynamo from "./components/pages/dynamo/Dynamo.js";
import Home from "./components/pages/home/Home.js";
import RegisterCourse from "./components/pages/registerCourse/RegisterCourse.js";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          {/* <Route exact path="/khoahoc" component={Home} /> */}
          <Route exact path="/dynamo" component={Dynamo} />
          <Route exact path="/chungchi" component={Certificate} />
          <Route exact path="/dangkykhoahoc" component={RegisterCourse} />
          <Route exact path="/detail" component={CourseDetail} />
          <Route exact path="/khoahoc" component={Courses} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
