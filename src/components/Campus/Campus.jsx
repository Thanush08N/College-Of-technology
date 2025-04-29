// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Campus.css';
//import gallery1 from '../../assets/bg3.jpg'
import gallery2 from '../../assets/block1.jpg'
import gallery3 from '../../assets/alu6.jpg'
import gallery4 from '../../assets/parking.jpg'
import white_arrow from '../../assets/white-arrow.png'




const Campus = () => {






    return (
        <div className='campus'>
            <div className='gallery'>
                <img src={gallery2} alt="" />
                <img src={gallery3} alt="" />
                <img src={gallery4} alt="" />
            </div>

            <button className='btn dark-btn' type='button' >
                <a href="/Gallery">
                    See more here <img src={white_arrow} alt="" /></a></button>
        </div>
    )
}

export default Campus