import React from "react";
import { Provider } from "react-redux";
import Reduxifier from "Utilities/reduxifier";
import Application from "Pages/application";

import "antd/dist/antd.css";
import "./Root.css";

const Root = () => {
  return (
    <Provider store={Reduxifier.rootStore}>
      <Application />
    </Provider>
  );
};

export default Root;
