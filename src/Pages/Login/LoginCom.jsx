import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateEmployee } from '../../Services/Loginservices.js'
import { getDep } from '../../Services/Loginservices.js'
import './Login.css'


const LoginCom = () => {
    const [id, setid] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [emailId, setemailId] = useState('')
    const [errors, setErrors] = useState({
        departmentName: '',
        departmentDescription: ''
    })

    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getDep(id).then((response) => {
                setfirstName(response.data.firstName);
                setlastName(response.data.lastName);
                setemailId(response.data.emailId);

            }).catch(error => { console.error(error); })
        }
    })


    const handleid = (e) => setid(e.target.value)
    const handlefirstName = (e) => setfirstName(e.target.value)
    const handlelastName = (e) => setlastName(e.target.value)
    const handleemailId = (e) => setemailId(e.target.value)


    function saveEmployee(e) {
        e.preventDefault();

        if (valudateForm()) {
            const Employee = { id, firstName, lastName, emailId }

            console.log(Employee)
            CreateEmployee(Employee).then((response) => {
                console.log(response.data);
                navigator('/Login')
            }
            )
        }

    }

    function test() {
        navigator('/Login')
    }

    function valudateForm() {
        let valid = true;
        const errorCopy = { ...errors }

        if (firstName.trim()) {
            errorCopy.firstName = '';

        } else {
            errorCopy.firstName = 'First Name is Required';
            valid = false;
        }

        if (lastName.trim()) {
            errorCopy.lastName = '';

        } else {
            errorCopy.lastName = 'Last Name is Required';
            valid = false;
        }

        setErrors(errorCopy);
        return valid;
    }



    function Pagetitle() {
        if (id) {
            return <h2 className='text-center'>Update Department</h2>
        }
        else {
            return <h2 className='text-center'>Add Department</h2>
        }

    }

    return (
        <div className='container0'>

            <div className='container pt-5 bg-secondary' >
                <div className='row '>
                    <div className='card my-5 '>
                        <div className='add-employee-form '>
                            <form>

                                <legend className='text-center tee'>Add Students</legend>

                                <div className="form-group mb-3 ">
                                    <label className="form-label">Id</label>
                                    <input type="text" className="form-control" placeholder=" id" name='Id' value={id} onChange={handleid} />
                                </div>

                                <div className="form-group mb-3">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control" placeholder="firstName" name='firstName' value={firstName} onChange={handlefirstName} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-control" placeholder=" lastName" name='lastName' value={lastName} onChange={handlelastName} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Email Id</label>
                                    <input type="email" className="form-control" placeholder=" emailId" name='emailId' value={emailId} onChange={handleemailId} />
                                </div>
                                <center><button type="submit" className="btn blu-btn" onClick={saveEmployee}>Submit</button>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginCom
