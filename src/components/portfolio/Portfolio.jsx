import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import Fade from "react-reveal/Fade";

//DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "E-Commerce Website",
    github: "https://github.com/shadab-ans/E-Commerce",
    demo: "https://shopper-square-2.firebaseapp.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Tic Tac Toe Game",
    github: "https://github.com/shadab-ans/Tic-Tac-Toe-Game",
    demo: "https://shadab-ans.github.io/Tic-Tac-Toe-Game/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Rent Home",
    github: "https://github.com/shadab-ans/Rent-Home",
    demo: "https://shadab-ans.github.io/Rent-Home/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Simple Calculator",
    github: "https://github.com/shadab-ans/Simple-Calculator",
    demo: "https://shadab-ans.github.io/Simple-Calculator/",
  },
  {
    id: 5,
    image: IMG5,
    title: "The Orange",
    github: "https://github.com/shadab-ans/The-Orange",
    demo: "https://shadab-ans.github.io/The-Orange/",
  },
  {
    id: 6,
    image: IMG6,
    title: "News Magazine",
    github: "https://github.com/shadab-ans/News-Magazine",
    demo: "https://shadab-ans.github.io/News-Magazine/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Fade bottom>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </Fade>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <Fade bottom>
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <Fade bottom>
                    <a
                      href={github}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </Fade>
                  <Fade bottom>
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  </Fade>
                </div>
              </article>
            </Fade>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
