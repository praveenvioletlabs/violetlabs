import cloneDeep from "lodash/cloneDeep";
import { setNamespace } from "Utilities/helpers";
const namespace = "home";
const createAction = setNamespace(namespace);

// STORE
const initialState = {
  username: "sachin",
};

// ACTIONS

const ASSIGN_TO_HOME_STORE = createAction("ASSIGN_TO_HOME_STORE");
const RESET_HOME_STORE = createAction("RESET_HOME_STORE");

const assignToHomeStore = (type, payload) => ({
  type: ASSIGN_TO_HOME_STORE,
  meta: {
    type,
    payload,
  },
});

const resetHomeStore = () => (dispatch) => {
  dispatch({
    type: RESET_HOME_STORE,
    meta: {
      payload: null,
    },
  });
};

// METHODS

// Routing

// Reducers
const homeReducer = (state = initialState, action) => {
  const localState = cloneDeep(state);

  switch (action.type) {
    case ASSIGN_TO_HOME_STORE:
      localState[action.meta.type] = action.meta.payload;
      return { ...localState };
    case RESET_HOME_STORE:
      return initialState;
    default:
      return localState;
  }
};

export default {
  namespace,
  store: initialState,
  reducer: homeReducer,
  creators: {
    assignToHomeStore,
    resetHomeStore,
  },
};
