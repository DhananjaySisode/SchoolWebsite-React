import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Admission.css';
import FeesTable from './FeesTable';

function GradeDetails(props) {
    const [gradeDetails, setGradeDetails] = useState({});

    useEffect(() => {
        axios.get('/api/getGradeDetails/'+props.location.gradeProps.gradeName)
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
    }, [props.location.gradeProps.gradeName]);
    

    return (
        <div>
            <FeesTable gradeDetails={gradeDetails}/>
        </div>
    )
}

export default GradeDetails;
