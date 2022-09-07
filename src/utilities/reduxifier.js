import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
  bindActionCreators,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from "redux-promise";
import cloneDeep from "lodash/cloneDeep";

// Ducks
import HomeDucks from "Ducks/home.ducks";

const history = createBrowserHistory();

// Generates root store and reducer
function generateBuildingBlocks() {
  let rootReducer = {};
  let rootStore = {};
  let creators = {};

  const ducks = {
    HomeDucks,
  };
  const namespaces = [];

  Object.keys(ducks).forEach(function iterateDucksBB(duck) {
    if (Object.prototype.hasOwnProperty.call(ducks, duck)) {
      const splitName = ducks[duck].namespace.split("/")[0];
      namespaces.push(splitName);
      rootReducer = Object.assign(rootReducer, {
        [splitName]: ducks[duck].reducer,
      });
      rootStore = Object.assign(rootStore, { [splitName]: ducks[duck].store });
      creators = Object.assign(creators, { [splitName]: ducks[duck].creators });
    }
  });

  // workflow will be the root store tree
  rootStore = cloneDeep(rootStore);

  return { rootStore, rootReducer, creators, namespaces };
}

// Add a router reducer and combine remaining reducers into one.
function fuseReducers(reducers, historyObj) {
  const combinedReducer = {
    router: connectRouter(historyObj),
    ...reducers,
  };

  return combineReducers(combinedReducer);
}

// Create a store tree
function createStoreTree(store, reducer, historyObj) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    reducer,
    store,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(historyObj),
        promiseMiddleware,
        thunkMiddleware
      )
    )
  );
}

// Bind react containers with redux
function bindReactRedux(containers) {
  let bindings = {};

  // create required state and action objects
  function loopOver(ns, condition, input) {
    if (condition === "state") {
      return ns.reduce(
        function (acc, item) {
          acc.store[`${item}Store`] = input[item];
          return acc;
        },
        { store: {} }
      );
    }

    // actions
    return ns.reduce(
      function (acc, item) {
        acc.actions[`${item}Actions`] = bindActionCreators(
          creators[item],
          input
        );
        return acc;
      },
      { actions: {} }
    );
  }

  Object.keys(containers).forEach(function (entry) {
    if (Object.prototype.hasOwnProperty.call(containers, entry)) {
      const mapStateToProps = (state) => {
        return loopOver(namespaces, "state", state);
      };

      const mapDispatchToProps = (dispatch) => {
        return loopOver(namespaces, "actions", dispatch);
      };

      bindings = Object.assign(bindings, {
        [entry]: connect(
          mapStateToProps,
          mapDispatchToProps
        )(containers[entry]),
      });
    }
  });

  return bindings;
}

let {
  rootReducer = {},
  rootStore = {},
  creators,
  namespaces,
} = generateBuildingBlocks();

rootReducer = fuseReducers(rootReducer, history);
rootStore = createStoreTree(rootStore, rootReducer, history);

export default {
  rootStore,
  history,
  bindReactRedux,
};
