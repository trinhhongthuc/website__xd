import Header from "components/layouts/header/Header";
import HeaderMobi from "components/layouts/header/HeaderMobi";
import React from "react";
import { Route } from "react-router-dom";
const PublicRouter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Header />
          <HeaderMobi />
          <Component {...props} />
        </>
      )}
    />
  );
};

export default PublicRouter;
