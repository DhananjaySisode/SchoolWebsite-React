import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Admission.css';
import FeesTable from './FeesTable';
import { NavLink, Redirect } from 'react-router-dom';

function GradeDetails(props) {
    const [gradeDetails, setGradeDetails] = useState({});

    useEffect(() => {
        const callGridAPI = () => {
            axios.get('/api/getGradeDetails/'+props?.location?.gradeProps?.gradeName)
            .then((response) => {
                if(response.status === 200){
                    setGradeDetails(response.data);
                } else {
                    alert('Error loading grade details!');
                }
            })
            .catch((error) => {
                alert('Server unreachable!');
            });
        }
        callGridAPI();
    }, [props?.location?.gradeProps?.gradeName]);

    return (
        <div>
            {props?.location?.gradeProps?.gradeName === undefined? <Redirect to='/admission'/>:null}
            <FeesTable gradeDetails={gradeDetails}/>
            <br/>
            <NavLink className='grade-back' to='/admission'>Back To Admission</NavLink>
            <br/>
            <NavLink className='grade-back' to='/'>Home</NavLink>
        </div>
    )
}

export default GradeDetails;
