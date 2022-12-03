import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <section id="about">
      <Fade bottom>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </Fade>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <Fade left>
              <img src={ME} alt="About Img" />
            </Fade>
          </div>
        </div>

        <div className="about__content">
          <Fade right>
            <div className="about__cards">
              <article className="about__card">
                <Fade bottom>
                  <FaAward className="about__icon" />
                  <h5>Experience</h5>
                  <small>1+ Years Working</small>
                </Fade>
              </article>

              <article className="about__card">
                <Fade bottom>
                  <FiUsers className="about__icon" />
                  <h5>Clients</h5>
                  <small>20+ Worldwide</small>
                </Fade>
              </article>

              <article className="about__card">
                <Fade bottom>
                  <VscFolderLibrary className="about__icon" />
                  <h5>Projects</h5>
                  <small>50+ Completed</small>
                </Fade>
              </article>
            </div>
          </Fade>

          <Fade left>
            <p>
              A punctual and hardworking person, very interested in learning new
              stuff and research further to unknown information. Looking forward
              to adapt and learn from training in the new environment, also
              meeting new friends and to work together with them as a team.
            </p>
          </Fade>

          <Fade bottom>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
