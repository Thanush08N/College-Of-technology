import  { useEffect, useState } from 'react'
import { listEmployee } from '../../Services/Loginservices'
import { useNavigate } from 'react-router-dom'
import './Login.css'


const Login = () => {

    const [departments, setDepartments] = useState([])
    const navigator = useNavigate();
    useEffect(() => {
        listEmployee().then((response) => {
            setDepartments(response.data);
        }
        ).catch(error => { console.error(error); })
    }, [])

    function AddEmployee() {
        navigator('/Employee')
    }

    function updateDept(id) {
        navigator('/update/ ${id}')
    }

    return (
        <div className='container0'>
            <>
            <h2 className='title1'  >Departments Details</h2>
            
            <div className="container p-5 fluid text-center bg-secondary rounded">
                <div className='container  m-2 fluid bg-secondary'>
                    <button type='button' className="btn add-employee" onClick={AddEmployee}>Register </button>
                </div>
                <div  className='card fluid p-5 pb-4 shadow bg-muted'>
                <table className="table">
                    <thead>
                        <tr className="table-success">
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email ID</th>
                            <th colSpan={2}  >Actions</th>
                            


                        </tr>
                    </thead>
                    <tbody>
                        {
                            departments.map(Employee =>
                                <tr key={Employee.id}>
                                    <td>{Employee.id}</td>
                                    <td>{Employee.firstName}</td>
                                    <td>{Employee.lastName}</td>
                                    <td>{Employee.emailId}</td>

                                 
                                        <td className='px-0'><button className='btn blu-btn' onClick={() => updateDept(id)}>Update</button></td> 
                                    
                                        <td className='px-0'><button className='btn red-btn' onClick={() => deleteDept(id)}>Delete</button></td>
                                   

                                </tr>

                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>
            </>

        </div>)
}

export default Login