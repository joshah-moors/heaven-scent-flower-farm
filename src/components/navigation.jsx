import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll image-link" href="#page-top">
            <img className="nav-logo"
              src="https://lh3.googleusercontent.com/pw/AP1GczPfXOj6S2ZDg3fCWyJWn2gYKMdTJTjg1G2s2jACzwoMFICXIOqmQtpqIlT4_NlaCp_61-JtBw4xWk0knRh795zwqJtvPn5AlJ2oBw8bFkSIRNP8JmFRh73ffId9jD6vH-zaj0FUX15qz93XXXZyllIy=w893-h821-s-no-gm?authuser=0"
              alt="Heaven Scent Flower Farm logo"
            ></img>
            <span>Heaven Scent Flower Farm</span>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
