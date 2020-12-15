import React from "react";
import { useHistory } from "react-router-dom";
import "./About.css";

const About = () => {
  const historyFunc = useHistory();
  return <div style={{ fontSize: 30 }}>
    <h1 className="about-main-title">
      About
    </h1>
    <div className="button-parent">
    <button className="go-button" onClick={()=>{historyFunc.push("/")}}>Go Back</button>
    </div>
    </div>;
};

export default About;
