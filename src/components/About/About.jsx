// eslint-disable-next-line no-unused-vars
import React from 'react'
import './About.css'
import about_img from '../../assets/font21jpg.jpg'
//import play_icon from '../../assets/play-icon.png'


const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img' />
        <img src={0} alt="" className='play-icon' />
      </div>
      <div className='about-right'>
        <h3>ABOUT COLLEGE</h3>
        <h2>Nurting Tomorrow&apos;s Leaders Today</h2>
        <p>Technical education in Sri Lanka was established in 1893 with the establishment of the &quot;Technical School&quot; at Maradana,
          a technical education with a history of 125+ years, currently developed in 39 Technical Colleges located in different
          parts of the country. Action has been initiated to modernize the training programmes by evaluating the system to make
          them more relevant to the growth of the industry. Accordingly, it has created technical colleges and has recognized
          the departmental activities and programs of technical colleges. Necessary steps have been taken to implement the
          programmes of Technical Education to achieve the objectives of Technical Education.</p><br />


      </div>

    </div>
  )
}

export default About