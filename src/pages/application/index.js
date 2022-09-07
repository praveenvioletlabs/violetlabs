import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Reduxifier from "Utilities/reduxifier";
import Registry from "Utilities/registry";
import { fetchRoutes } from "Config/routes";

const Containers = Reduxifier.bindReactRedux(Registry);
const Routes = fetchRoutes(Containers);

const Application = () => {
  const renderContent = () => {
    return <Routes />;
  };

  return (
    <Router history={Reduxifier.history}>
      <div className="fullHeight">
        <Route render={(data) => renderContent(data)} />
      </div>
    </Router>
  );
};

export default Application;
