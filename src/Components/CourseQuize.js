import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizeDetails from './QuizeDetails';

const CourseQuize = () => {
    const [CountCorrect, setCorrect] = useState(0);
    const quizData = useLoaderData();
    const quizes = quizData.data.questions;
    const {name} = quizData.data;
    // console.log(quizData.data.questions);
    console.log(CountCorrect);
    return (
        <div className='w-9/12 mx-auto'>
            <h1 className='text-3xl text-center mt-10'>This is quize section for {name} </h1>
            {
                quizes.map(quize => <QuizeDetails key={quize.id} quize ={quize} setCorrect={setCorrect} CountCorrect = {CountCorrect} ></QuizeDetails>)
            }
        </div>
    );
};

export default CourseQuize;