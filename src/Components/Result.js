import React from 'react';

const Result = ({countWrong, CountCorrect}) => {
    return (
        <div className='lg:mt-10'>
            <h1 className='lg:text-2xl'>Correct answer : {CountCorrect}</h1>
            <h1 className=" lg:text-2xl">Wrong answer : {countWrong} </h1>
        </div>
    );
};

export default Result;