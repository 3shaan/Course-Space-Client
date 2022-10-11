import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizeDetails = ({quize, setCorrect, CountCorrect}) => {
    const {question, options, correctAnswer} = quize;
    // console.log(quize);
    
    const correct = (ans)=>{
        // console.log(correctAnswer);
        // console.log(ans);

        if(ans === correctAnswer){
            console.log('correct');
            // ansClass.push('bg-blue-900');
            toast("yehh! correct answer");
            setCorrect( CountCorrect + 1);
            

        }
        else{
            console.log('wrong');
            toast("oops! wrong answer");
            
        }
        
    }

    return (
        <div className='my-10'>
            <h1 className='text-2xl '>quistion : {question}</h1>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {options.map(option => {
                       return (
                        <div onClick={(e)=>correct(e.target.innerText)} key={Math.random()}  className="box-content border text-xl mt-4 rounded-lg lg:h-20 lg:flex items-center justify-center lg:w-96 p-3 bg-base-200">
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