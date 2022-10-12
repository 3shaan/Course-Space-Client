import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    // console.log(course);
    const {id, logo, name , total} = course;
    return (
        <div id='course'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className='text-lg'>totol Quize: {total} </h2>
                <div className="card-actions justify-end">
                <Link to={`course/${id}`} className="btn btn-primary">start quize</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Course;