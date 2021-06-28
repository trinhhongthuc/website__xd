import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
///css
import "./components/sass/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import ScrollToTopOnMount from "./ScrollToTopOnMount";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ScrollToTopOnMount />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
