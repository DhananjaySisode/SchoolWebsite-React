import React from 'react'
import './Admission.css';

function FeesTable(props) {


    const getTD = Object.keys(props.gradeDetails).map((key) =>{
        return (
            <tr key={key}>
                {
                    Object.keys(props.gradeDetails[key]).map((values)=> 
                        values !== 'id' ? [
                            values === 'fees' ?
                            <td key={props.gradeDetails[key][values]}>Rs:- {props.gradeDetails[key][values]}</td>:
                            <td key={props.gradeDetails[key][values]}>{props.gradeDetails[key][values]}</td>
                        ]
                         :null
                    )
                }
            </tr>)
    });

    return (
        <div className='feesTable-div'>
            <table className='feesTable-table' >
            <thead>
                <tr>
                <th>Grade</th>
                <th>Fees</th>
                <th>Seats</th>
                </tr>
            </thead>
            <tbody>
            {getTD}
            </tbody>
            </table>
        </div>
    )
}

export default FeesTable;
