// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>COLLEGE OF TECHNOLOGY -JAFFNA</h1>
        <p>
          Become an internationally renowned, <br />leading Technical Education and Training provider.
        </p>
        <a href='/Login' className='btn'><b>Register</b> </a>
      </div>
    </div>
  )
}

export default Hero