import React from 'react'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'

export const App = () => {

  return (
    <>

      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Navigation />
      <Footer />

    </>
  )

}

export default App;
