import React, { useContext, useEffect, useState } from "react";
import {
  Btn1,
  Divadd,
  Maind,
  Header,
  FirstDiv,
  Para,
  Divd,
  Inpt,
  InputEmail,
  InputPassword,
  RememberDiv,
  Labl,
  Divr,
  Pophead,
  Addbody,
  Btn2,
  Main,
  Submain,
  Img,
  Img1,
} from "./login.Style";
import RefContext from "Utilities/refContext";
import { RiCloseCircleLine } from "react-icons/ri";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

// import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
// import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 400,
  // overflowY: "scroll",
  bgcolor: "background.paper",
  borderRadius: 10,
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  p: 4,
};

const LoginData = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const context = useContext(RefContext);
  const {
    store: {},
    actions: { signIn, forgotPassword },
  } = context;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);

  const body = {
    email: email,
    password: password,
  };

  const login = () => {
    signIn(body);
  };
  const body1 = {
    email: email,
    newPassword: newPassword,
    confirmPassword: confirmPassword,
  };

  const fPassword = () => {
    forgotPassword(body1);
    setOpen(false);
  };

  let history = useHistory();
  const storage = () => {
    if (props.token != "") {
      // setCookie("token", resp.data.data.token);
      history.push("/dashboard");
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    console.log("welcome to Login");
  }, []);

  // const StyleRegisterContainer = styled.div`
  //   width: 1440px;

  //   @media (min-width: 0px) and (max-width: 1440px) {
  //     display: "none";
  //   }
  // `;

  const renderContent = () => {
    return (
      <>
        {/* <StyleRegisterContainer> */}
        <Maind>
          <FirstDiv>
            <div
              style={{
                width: "150px",
                height: "50px",
                margin: "5px",
                backgroundColor: "white",
                borderRadius: "5%",
              }}
            >
              <Img src="https://images.squarespace-cdn.com/content/v1/5ae73f0196d4552a4fb57ef1/7ad335e6-30c9-4282-b2f1-4d546d77bffb/ECOSMOS_750px.png" />
            </div>
            <Para>
              <p>
                {" "}
                Make it simple and save your time by digitalizing your
                application tracking process with us.
              </p>
            </Para>
            <div
              style={{
                width: "250px",
                height: "250px",
                marginLeft: "100px",
                marginTop: "10px",
                borderRadius: "15px",
              }}
            >
              <Img1 src="https://i.ibb.co/q9cjndK/sp-img-19.png" />
            </div>
          </FirstDiv>
          <Divd>
            <Header> Sign In</Header>
            <div>
              <label htmlFor="email">Email: </label>&nbsp;
              <InputEmail
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br></br>
            <div>
              <label htmlFor="password"> Password: </label>
              <InputPassword
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <RememberDiv>
              <input type="checkbox" name="remember" id="remember" />
              Remember Me
            </RememberDiv>
            <Labl>
              <Link onClick={handleOpen} style={{ color: "blue" }}>
                Forgot Password ?
              </Link>
              <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <RiCloseCircleLine onClick={handleClose}></RiCloseCircleLine>
                  <Divadd>
                    <Pophead style={{ color: "blue" }}>
                      <b>Forgot Password</b>{" "}
                    </Pophead>{" "}
                    <br />
                    <Addbody>
                      <div>
                        <label htmlFor="email">Email:</label>
                        <br></br>
                        <Inpt
                          type="text"
                          name="email"
                          onChange={(e) => setEmail(e.target?.value)}
                        />
                      </div>
                      <br></br>
                      <div>
                        <label htmlFor="npassword">New Password:</label>
                        <br></br>
                        <Inpt
                          type="password"
                          name="npassword"
                          onChange={(e) => setNewPassword(e.target?.value)}
                        />
                      </div>
                      <br></br>
                      <div>
                        <label htmlFor="cpassword">Confirm Password:</label>
                        <br></br>
                        <Inpt
                          type="text"
                          name="cpassword"
                          onChange={(e) => setConfirmPassword(e.target?.value)}
                        />
                      </div>
                      <br></br>
                      <Btn2 onClick={fPassword}> Submit</Btn2>
                    </Addbody>
                  </Divadd>
                </Box>
              </Modal>
            </Labl>
            <br></br>

            <Btn1
              onClick={() => {
                [login(), storage()];
              }}
            >
              Submit
            </Btn1>
            <Divr>
              Don't Have a Account yet?
              <Link to="/signup" style={{ color: "blue" }}>
                {" "}
                Create Account{" "}
              </Link>
            </Divr>
          </Divd>
        </Maind>
        {/* </StyleRegisterContainer> */}
      </>
    );
  };
  return <>{renderContent()}</>;
};

export default LoginData;
