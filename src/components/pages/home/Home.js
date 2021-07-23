import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Counter from "./Counter";
import Course from "./Course";
import FeedBack from "./FeedBack";
import Introduce from "./Introduce";
import Project from "./Project";
import { useSelector } from "react-redux";
import { Ring } from "react-awesome-spinners";
import FormAnimation from "../formAnimation/FormAnimation";

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  }, []);

  const [hiddenNotify, setHiddenNotify] = useState(false);
  const { isLoading, notifycation } = useSelector(
    (state) => state.contactReducer
  );
  const style = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  useEffect(() => {
    if (notifycation) {
      setHiddenNotify(true);
    }
    setTimeout(() => {
      setHiddenNotify(false);
    }, 3000);
  }, [notifycation]);

  return (
    <>
      {isLoading ? (
        <div style={style}>
          <Ring />
        </div>
      ) : (
        <div className="home">
          <Banner />
          <Introduce />
          <Course />
          <Counter />
          <Project />
          <FeedBack />
          {hiddenNotify ? (
            <FormAnimation
              setHiddenNotify={setHiddenNotify}
              title="Thông tin liên hệ đã gửi thành công"
            />
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};

export default Home;
