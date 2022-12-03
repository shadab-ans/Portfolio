import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const Experience = () => {
  return (
    <section id="experience">
      <Fade bottom>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </Fade>

      <div className="container experience__container">
        <Fade left>
          <div className="experience__frontend">
            <Fade right>
              <h3>Frontend Development</h3>
              <div className="experience__content">
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icons" />
                  <div>
                    <h4>HTML</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icons" />
                  <div>
                    <h4>CSS</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icons" />
                  <div>
                    <h4>JavaScript</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icons" />
                  <div>
                    <h4>Bootstrap</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icons" />
                  <div>
                    <h4>React</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
              </div>
            </Fade>
          </div>
        </Fade>

        {/* END OF FRONTEND */}

        <Fade right>
          <div className="experience__backend">
            <Fade left>
              <h3>Backend Development</h3>
              <div className="experience__content">
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icons" />
                  <div>
                    <h4>Node JS</h4>
                    <small className="text-light">Advance</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icons" />
                  <div>
                    <h4>PHP</h4>
                    <small className="text-light">Basic</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icons" />
                  <div>
                    <h4>MySQL</h4>
                    <small className="text-light">Advance</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icons" />
                  <div>
                    <h4>Python</h4>
                    <small className="text-light">Basic</small>
                  </div>
                </article>
              </div>
            </Fade>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Experience;
