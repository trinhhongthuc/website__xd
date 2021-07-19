import NavLeft from "components/pages/admin/NavLeft";
import NavTop from "components/pages/admin/NavTop";
import React from "react";
import { Redirect, Route } from "react-router-dom";
const PrivateRouter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        sessionStorage.getItem("token") ? (
          <>
            <NavTop />
            <NavLeft />
            <Component {...props} />
          </>
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRouter;
