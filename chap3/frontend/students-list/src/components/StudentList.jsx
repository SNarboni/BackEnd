import React from 'react'
import {Link} from "react-router-dom";

const StudentList = (props) => {
    return (
        <>
            {props.students.map((eleve) => {
                return <p>{eleve.name}</p>
            })}
            <Link to="/add">ajouter un nom</Link>
        </>
    )
}

export default StudentList
