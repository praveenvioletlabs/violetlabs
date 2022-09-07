const getUrl = function (url, params) {
  if (url && params) {
    const urlParamsArray = Object.keys(params);
    urlParamsArray.forEach((q) => {
      if (url.indexOf(q) > -1) {
        url = url.replace(q, params[q]);
      }
    });
  }
  return url;
};

module.exports = {
  URL_HOME: "/home",
  routeTo: (url, history, params) => {
    history.push(getUrl(url, params));
  },
};
