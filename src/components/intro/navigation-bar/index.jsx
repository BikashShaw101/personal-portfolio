import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";
import CallToAction from "../../shared/CallToAction";

import logo from "../../../images/EnbikCognition.png";

const Navigation = () => {
  return (
    <div className="top-navigation-bar">
      <div className="app-logo">
        <Link to={'/'}><img src={logo} alt="EnbikCognition" /></Link>
      </div>

      <div className="navigation">

        <Link to={'/research'} className="link" >
          <span className="navigation-item">Research</span>
        </Link>

        <Link to={'/blogs'} className="link" >
          <span className="navigation-item">Blogs</span>
        </Link>

        <Link to={'/videos'} className="link" >
        <span className="navigation-item">Videos</span>
        </Link>

        <Link to={'/contact'} className="link" >
          <span className="navigation-item">Contact</span>
        </Link>

        <Link to={"/register"} className="link">
          <CallToAction text="Register" />
        </Link>

      </div>
    </div>
  );
};

export default Navigation;
