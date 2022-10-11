import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizeDetails from './QuizeDetails';

const CourseQuize = () => {
    const quizData = useLoaderData();
    const quizes = quizData.data.questions;
    const {name} = quizData.data;
    // console.log(quizData.data.questions);
    return (
        <div>
            <h1 className='text-3xl text-center mt-10'>This is quize section for {name} </h1>
            {
                quizes.map(quize => <QuizeDetails key={quize.id} quize ={quize} ></QuizeDetails>)
            }
        </div>
    );
};

export default CourseQuize;