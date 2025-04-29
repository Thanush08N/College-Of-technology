// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useEffect, useState } from 'react'
import logo from '../../assets/logo1.png'
import '../../components/Navbar/Navbar.css'
import './Gallery.css'
import img from "../../assets/alu.jpg"
import img1 from "../../assets/alu3.jpg"
import img2 from "../../assets/elect3.jpg"
import img3 from "../../assets/tlr4.jpg"
import img4 from "../../assets/tlr2.jpg"
import img5 from "../../assets/mnic3.jpg"
import img6 from "../../assets/mnic1.jpg"
import img7 from "../../assets/block1.jpg"
import img8 from "../../assets/gold1.jpg"
import img9 from "../../assets/it2.jpg"
import img10 from "../../assets/elect2.jpg"
import img11 from "../../assets/gold.jpg"


const Gallery = () => {

    const [sticky, setStickey] = useState(false);


    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY < 200 ? setStickey(true) : setStickey(false);
        })
    }, []);
    return (

        <div><nav className={`container ${sticky ? 'dark-nav' : ''}`} >
            <img src={logo} alt='' className='logo' />
            <ul /*className={mobileMenu? '':'hide-mobile-menu'}*/>
                <li ><a href="/">Home</a></li>
                <li><a href="/Courses">Courses</a></li>
                <li><a href="/About">About</a></li>
                <li className='pointer'><a href="/Gallery"><b>Gallery</b></a></li>
                <li><a href="/Testimonials">Testimonials</a></li>
                <li><a href="/Contact" className='btn'>Contact</a></li>
            </ul>
        </nav>


            <div className='title ca'>
                <p>Image Gallery </p>
                <h2>Showcasing Brilliant Minds</h2>

                <div className='Gallery'>



                    <img src={img} alt="" />
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                    <img src={img9} alt="" />
                    <img src={img10} alt="" />
                    <img src={img11} alt="" />

                </div>
            </div>
        </div>
    )
}

export default Gallery