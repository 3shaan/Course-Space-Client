import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';
import Hero from './Hero';

const Home = () => {
    const loadCourse = useLoaderData();
    const courses = loadCourse.data;
    // console.log(courses);
    return (
        <div>
            <Hero></Hero>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:w-9/12 mx-auto mt-10'>
            {
                courses.map(course => <Course course={course} key={course.id}></Course>)
            }
            </div>
        </div>
    );
};

export default Home;