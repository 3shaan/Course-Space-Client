import React from 'react';

const QuizeDetails = ({quize}) => {
    const {question, options, correctAnswer} = quize;
    console.log(options);
    return (
        <div className='my-10'>
            <h1 className='text-2xl '>quistion : {question}</h1>
            <div>
                <div className='grid grid-cols-2 gap-5'>
                    {options.map(option =>{
                       return <div className='box-content border text-xl mt-4 rounded-lg h-20 flex items-center justify-center w-96'>
                       <p>{option}.</p>
                   </div> 
                    })}
                </div>
                {/* <div className='box-content border text-xl mt-4 rounded-lg'>
                    <p>Lorem ipsum dolor sit.</p>
                </div> */}
            </div>
        </div>
    );
};

export default QuizeDetails;