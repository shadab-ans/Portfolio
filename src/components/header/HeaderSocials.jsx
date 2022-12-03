import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Slide from "react-reveal/Slide";

function HeaderSocials() {
  return (
    <Slide left>
      <div className="header___socials">
        <a
          href="https://linkedin.com/in/shadab-ansari-886417240"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/shadab-ans"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/thisisshadab/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
    </Slide>
  );
}

export default HeaderSocials;
