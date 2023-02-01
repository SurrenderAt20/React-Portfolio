import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/FITFIX.png";
import IMG2 from "../../assets/pday.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

export default function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "FitFix - A Fitness Application in React, Express, Node & MySql",
      github: "https://github.com/SurrenderAt20/FitFixProject",
      demo: "https://google.com",
    },

    {
      id: 2,
      image: IMG2,
      title: "A Planday Internship Project. React, Typescript, Javascript",
      github: "https://github.com/SurrenderAt20/PDMockServ",
      demo: "https://google.com",
    },

    {
      id: 3,
      image: IMG3,
      title: "Placeholder Three",
      github: "https://github.com",
      demo: "https://google.com",
    },

    {
      id: 4,
      image: IMG4,
      title: "Placeholder Four",
      github: "https://github.com",
      demo: "https://google.com",
    },

    {
      id: 5,
      image: IMG5,
      title: "Placeholder Five",
      github: "https://github.com",
      demo: "https://google.com",
    },

    {
      id: 6,
      image: IMG6,
      title: "Placeholder Six",
      github: "https://github.com",
      demo: "https://google.com",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
