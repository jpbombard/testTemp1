import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents, selectStudents } from '../reducers/students';
import { Link } from 'react-router-dom';

const Student = () => {
    const students = useSelector(selectStudents)
    const dispatch = useDispatch();
    console.log(students);

    useEffect(()=>{
        dispatch(fetchStudents())
    }, [dispatch])
    
    return (
        <div>
            <h1>Students</h1>
            <ul>
                {students.map((student) => (
                    <div key={student.id}>
                        <Link to={`./${student.id}`}>
                            <li>{`${student.firstName} ${student.lastName}`}</li>
                        </Link>
                        <img src={student.imageUrl} />
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Student;