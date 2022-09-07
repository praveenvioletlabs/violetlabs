import React from "react";
import { oneOfType, arrayOf, node, shape } from "prop-types";

import RefContext from "Utilities/refContext";

const RefProvider = (props) => {
  const { data, children } = props;

  const Context = RefContext;

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

RefProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  data: shape({
    store: shape({}).isRequired,
    actions: shape({}).isRequired,
    location: shape({}).isRequired,
    history: shape({}).isRequired,
  }).isRequired,
};

export default RefProvider;
