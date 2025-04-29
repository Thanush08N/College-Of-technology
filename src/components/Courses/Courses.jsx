// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Courses.css'
import program1 from '../../assets/tlr.jpg'
import program2 from '../../assets/elect.jpg'
import program3 from '../../assets/alu.jpg'
import program_icon1 from '../../assets/program-icon-1.png'
import program_icon2 from '../../assets/program-icon-2.png'
import program_icon3 from '../../assets/program-icon-3.png'


const Programs = () => {
    return (
        
        <div className='programs'>

            <div className="program">
                <img src={program1} alt="" />

                <div className="caption">
                    <img src={program_icon1} alt="" />
                    <p>............</p>
                </div>

            </div>

            <div className="program">
                <img src={program2} alt="" />
                <a href="/Courses">
                <div className="caption">
                    <img src={program_icon2} alt="" />
                    <p className='p'>Click here.. <br />for More Details</p>
                   
                </div> </a>

            </div>

            <div className="program">
                <img src={program3} alt="" />

                <div className="caption">
                    <img src={program_icon3} alt="" />
                    <p>............</p>
                </div>

            </div>
            

        </div>
    )
}

export default Programs