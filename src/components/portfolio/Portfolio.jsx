import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

export default function Portfolio() {

  const data =  [

    {
      id: 1,
      image: IMG1,
      title: 'Placeholder one',
      github: 'https://github.com',
      demo: 'https://google.com'
    },

    {
      id: 2,
      image: IMG2,
      title: 'Placeholder one',
      github: 'https://github.com',
      demo: 'https://google.com'
    },

    {
      id: 3,
      image: IMG3,
      title: 'Placeholder one',
      github: 'https://github.com',
      demo: 'https://google.com'
    },

    {
      id: 4,
      image: IMG4,
      title: 'Placeholder one',
      github: 'https://github.com',
      demo: 'https://google.com'
    },

    {
      id: 5,
      image: IMG5,
      title: 'Placeholder one',
      github: 'https://github.com',
      demo: 'https://google.com'
    },

    {
      id: 6,
      image: IMG6,
      title: 'Placeholder one',
      github: 'https://github.com',
      demo: 'https://google.com'
    },

  ];

  
  
  
  
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>



      <div className="container portfolio__container">

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Demo</a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Demo</a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Demo</a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Demo</a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Demo</a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn' target='_blank'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>Demo</a>
            </div>
          </div>
        </article>

        

        


      </div>
    </section>
  )
}
