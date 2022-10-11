import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizeDetails from './QuizeDetails';
import Result from './Result';

const CourseQuize = () => {
    const [CountCorrect, setCorrect] = useState(0);
    const [countWrong , SetCountWrong] = useState(0);
    const quizData = useLoaderData();
    const quizes = quizData.data.questions;
    const {name} = quizData.data;
    // console.log(quizData.data.questions);
    // console.log(CountCorrect);
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-3xl text-center mt-10'>This is quize section for {name} </h1>
            <div className=' grid lg:grid-cols-4 gap-3'>
                <div className='order-2 lg:col-span-3'>
                {
                quizes.map(quize => <QuizeDetails key={quize.id} quize ={quize} setCorrect={setCorrect} CountCorrect = {CountCorrect} SetCountWrong={SetCountWrong} countWrong={countWrong}></QuizeDetails>)
            }
                </div>
                <div className=' lg:ml-10 bg-base-300 mt-10 text-center lg:fixed lg:right-10 lg:h-96 p-4 text-sm '>
                    <Result countWrong={countWrong} CountCorrect={CountCorrect}></Result>
                </div>
            </div>
          
        </div>
    );
};

export default CourseQuize;