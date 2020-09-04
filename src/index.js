import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store from "./redux/store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
