//import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user.png'
import { useRef } from 'react'
//import user2 from '../../assets/user.png'
//import user3 from '../../assets/user.png'
//import user4 from '../../assets/user.png'




const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }




    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider" >
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Dinesh</h3>
                                    <span>College Of Technology, Jaffna</span>
                                </div>

                            </div>
                            <p>DTET provided me with an exceptional learning experience. The instructors are dedicated and
                                knowledgeable, and the facilities are top-notch. The practical training has really prepared
                                me for my future career. I couldn&apos;t have asked for a better education.</p>

                        </div>
                    </li>

                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Anjali</h3>
                                    <span>College Of Technology, Jaffna</span>
                                </div>

                            </div>
                            <p>Choosing DTET was one of the best decisions I&apos;ve ever made. The practical training sessions
                                are invaluable, and the industry connections I&apos;ve made are going to be game-changers for my career.</p>

                        </div>
                    </li>

                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Hatsun</h3>
                                    <span>College Of Technology, Jaffna</span>
                                </div>

                            </div>
                            <p>DTET has exceeded my expectations. The curriculum is well-structured, and the focus on real-world
                                applications has truly prepared me for my future job. I highly recommend DTET to anyone looking
                                for quality technical education.</p>

                        </div>
                    </li>

                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Madhavi</h3>
                                    <span>College Of Technology, Jaffna</span>
                                </div>

                            </div>
                            <p>I couldn&apos;t be happier with my experience at DTET. The staff genuinely cares about student success,
                                and the resources available are top-notch. I feel well-equipped and ready to take on new challenges in my field.</p>

                        </div>
                    </li>

                </ul>

            </div>

        </div>
    )
}

export default Testimonials