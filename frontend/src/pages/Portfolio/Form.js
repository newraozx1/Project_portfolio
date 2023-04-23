import React, { useState } from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import Portfolio from "../Portfolio";
import "../../components/sidebar.scss";

const Form = () => {
  const skills = [
    "HTML/CSS/JavaScript",
    "Node.js",
    "React.js",
    "MongoDB",
    "Python",
    "SQL",
    "Manual Testing",
  ];
  const ismobile = window.innerWidth <= 800;

  return (
    <div className="form">
      <div className="namerow">
        <h1 className="name">NIKHIL RAO</h1>
      </div>

      <div className="skillrow">
        <h3 className="skillheading">SKILLS</h3>

        <ul className="ul">
          {skills.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Form;
