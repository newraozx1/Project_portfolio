import React, { useState, useTransition } from "react";
import { Link, redirect } from "react-router-dom";
import "./navbar.scss";
// import Sidebartogle from "./sidebartogle";
import neko from "../media/yawn.3a71a27b32a1bab7a305.gif";

const Header = () => {
  const ismobile = window.innerWidth <= 750;
  const currentUrl = window.location.href;

  const [pagelink, setpagelink] = useState("/contact");
  const [pagefont, setpagefont] = useState("CONTACT");
  const linkchanger = () => {
    setpagefont(pagefont === "CONTACT" ? "HOME" : "CONTACT");
    setpagelink(pagelink === "/contact" ? "/" : "/contact");
  };

  return (
    <div className="navbar">
      <h4 className="logo">Breez||nik</h4>
      {ismobile ? <img className="nekoimage" src={neko}></img> : ""}
      <div className="linkclass">
        {/* <Sidebartogle></Sidebartogle> */}
        <Link className="link" onClick={linkchanger} to={pagelink}>
          {pagefont}
        </Link>
      </div>
    </div>
  );
};

export default Header;
