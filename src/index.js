import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import App from "./App";

import { Provider } from "react-redux";
import { configureStore } from "webapp/_store";
import { PersistGate } from 'redux-persist/integration/react'

const {store, persistor} = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Router>
      <App />
    </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
