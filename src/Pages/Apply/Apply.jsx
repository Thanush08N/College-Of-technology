// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Apply.css'

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        course: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        // Here you can also send the data to your server or API
    };

    return (
        <div className='container0'>
            <div className='row '>
                <div className='card my-5 '>
                    <h2>College Course Application Form</h2>
                    {submitted ? (
                        <div className='card'>
                            <h3>Thank you for your application, {formData.name}!</h3>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>
                                    Name:
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Email:
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Course:
                                    <select
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select a course</option>
                                        <option value="Aluminium Fitting">Aluminium Fitting</option>
                                        <option value="Electronic">Electronic</option>
                                        <option value="Software development">Software Development</option>
                                        <option value="MSR">MSR</option>
                                        <option value="Tailoring">Tailoring</option>
                                        <option value="Networking">Networking</option>
                                        <option value="ICT">ICT</option>
                                    </select>
                                </label>
                            </div>
                            <button className='btn blu-btn' type="submit">Apply</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ApplicationForm;