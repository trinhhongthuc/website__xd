import Header from "components/layouts/header/Header";
import HeaderMobi from "components/layouts/header/HeaderMobi";
import Contact from "components/pages/home/Contact";
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

          <Contact />
        </>
      )}
    />
  );
};

export default PublicRouter;
