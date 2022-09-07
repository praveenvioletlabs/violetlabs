import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Att, Btn } from "./home.style";

const Main = (props) => {
  return (
    <div style={{ background: "smokewhite" }}>
      <nav
        style={{ marginLeft: "22%", width: "60%" }}
        className="navbar navbar-expand-lg navbar-light"
      >
        <Att
          className="navbar-brand"
          style={{
            fontFamily: "Fresh Lychee",
            fontSize: "xxx-large",
            color: "#4A235A",
          }}
          href="#"
        >
          Violet
        </Att>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          style={{ marginLeft: "30%", justifyContent: "space-evenly" }}
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a
                style={{
                  fontWeight: "bold",
                  fontSize: "large",
                  fontFamily: "Myriad Pro",
                }}
                className="nav-link"
                href="#"
              >
                Benefits
              </a>
            </li>
            <li className="nav-item">
              <a
                style={{
                  fontWeight: "bold",
                  fontSize: "large",
                  fontFamily: "Myriad Pro",
                }}
                className="nav-link"
                href="#"
              >
                How it Works
              </a>
            </li>
            <li className="nav-item">
              <a
                style={{
                  fontWeight: "bold",
                  fontSize: "large",
                  fontFamily: "Myriad Pro",
                }}
                className="nav-link"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                style={{
                  fontWeight: "bold",
                  fontSize: "large",
                  fontFamily: "Myriad Pro",
                }}
                className="nav-link"
                href="#"
              >
                Docs
              </a>
            </li>
          </ul>
          <Btn
            style={{ border: "none", background: "#F8F9F9 ", color: "black" }}
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Sign in
          </Btn>{" "}
          <button
            style={{ color: "white", background: "#6495ED" }}
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Get Started
          </button>
        </div>
      </nav>
      <div
        style={{ textAlignLast: "center", fontSize: "large", marginTop: "10%" }}
      >
        <p style={{ color: "grey" }}>Introducing Violet Researchers </p>
        <h1
          style={{
            fontSize: "400%",
            fontWeight: "500",
            color: "#4A235A ",
            fontFamily: "Baloo",
          }}
        >
          IoT Platform as a Service
        </h1>
        <p style={{ color: "grey", width: "26%", marginLeft: "37%" }}>
          Our products help companies build, deploy and manage their business
          without heavy investments.{" "}
        </p>
        <Btn
          style={{ border: "none", background: "#F8F9F9 ", color: "black" }}
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          Request a Demo
        </Btn>{" "}
        <br></br>
        <br></br>
      </div>{" "}
      <div className="text-center p-3" style={{ marginTop: "14%" }}>
        © 2022 Violet Labs. All rights reserved.
      </div>
    </div>
  );
};
export default Main;
