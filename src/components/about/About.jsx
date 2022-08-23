import './About.css'
import React from 'react'
import me from'../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export default function About() {
  return (
    <section id='about'>
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
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working <br /></small>
              <small>BA Web Dev</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Team Player</h5>
              <small>Inspires the collective</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed Projects</small>
            </article>

            
          </div>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Voluptas laudantium blanditiis saepe itaque in atque mollitia dolorum unde
              amet ex totam quaerat provident reprehenderit explicabo aperiam dolor, similique perspiciatis doloribus!
            </p>

            <a href='#contact' className='btn btn-primary'> Button </a>

        </div>

      </div>
    </section>
  )
}
