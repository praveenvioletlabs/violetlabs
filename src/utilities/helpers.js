import { ROLES } from "Constants";
import DOMPurify from "dompurify";

const setNamespace = (namespace) => (constant) => {
  return `${namespace}/${constant}`;
};

const uniqKey = (key) => {
  return (key || "").replace(/[^a-zA-Z0-9]/g, "-");
};

const setApiError = (dispatch, callback, error) => {
  dispatch(
    callback("apiError", {
      error: error.response?.data?.error,
      status: error.response?.status,
    })
  );
  setTimeout(() => {
    dispatch(callback("apiError", null));
  });
};

// make the first letter caps
const capitalizeFirstChar = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

// make the every word's first letter caps
const capitalizeEveryFirstChar = (text) => {
  const words = text.split(" ");
  return words.map((word) => capitalizeFirstChar(word)).join(" ");
};

// make the code based on name
const makeCode = (text) => {
  return text.split(" ").join("").toLowerCase();
};

const sanitaizeDOM = (tag) => {
  var clean = DOMPurify.sanitize(tag);
  return clean;
};

const formStoreData = (props, namespaces = []) => {
  let store = {};
  let actions = {};

  namespaces.forEach((namespace) => {
    store = { ...store, ...props.store[`${namespace}Store`] };
    actions = { ...actions, ...props.actions[`${namespace}Actions`] };
  });

  return {
    store,
    actions,
    history: props.history,
    location: props.location,
  };
};

const isUserLoggedIn = (store) => {
  const { currentUser } = store;
  return currentUser && currentUser.roles.indexOf(ROLES.user) > -1;
};

const isAdminLoggedIn = (store) => {
  const { currentUser } = store;
  return currentUser && currentUser.roles.indexOf(ROLES.admin) > -1;
};

export {
  setNamespace,
  uniqKey,
  setApiError,
  capitalizeFirstChar,
  capitalizeEveryFirstChar,
  makeCode,
  sanitaizeDOM,
  formStoreData,
  isUserLoggedIn,
  isAdminLoggedIn,
};
