import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampuses } from '../reducers/campuses'
import { Link } from 'react-router-dom';

const Campus = () => {
    const campuses = useSelector(state => state.campuses)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCampuses())
    }, [dispatch])

    return (
        <div>
            <h1>Campuses</h1>
            <ul>
                {campuses.map((campus) => (
                    <div key={campus.id}>
                        <Link to={`./${campus.id}`}>
                            <li>{campus.name}</li>
                        </Link>
                        <img src={campus.imageUrl} />
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Campus;