import React from "react";
import { Dashboard } from "./pages/dashboard/dashboard";
import { Provider } from "react-redux";
import store from "./redux";
import "antd/dist/antd.css";

export default function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}
