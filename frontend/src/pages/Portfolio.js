import React, { useState } from "react";
import Form from "./Portfolio/Form";
import Projects from "./Portfolio/Projects";
import "./styles/portfolio.scss";
import { BsSlack } from "react-icons/bs";

const Portfolio = () => {
  const ismobile = window.innerWidth <= 750;
  const [visible, setvisible] = useState(false);
  const [buttonval, setbuttonval] = useState("PROJECTS");
  const togglesidebar = () => {
    setvisible(!visible);
    setbuttonval(buttonval === "PROJECTS" ? "HOME" : "PROJECTS");
  };

  if (!ismobile) {
    return (
      <div className="portfolio">
        <Form></Form>
        <Projects></Projects>
      </div>
    );
  }

  if (ismobile) {
    return (
      <div className="portfolio">
        <button className="togglebutton" onClick={togglesidebar}>
          {buttonval}
        </button>
        {visible === false ? <Form></Form> : ""}
        {visible === true ? <Projects></Projects> : ""}
      </div>
    );
  }
};

export default Portfolio;
