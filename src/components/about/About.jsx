import "./About.css";
import React from "react";
import me from "../../assets/lasse2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Bachelor in Web Development</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Team Player</h5>
              <small>Aims to inspires the collective</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Multiple projects completed</small>
            </article>
          </div>

          <p>
            Hello! My name is Lasse Vestergaard Fuglsbjerg. I am 27 years old
            with a Bachelor in Web Development. I have a passion for solving
            complex business cases with a focus on delivering sustainable and
            long term solutions. I'm an extrovert which seek to inspire the team
            I'm in and do what I can to push the spirit through the roof!
          </p>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Contact me?{" "}
          </a>
        </div>
      </div>
    </section>
  );
}
