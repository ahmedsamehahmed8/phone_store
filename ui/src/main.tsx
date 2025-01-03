import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import Mainlayout from "./layout/Mainlayout";

import Router from "./Router/Router";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>
);
