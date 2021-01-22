import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Admission.css';
import { NavLink } from 'react-router-dom';

function Admission() {
    const [grades, setGrades] = useState([]);

    useEffect(() => {
        axios.get('/api/getAdmissionData')
        .then((response) => {
            if(response.status === 200){
                setGrades(response.data);
            } else {
                alert('Error loading grade data!');
            }
        })
        .catch((error) => {
            alert('Server unreachable!');
        });
    }, []);

    const liListGrade = grades.map(grade =>{
            const toPath= '/admission/'+grade;
            return (
            <li key={grade}>
                <NavLink className='admission-group-navlink' to={{
                    pathname:toPath,
                    gradeProps:{
                        gradeName:grade
                     }
                    }}
                ><li>{grade}</li></NavLink>
                </li>)
    });

    return (
        <div>
            { grades.length > 0 ? [
                <><h4 className='admission-h4'>Grades Available!</h4>
                <ul className='addmission-ul'>
                    {liListGrade}
                </ul></>
            ]:[
                <h4 className='admission-h4'>Grades Data NOT Available!</h4>
            ]
            }
            <NavLink className='admission-back2home' to='/'>Back To Home</NavLink>
        </div>
    )
}

export default Admission
