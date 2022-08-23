import React from 'react'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import About from './components/about/About'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export const App = () => {

  return (
    <>

      <Header />
      <Navigation />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />

    </>
  )

}

export default App;
