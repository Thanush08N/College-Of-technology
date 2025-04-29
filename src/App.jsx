// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Courses from './components/Courses/Courses'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
//import Gallery from './Pages/gallery/Gallery'

const App = () => {
  return (
    <div>

      <Navbar />
      <Hero />

      <div className='container'>
        <Title subtitle="Our Courses" title='What We Offer' />
        <Courses />

        <About />

        <Title subtitle="Gallery" title='College Photos' />
        <Campus />

        <Title subtitle="Testimonials" title='What Students Says' />
        <Testimonials />

        <Title subtitle="Contact" title='Get In Touch' />
        <Contact />
        
        <Footer />
      </div>

    </div>
  )
}

export default App