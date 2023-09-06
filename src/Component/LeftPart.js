import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import "material-icons/iconfont/material-icons.css";
import "material-symbols";
import logo from "../image/weather.png";

const LeftPart = () => {
  // const [path, setPath] = useState("homePage");
  // const url = window.location.href;
  // const pathname = window.location.pathname;
  // useEffect(() => {
  //   console.log(url, pathname);
  // }, [window.location.pathname]);
  // const linkHandler = () => {};
  return (
    <header className="header">
      <div className="left-part">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="after-logo">
          <Link
            to={"/"}
            style={{
              color: "white",
              textDecoration: "none",
            }}
            // onClick={setPath("homepage")}
          >
            <div className={"active-link"}>
              <span class="material-symbols-outlined">home</span>
            </div>
          </Link>
          <div>
            <Link
              to={"/map"}
              style={{
                textDecoration: "none",
                outline: "none",
                color: "white",
              }}
              // onClick={setPath("map")}
              onClick={window.location.reload}
            >
              <div className={"active-link"}>
                <span class="material-symbols-outlined">location_on</span>
              </div>
            </Link>
          </div>
          <div>
            <Link
              // to={"/"}
              style={{
                textDecoration: "none",
                outline: "none",
                color: "white",
              }}
            >
              <span class="material-symbols-outlined">settings</span>
            </Link>
          </div>
        </div>
        <div className="last-part">
          <div>
            <Link
              // to={"/notification"}
              style={{
                textDecoration: "none",
                outline: "none",
                color: "white",
              }}
            >
              <span class="material-symbols-outlined">notifications</span>
            </Link>
          </div>
          <div>
            <span class="material-symbols-outlined">account_circle</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LeftPart;
