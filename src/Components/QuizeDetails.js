import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const QuizeDetails = ({quize, setCorrect, CountCorrect,countWrong, SetCountWrong}) => {
    const {question, options, correctAnswer} = quize;
    const [answer, setAnswer] = useState(null);
    // console.log(quize);
   
    const handalewAnswer = (option)=>{
        if(!answer){
            console.log('object');
            
            if(option === correctAnswer){
                toast('correct');
                setCorrect(CountCorrect + 1);

            }
            else{
                toast('wrong');
                SetCountWrong(countWrong + 1);

            }
        }
        setAnswer(option);
    }

    return (
        <div className='my-10 bg-base-300 rounded-md p-5 shadow-lg'>
            <h1 className='text-2xl '>Qestion : {question}</h1>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {options.map(option => {
                       return (
                        <div onClick={()=> handalewAnswer(option)} key={Math.random()}  className={`box-content border text-xl mt-4 rounded-lg lg:h-20 lg:flex items-center justify-center lg:w-96 p-3 bg-base-200 `}>
                       <p className='p-4'><FontAwesomeIcon className='mx-4' icon={faCheckSquare}/>{option}</p>
                   </div> 
                       )
                    })}
                </div>
               <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default QuizeDetails;