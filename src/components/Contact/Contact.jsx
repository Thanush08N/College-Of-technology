import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/mail-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import footlogo from '../../assets/R.png'


const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "bab35edd-c4f8-4444-93f5-fecb48ed6dc8");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };





    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions,
                    and suggestions are important to us as we strive to provide exceptional service to our college community.</p>
                <ul>
                    <li> <img src={mail_icon} alt="" />Contact@COTJAFFNA</li>
                    <li><img src={phone_icon} alt="" />+94 123-456-789</li>
                    <li><img src={location_icon} alt="" />No 04 Brown Road, Jaffna<br />Sri Lanka</li>
                </ul>

                <img className='footlogo' src={footlogo} alt="" />

            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />


                    <label>Mobile Number</label>
                    <input type="tel" name='mobile' placeholder='Enter your mobile number' required />


                    <label>Write your message here</label>
                    <textarea name="message" rows={10} placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>

                </form>
                <span>{result}</span>

            </div>

        </div>
    )
}

export default Contact