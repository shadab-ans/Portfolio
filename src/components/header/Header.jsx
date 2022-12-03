import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import Fade from "react-reveal/Fade";


const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <Fade top>
          <h5>Hello I'm</h5>
        </Fade>
        <Fade bottom>
          <h1>Shadab Ansari</h1>
          <h5 className="text-light">Frontend Developer</h5>
        </Fade>
        <CTA />
        <HeaderSocials />

        <Fade top>
          <div className="me">
            <Fade bottom>
              <img src={ME} alt="" />
            </Fade>
          </div>
        </Fade>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
