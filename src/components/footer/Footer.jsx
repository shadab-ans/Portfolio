import React from "react";
import "./footer.css";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import logo from "../../assets/logo.png";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer>
      <Fade bottom>
        <a href="#home" className="footer__logo">
          <img src={logo} alt="logo" />
          SHADAB
        </a>
      </Fade>

      <ul className="permalinks">
        <Fade bottom>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </Fade>
      </ul>

      <div className="footer__socials">
        <Fade bottom>
          <a
            href="https://github.com/shadab-ans"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://instagram.com/thisisshadab/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            href="https://twitter.com/thisisshadab"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>
        </Fade>
      </div>

      <div className="footer__copyright">
        <Fade bottom>
          <small>&copy; SHADAB Portfolio, All rights reserved. </small>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;
