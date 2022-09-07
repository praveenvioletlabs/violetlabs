import cookie from "react-cookies";

const authDetails = {
  "Access-token": cookie.load("access_token"),
};

export default authDetails;
