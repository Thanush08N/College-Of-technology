import './Courses.css'
import { useEffect, useState } from 'react'
import logo from '../../assets/logo1.png'
import '../../components/Navbar/Navbar.css'
import Aluminium from '../../assets/alu5.jpg'
import Electronic from '../../assets/elect.jpg'
import Software from '../../assets/it1.jpg'
import MSR from '../../assets/mnic2.jpg'
import Tailor from '../../assets/tlr2.jpg'
import ICT from '../../assets/it.jpg'
import Networking from '../../assets/it2.jpg'
//import img7 from '../../assets'
//import img8 from '../../assets/'

const Courses = () => {


    const [sticky, setStickey] = useState(false);


    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY < 20000 ? setStickey(true) : setStickey(false);
        })
    }, []);

    return (

        <div>  <nav className={`container ${sticky ? 'dark-nav' : ''}`} >
            <img src={logo} alt='' className='logo' />
            <ul /*className={mobileMenu? '':'hide-mobile-menu'}*/>
                <li ><a href="/">Home</a></li>
                <li className='pointer'><a href="/Courses"><b>Courses</b></a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Gallery">Gallery</a></li>
                <li><a href="/Testimonials">Testimonials</a></li>
                <li><a href="/Contact" className='btn'>Contact</a></li>
            </ul>
        </nav>

            <div className='ca'>

                <div className='title m3'>
                    <p>Our Courses </p>
                    <h2>Showcasing Brilliant Minds</h2>

                    <div className='courses1 container'>
                        <div className='card'>

                            <img src={Aluminium} alt="" />
                            <div className='card-body'>
                                <h3>Aluminium Fitting</h3>
                                <button className='btn dark-btn'><a href="/Apply">Apply&apos;</a></button>
                            </div>

                        </div>



                        <div className='card'>

                            <img src={Electronic} alt="" />
                            <div className='card-body'>
                                <h3>Electronic</h3>
                                <button className='btn dark-btn'><a href="/Apply">Apply&apos;</a></button>

                            </div>

                        </div>



                        <div className='card'>

                            <img src={Software} alt="" />
                            <div className='card-body'>
                                <h3>Software development</h3>
                                <button className='btn dark-btn'><a href="/Apply">Apply&apos;</a></button>

                            </div>

                        </div>



                        <div className='card'>

                            <img src={MSR} alt="" />
                            <div className='card-body'>
                                <h3>MSR</h3>
                                <button className='btn dark-btn'><a href="/Apply">Apply&apos;</a></button>

                            </div>

                        </div>



                        <div className='card'>

                            <img src={Tailor} alt="" />
                            <div className='card-body'>
                                <h3>Tailoring</h3>
                                <button className='btn dark-btn'><a href="/Apply">Apply&apos;</a></button>

                            </div>

                        </div>



                        <div className='card'>

                            <img src={Networking} alt="" />
                            <div className='card-body'>
                                <h3>Networking</h3>
                                <button className='btn dark-btn'><a href="/Apply">Apply&apos;</a></button>

                            </div>

                        </div>



                        <div className='card'>

                            <img src={ICT} alt="" />
                            <div className='card-body'>
                                <h3>ICT</h3>
                                <button className='btn dark-btn'><a href="/Apply">Apply&apos;</a></button>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Courses