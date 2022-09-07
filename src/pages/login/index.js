import React, { useEffect } from "react";
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";
import { formStoreData } from "Utilities/helpers";
import { Page } from "./login.Style";
import LoginData from "./loginData";

const Login = (props) => {
  const propShape = formStoreData(props, ["login"]);

  useEffect(() => {
    return () => {
      propShape.actions.resetLoginStore();
    };
  }, []);

  return (
    <>
      <RefProvider data={propShape}>
        <RefErrorBoundary {...props}>
          <Page>
            <LoginData></LoginData>
          </Page>
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

Login.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

export default Login;
