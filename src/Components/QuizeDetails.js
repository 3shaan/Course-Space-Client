import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const QuizeDetails = ({quize, setCorrect, CountCorrect,countWrong, SetCountWrong}) => {
    const {question, options, correctAnswer} = quize;
    const [answer, setAnswer] = useState(null);
    const [check, setCheck] = useState(new Array(options.length).fill(false));
    const [color, setColor] = useState(new Array(options.length).fill(null))
    const handalewAnswer = (option, position)=>{

        
        const updateColor = color.map((bg, index)=>{
            if(index === position && option === correctAnswer){
               return bg= 'bg-blue-800';
            }
            if ( index === position && option !== correctAnswer){
                return bg = 'bg-red-800';
            }
           
        })
            setColor(updateColor);

            const updatecheck = check.map((item, index)=>{
                return index === position ? !item : item 
            })
            setCheck(updatecheck);




        if(!answer){
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
            <h1 className='text-2xl '>Question : {question}</h1>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {options.map((option,index) => {
                       return (
                        <div onClick={()=> handalewAnswer(option, index)} key={Math.random()}  className={`box-content border text-xl mt-4 rounded-lg lg:h-20 lg:flex items-center justify-center lg:w-96 p-3 ${color[index]}`}>
                       <p className='p-4'><input type="checkbox" checked={check[index]} onChange={handalewAnswer} className="checkbox checkbox-secondary" /> {option}</p>
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