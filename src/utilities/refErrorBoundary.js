import React, { useState, useEffect } from "react";
import { any, shape, bool } from "prop-types";
import { ErrorBoundary } from "react-error-boundary";
import { Result, Button } from "antd";
import { Container } from "CommonStyles";

const RefErrorBoundary = (props) => {
  const { children, history } = props;

  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(children);
  }, []);

  // eslint-disable-next-line no-unused-vars
  const errorFallbackComponent = ({ error, resetErrorBoundary }) => {
    return (
      <Container>
        <Result
          status="warning"
          title={"Oops, Something went wrong!"}
          extra={
            <Button type="primary" onClick={resetErrorBoundary}>
              Refresh
            </Button>
          }
        />
      </Container>
    );
  };

  return (
    <ErrorBoundary
      FallbackComponent={errorFallbackComponent}
      onReset={() => history.go(0)}
    >
      {content}
    </ErrorBoundary>
  );
};

RefErrorBoundary.propTypes = {
  children: any.isRequired,
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  history: shape({}),
  allowForUser: bool,
  allowForAdmin: bool,
};

export default RefErrorBoundary;
